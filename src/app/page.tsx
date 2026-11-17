import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Ivy Embone | Virtual Assistant & Web Developer",
  description:
    "Meet Ivy Embone, a Virtual Assistant and Web Developer supporting businesses with administration, construction operations, website creation and management, CRM coordination, and lead generation.",
  openGraph: {
    title: "Ivy Embone | Virtual Assistant & Web Developer",
    description:
      "Practical business support combining virtual assistance, website development, and construction operations coordination.",
  },
};

const services = [
  {
    number: "01",
    title: "Administrative & Executive Support",
    description:
      "Email and document coordination, data entry, calendar support, follow-ups, and the day-to-day details that keep work moving.",
    tags: ["Email & documents", "Data entry", "Scheduling", "Executive assistance", "Team coordination"],
  },
  {
    number: "02",
    title: "Construction & Roofing Support",
    description:
      "Hands-on administrative support for roofing teams, from roof measurements and estimates to proposal preparation, insurance-claim documentation support, job photo organization, material ordering, crew dispatching, and job coordination.",
    tags: ["Roof measurements", "Estimates & proposals", "Claim documentation", "Job photos", "Material orders", "Crew dispatching"],
  },
  {
    number: "03",
    title: "CRM & Business Operations",
    description:
      "Keeping customer records, pipelines, tasks, SOPs, websites, and automated workflows organized across the tools a team already uses.",
    tags: ["CRM management", "Lead tracking", "SOP development", "Workflow automation", "Website updates", "Reporting"],
  },
  {
    number: "04",
    title: "Website Development & Management",
    description:
      "Creating, updating, and maintaining business websites with a focus on clear presentation, responsive layouts, and a helpful online presence.",
    tags: ["Website creation", "Responsive design", "Website updates", "Site maintenance", "Basic SEO"],
  },
  {
    number: "05",
    title: "Lead Generation, Copywriting & Content Support",
    description:
      "Prospect research, personalized outreach, client communication, copywriting, social media coordination, and practical content materials for growing businesses.",
    tags: ["Lead research", "Email outreach", "Customer support", "Copywriting", "Social media", "Canva graphics"],
  },
];

const experience = [
  {
    role: "Executive Assistant / Secretary",
    company: "XRP Roofing",
    detail:
      "Supported business leadership and daily roofing operations through website creation and management, SEO and online presence updates, proposal preparation and delivery, insurance-related coordination and documentation, graphic design and marketing materials, accounting and bookkeeping support, business banking and financial administration, SOP development, workflow automation, client communication, and internal process coordination.",
    type: "Executive & roofing business support",
  },
  {
    role: "Office Administrator",
    company: "TexasMade Roofing & Renovations",
    detail:
      "Support day-to-day roofing and home-service operations, including client communication, office administration, roof measurements using Roofr, preparing estimates and proposals, organizing job photos and project documents, assisting with insurance-claim documentation, coordinating material orders through ABC Supply, managing calendars and email, supporting automation and social media, dispatching crews, and coordinating schedules and job updates.",
    type: "Roofing & construction operations",
    period: "2026",
  },
  {
    role: "Operations Support",
    company: "Miayni",
    detail:
      "Support daily team operations by coordinating tasks, tracking expenses, assisting with payroll coordination and credit card payments, preparing operational reports, serving as a point of contact for stakeholders, and helping leadership maintain productive and organized workflows.",
    type: "Business operations",
    period: "2025–2026",
  },
  {
    role: "Administrative & Client Support",
    company: "TopSchools Admission",
    detail:
      "Provided executive-level administrative and client communication support for education services. Managed student records, organized databases in Notion, maintained course systems in Kajabi, supported workflow automations, and coordinated between clients and internal teams to help ensure timely deliverables.",
    type: "Education & client services",
    period: "2025–2026",
  },
  {
    role: "Strategic Partnership Specialist",
    company: "Agencia Gutiérrez & Socios",
    detail:
      "Built and maintained lead lists using Apollo and ContactOut, carried out personalized cold email campaigns and follow-up sequences, reviewed engagement metrics, refined outreach based on performance data and KPIs, and maintained Google Workspace tracking systems for reporting and pipeline visibility.",
    type: "Lead generation & partnerships",
    period: "2024–2025",
  },
  {
    role: "Appointment Setting & CRM Support",
    company: "Insurance / Final Expense",
    detail:
      "Used GoHighLevel to support lead follow-up, contact management, customer communication, and appointment coordination for an insurance team.",
    type: "Customer communication",
  },
  {
    role: "Virtual Assistant — Mortgage Administration",
    company: "Mortgage Administration Client",
    detail:
      "Supported mortgage administration through data entry, administrative tasks, CRM updates, and Pipedrive management on a contract basis.",
    type: "Administrative operations",
  },
  {
    role: "Virtual Assistant — Administrative Support",
    company: "Real Estate Client",
    detail:
      "Provided remote administrative support, including data entry, CRM management, and email management.",
    type: "Real estate support",
  },
  {
    role: "Lead Generation Project",
    company: "Lead Generation Startup",
    detail:
      "Completed a two-month project involving prospect research, outreach, cold emailing, and email client support.",
    type: "Lead generation",
  },
];

const tools = [
  "Google Workspace",
  "Microsoft 365",
  "GoHighLevel",
  "Zuper",
  "Roofr",
  "Trello",
  "Zapier",
  "QuickBooks",
  "Canva",
  "Apollo",
  "CompanyCam",
  "Pipedrive",
];

const projects = [
  {
    label: "Operations",
    title: "Roofing & home-service coordination",
    text: "Job tracking, customer communication, inspection scheduling, CRM updates, and administrative follow-through.",
    visual: "project-visual project-visual-roof",
    mark: "FIELD\nTO OFFICE",
  },
  {
    label: "CRM & data",
    title: "Organized records and lead pipelines",
    text: "Maintaining customer information, updating lead records, and keeping tasks and follow-ups visible.",
    visual: "project-visual project-visual-crm",
    mark: "CRM\nWORKFLOW",
  },
  {
    label: "Marketing",
    title: "Practical marketing support",
    text: "Social media content coordination, Canva graphics, and outreach materials that help businesses communicate clearly.",
    visual: "project-visual project-visual-marketing",
    mark: "CONTENT\nSTUDIO",
  },
];

export default function Home() {
  return (
    <main className="ivy-site">
      <div className="ivy-holiday-lights" aria-hidden="true"><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /></div>
      <nav className="ivy-nav">
        <Link href="#home" className="ivy-brand" aria-label="Ivy Embone home">
          <span className="ivy-brand-mark">IE</span>
          <span>IVY EMBONE<small>VIRTUAL ASSISTANT · WEB DEVELOPER</small></span>
        </Link>
        <div className="ivy-nav-links">
          <Link href="#about">About</Link>
          <Link href="#services">What I do</Link>
          <Link href="#experience">Experience</Link>
          <Link href="#work">Work samples</Link>
        </div>
        <Link className="ivy-nav-cta" href="#contact">Let&apos;s connect <span>↗</span></Link>
      </nav>

      <section className="ivy-hero" id="home">
        <div className="ivy-hero-orbit ivy-orbit-one" />
        <div className="ivy-hero-orbit ivy-orbit-two" />
        <div className="ivy-hero-copy">
          <div className="ivy-eyebrow"><span className="ivy-live-dot" /> AVAILABLE FOR THE RIGHT OPPORTUNITY</div>
          <h1>Good work happens<br />when <em>everything</em><br />is in its place.</h1>
          <p className="ivy-hero-intro">
            Hi, I&apos;m <strong>Ivy</strong> — a Virtual Assistant and Web Developer helping businesses stay organized and build a stronger online presence through administrative support, construction operations, website development, CRM coordination, and lead generation.
          </p>
          <div className="ivy-hero-actions">
            <Link href="#contact" className="ivy-button ivy-button-dark">Let&apos;s work together <span>↗</span></Link>
            <Link href="#experience" className="ivy-text-link">Explore my experience <span>↓</span></Link>
          </div>
          <div className="ivy-hero-note"><span>✳</span> Thoughtful support. Organized operations. Reliable follow-through.</div>
        </div>
        <div className="ivy-hero-art" aria-label="Abstract portfolio illustration">
          <div className="ivy-art-backdrop" />
          <div className="ivy-art-card ivy-art-card-main">
            <div className="ivy-art-top"><span>WORKSPACE / 001</span><span>✳</span></div>
            <div className="ivy-art-monogram">I<span>.</span></div>
            <div className="ivy-art-name">Ivy Embone</div>
            <div className="ivy-art-role">VIRTUAL ASSISTANCE · WEB DEVELOPMENT</div>
            <div className="ivy-art-line" />
            <div className="ivy-art-bottom"><span>DETAIL-ORIENTED</span><span>PEOPLE-FOCUSED</span></div>
          </div>
          <div className="ivy-float ivy-float-top"><span>↗</span> Organized workflows</div>
          <div className="ivy-float ivy-float-bottom"><span>✳</span> Your reliable support partner</div>
          <div className="ivy-art-stamp">LET&apos;S<br />MAKE<br />THINGS<br /><i>WORK.</i></div>
        </div>
        <div className="ivy-hero-index"><span>01 / 05</span><span>SCROLL TO EXPLORE ↓</span></div>
      </section>

      <div className="ivy-marquee" aria-label="Areas of support">
        <div>VIRTUAL ASSISTANCE <b>✳</b> WEBSITE DEVELOPMENT <b>✳</b> CONSTRUCTION OPERATIONS <b>✳</b> CRM COORDINATION <b>✳</b> LEAD GENERATION <b>✳</b> </div>
      </div>

      <section className="ivy-section ivy-about" id="about">
        <div className="ivy-section-kicker">01 — A LITTLE ABOUT ME</div>
        <div className="ivy-about-grid">
          <div>
            <h2>Behind every<br />well-run business<br />is <em>good support.</em></h2>
            <figure className="ivy-about-portrait">
              <Image
                src="/images/ivy-working.png"
                alt="Ivy smiling naturally while working at her laptop"
                width={900}
                height={1200}
                priority={false}
                sizes="(max-width: 700px) 100vw, 42vw"
              />
              <figcaption>IVY EMBONE · VIRTUAL ASSISTANT & WEB DEVELOPER</figcaption>
            </figure>
          </div>
          <div className="ivy-about-copy">
            <p className="ivy-lead">I help make the busy parts of business feel a little more manageable.</p>
            <p>
              My experience has grown across different industries and teams — from real estate and
              mortgage administration to lead generation, insurance support, and U.S. roofing and
              home-service operations.
            </p>
            <p>
              I enjoy bringing structure to everyday tasks, keeping information organized, following
              through on details, and helping teams stay focused on the work that matters.
            </p>
            <div className="ivy-facts">
              <div><strong>REMOTE</strong><span>Based in the Philippines</span></div>
              <div><strong>MULTI-INDUSTRY</strong><span>Admin, service & operations</span></div>
              <div><strong>HANDS-ON</strong><span>Tools, systems & coordination</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="ivy-section ivy-services" id="services">
        <div className="ivy-section-heading">
          <div><div className="ivy-section-kicker">02 — HOW I CAN HELP</div><h2>Support that keeps<br /><em>business moving.</em></h2></div>
          <p>Practical help for the everyday details, the moving parts, and the follow-ups that keep work on track.</p>
        </div>
        <div className="ivy-service-grid">
          {services.map((service) => (
            <article className="ivy-service-card" key={service.number}>
              <div className="ivy-service-top"><span>{service.number}</span><span className="ivy-service-arrow">↗</span></div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="ivy-tags">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="ivy-experience" id="experience">
        <div className="ivy-section ivy-experience-inner">
          <div className="ivy-section-kicker">03 — EXPERIENCE & JOURNEY</div>
          <div className="ivy-experience-heading"><h2>Different teams.<br /><em>One steady approach.</em></h2><p>My background spans several industries, with a common thread: helping people stay organized and work move forward.</p></div>
          <div className="ivy-timeline">
            {experience.map((item, index) => (
              <article className="ivy-timeline-item" key={item.company + item.role}>
                <div className="ivy-timeline-index">0{index + 1}</div>
                <div className="ivy-timeline-main"><span>{item.type}</span><h3>{item.role}</h3><strong>{item.company}</strong><p>{item.detail}</p></div>
                <div className="ivy-timeline-symbol">↗</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ivy-section ivy-work" id="work">
        <div className="ivy-section-heading">
          <div><div className="ivy-section-kicker">04 — WHAT I WORK ON</div><h2>A closer look at<br /><em>the details.</em></h2></div>
          <p>A snapshot of the kinds of work I support. Client information is kept private, so these are service examples rather than confidential project files.</p>
        </div>
        <div className="ivy-project-grid">
          {projects.map((project) => (
            <article className="ivy-project-card" key={project.title}>
              <div className={project.visual}><span>{project.mark.split("\n").map((line) => <i key={line}>{line}</i>)}</span><b>✳</b></div>
              <div className="ivy-project-info"><span>{project.label}</span><h3>{project.title}</h3><p>{project.text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="ivy-tools">
        <div className="ivy-section ivy-tools-inner">
          <div><div className="ivy-section-kicker">05 — TOOLS I WORK WITH</div><h2>Comfortable with<br /><em>the tools behind the work.</em></h2></div>
          <div className="ivy-tool-cloud">{tools.map((tool, index) => <span key={tool} className={index % 4 === 0 ? "ivy-tool-featured" : ""}>{tool}</span>)}</div>
        </div>
      </section>

      <section className="ivy-contact" id="contact">
        <div className="ivy-contact-orb" />
        <div className="ivy-section-kicker">A GOOD PLACE TO START</div>
        <h2>Have a lot on<br />your <em>to-do list?</em></h2>
        <p>Let&apos;s talk about how I can support your team and help keep things organized.</p>
        <a className="ivy-button ivy-button-light" href="mailto:hello@iaurevant.com">Get in touch <span>↗</span></a>
        <div className="ivy-contact-footer"><span>IVY EMBONE · VIRTUAL ASSISTANT & WEB DEVELOPER</span><a href="mailto:hello@iaurevant.com">HELLO@IAUREVANT.COM</a><span>PHILIPPINES · WORKING REMOTELY</span></div>
      </section>
      <footer className="ivy-footer"><span>© {new Date().getFullYear()} Ivy Embone</span><span>Made with care, and attention to detail. ✳</span><Link href="#home">BACK TO TOP ↑</Link></footer>
    </main>
  );
}
