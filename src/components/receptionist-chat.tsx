"use client";

import { FormEvent, useState } from "react";

type ChatMessage = { role: "user" | "assistant"; text: string };

const starters = [
  "What services do you offer?",
  "Do you support roofing companies?",
  "How can I work with Ivy?",
];

export default function ReceptionistChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      text: "Hi there! 👋 Welcome to Ivy’s portfolio. I’m her virtual receptionist. I can tell you about her services and help you leave an inquiry. What would you like to know?",
    },
  ]);
  const [draft, setDraft] = useState("");
  const [busy, setBusy] = useState(false);
  const [leadMode, setLeadMode] = useState(false);
  const [lead, setLead] = useState({ name: "", email: "", company: "", need: "" });
  const [leadStatus, setLeadStatus] = useState("");

  async function sendMessage(value = draft) {
    const message = value.trim();
    if (!message || busy) return;
    const next = [...messages, { role: "user" as const, text: message }];
    setMessages(next);
    setDraft("");
    setBusy(true);
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next.slice(-10) }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "I couldn’t answer just now. Please try again.");
      setMessages((current) => [...current, { role: "assistant", text: data.reply }]);
    } catch (error) {
      setMessages((current) => [
        ...current,
        { role: "assistant", text: error instanceof Error ? error.message : "Something went wrong. Please try again." },
      ]);
    } finally {
      setBusy(false);
    }
  }

  async function submitLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLeadStatus("");
    setBusy(true);
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "I couldn’t send your inquiry. Please try again.");
      setLeadStatus("Thank you! Your inquiry has been sent to Ivy. She’ll follow up when she’s available.");
      setLead({ name: "", email: "", company: "", need: "" });
    } catch (error) {
      setLeadStatus(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="ivy-chat-root">
      {open && (
        <section className="ivy-chat-panel" aria-label="Ivy’s virtual receptionist">
          <header className="ivy-chat-header">
            <div className="ivy-chat-avatar">I</div>
            <div><strong>Ivy’s Virtual Receptionist</strong><span>Here to help · Usually replies instantly</span></div>
            <button className="ivy-chat-close" onClick={() => setOpen(false)} aria-label="Close chat">×</button>
          </header>
          <div className="ivy-chat-messages" aria-live="polite">
            {messages.map((message, index) => (
              <div className={\`ivy-chat-message ivy-chat-\${message.role}\`} key={index}>{message.text}</div>
            ))}
            {busy && <div className="ivy-chat-message ivy-chat-assistant">One moment, please…</div>}
            {messages.length === 1 && (
              <div className="ivy-chat-starters">
                {starters.map((starter) => <button key={starter} onClick={() => sendMessage(starter)}>{starter}</button>)}
              </div>
            )}
          </div>
          <div className="ivy-chat-actions">
            <button className="ivy-chat-lead-toggle" onClick={() => setLeadMode((value) => !value)}>
              {leadMode ? "Back to chat" : "Leave an inquiry"}
            </button>
          </div>
          {leadMode ? (
            <form className="ivy-chat-lead-form" onSubmit={submitLead}>
              <p>Share a few details and Ivy can get back to you by email.</p>
              <input required maxLength={100} placeholder="Your name" value={lead.name} onChange={(e) => setLead({ ...lead, name: e.target.value })} />
              <input required type="email" maxLength={254} placeholder="Your email" value={lead.email} onChange={(e) => setLead({ ...lead, email: e.target.value })} />
              <input maxLength={120} placeholder="Company (optional)" value={lead.company} onChange={(e) => setLead({ ...lead, company: e.target.value })} />
              <textarea required maxLength={2000} rows={3} placeholder="What kind of support do you need?" value={lead.need} onChange={(e) => setLead({ ...lead, need: e.target.value })} />
              <button type="submit" disabled={busy}>{busy ? "Sending…" : "Send inquiry"}</button>
              {leadStatus && <p className="ivy-chat-status" role="status">{leadStatus}</p>}
              <small>Your details will be sent to Ivy so she can respond to your inquiry.</small>
            </form>
          ) : (
            <form className="ivy-chat-compose" onSubmit={(e) => { e.preventDefault(); void sendMessage(); }}>
              <input value={draft} onChange={(e) => setDraft(e.target.value)} placeholder="Type your message…" maxLength={1000} aria-label="Your message" />
              <button type="submit" disabled={busy || !draft.trim()} aria-label="Send message">↑</button>
            </form>
          )}
        </section>
      )}
      <button className="ivy-chat-launcher" onClick={() => setOpen((value) => !value)} aria-expanded={open}>
        <span>{open ? "×" : "✳"}</span>{open ? "Close" : "Chat with us"}
      </button>
    </div>
  );
}
