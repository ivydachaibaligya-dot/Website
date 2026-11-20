"use client";

import { useRef, useState } from "react";

const reviews = [
  {
    name: "John C.",
    quote: "She is really great, and a high value to our company.",
  },
  {
    name: "Nicholas T.",
    quote:
      "I would certainly recommend Ivy. She has an unbelievable work ethics and strong values. Able to take feedback well and work on feedback. She was a great value to the projects we worked on.",
  },
  {
    name: "Edward G.",
    quote:
      "She is very consistent and she help us on backend specially on automations.",
  },
];

export default function ClientTestimonials() {
  const [revealed, setRevealed] = useState(false);
  const [pullDistance, setPullDistance] = useState(0);
  const [isPulling, setIsPulling] = useState(false);
  const startY = useRef<number | null>(null);
  const dragged = useRef(false);

  function handlePointerDown(event: React.PointerEvent<HTMLButtonElement>) {
    startY.current = event.clientY;
    setIsPulling(true);
    dragged.current = false;
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: React.PointerEvent<HTMLButtonElement>) {
    if (startY.current === null || revealed) return;
    const distance = Math.max(0, Math.min(64, event.clientY - startY.current));
    setPullDistance(distance);
    if (distance > 8) dragged.current = true;
  }

  function handlePointerUp() {
    if (startY.current !== null && pullDistance >= 28) {
      setRevealed(true);
      dragged.current = true;
    }
    startY.current = null;
    setPullDistance(0);
    setIsPulling(false);
  }

  function handleClick() {
    if (dragged.current) {
      dragged.current = false;
      return;
    }
    setRevealed((current) => !current);
  }

  return (
    <section className="ivy-section ivy-testimonials" id="testimonials">
      <div className="ivy-testimonial-decoration ivy-testimonial-decoration-one" aria-hidden="true">✳</div>
      <div className="ivy-testimonial-decoration ivy-testimonial-decoration-two" aria-hidden="true">“</div>
      <div className="ivy-section-heading ivy-testimonial-heading">
        <div>
          <div className="ivy-section-kicker">05 — KIND WORDS FROM CLIENTS</div>
          <h2>What my clients<br /><em>say about me.</em></h2>
        </div>
        <p>Good work is better when the people you work with feel the difference.</p>
      </div>

      <div className={`ivy-pull-control ${revealed ? "is-revealed" : ""} ${isPulling ? "is-pulling" : ""}`}>
        <button
          className="ivy-review-pull"
          type="button"
          aria-expanded={revealed}
          aria-controls="client-reviews"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onClick={handleClick}
          style={{ transform: `translateY(${pullDistance}px)` }}
        >
          <span className="ivy-review-pull-line" aria-hidden="true"><i /></span>
          <span className="ivy-review-pull-copy">
            <strong>{revealed ? "REVIEWS REVEALED" : "PULL HERE"}</strong>
            <small>{revealed ? "CLICK TO HIDE CLIENT REVIEWS" : "TO REVEAL CLIENT REVIEWS"}</small>
          </span>
          <span className="ivy-review-pull-arrow" aria-hidden="true">{revealed ? "↻" : "↓"}</span>
        </button>
        <span className="ivy-pull-instruction">{revealed ? "You can hide the reviews and reveal them again anytime." : "Drag the handle down or tap to reveal"}</span>
      </div>

      {revealed && (
        <div className="ivy-testimonial-grid is-visible" id="client-reviews" aria-live="polite">
          {reviews.map((review, index) => (
            <article className="ivy-testimonial-card" key={review.name} style={{ animationDelay: `${index * 160}ms` }}>
              <span className="ivy-testimonial-quote" aria-hidden="true">“</span>
              <div className="ivy-testimonial-stars" aria-label="5 out of 5 stars">{[0, 1, 2, 3, 4].map((star) => <span key={star} style={{ animationDelay: `${index * 160 + star * 90}ms` }}>★</span>)}</div>
              <blockquote>“{review.quote}”</blockquote>
              <div className="ivy-testimonial-author">
                <span>0{index + 1} / CLIENT REVIEW</span>
                <strong>{review.name}</strong>
              </div>
            </article>
          ))}
        </div>
      )}

      <div className="ivy-testimonial-footnote"><span>✳</span> REAL WORDS. REAL EXPERIENCES. THANK YOU FOR THE TRUST.</div>
    </section>
  );
}
