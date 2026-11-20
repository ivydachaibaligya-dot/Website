import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ReceptionistChat from "@/components/receptionist-chat";

export const metadata: Metadata = {
  title: "Philippines-Based Virtual Assistant | Roofing & Business Support | Ivy Embone",
  alternates: { canonical: "https://iaurevant.com/" },
  description:
    "Ivy Embone is a Philippines-based virtual assistant supporting U.S. roofing teams and businesses with administrative coordination, Roofr measurements, CRM support, website management, and lead generation.",
  openGraph: {
    type: "website",
    url: "https://iaurevant.com/",
    title: "Philippines-Based Virtual Assistant | Roofing & Business Support | Ivy Embone",
    description:
      "Administrative support, U.S. roofing operations coordination, CRM assistance, website management, and lead generation from Ivy Embone in the Philippines.",
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
    title: "CRM, Business Operations & SOP Development",
    description:
      "Keeping customer records, pipelines, tasks, and automated workflows organized, while creating clear company SOPs, process guides, and internal documentation that help teams work consistently.",
    tags: ["CRM management", "Lead tracking", "Company SOPs", "Process documentation", "Workflow automation", "Reporting"],
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
    title: "Graphic Design & Social Media Content",
    description:
      "Creating branded graphics, promotional materials, social media content, and clear captions that help businesses communicate consistently online.",
    tags: ["Graphic design", "Canva graphics", "Social media content", "SEO captions", "Promotional materials", "Content planning"],
  },
  {
    number: "06",
    title: "Monthly Social Media Content Package",
    description:
      "A one-month social media content package that includes a monthly content calendar, 20 custom graphics, and SEO-friendly captions to help keep your business visible and consistent online. Package price: $399 per month.",
    tags: ["1-month calendar", "20 custom graphics", "SEO-friendly captions", "$399 / month"],
  },
];

const experience = [
  {
    role: "Executive Assistant / Secretary",
    company: "XRP Roofing",
    detail:
      "Supported business leadership and day-to-day roofing operations through website creation and management, SEO and online presence updates, preparing and sending proposals and invoices, following up on sent proposals and outstanding invoices, coordinating project scheduling, answering incoming calls, managing email communications, supporting insurance-related coordination and documentation, ensuring job photos are completed and properly organized, creating graphic design and marketing materials, assisting with accounting and bookkeeping, handling business banking and financial administration, developing SOPs, improving workflows through automation, maintaining client communication, and coordinating internal processes.",
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
    role: "Lead Generation Project",
    company: "Lead Generation Startup",
    detail:
      "Completed a two-month project involving prospect research, outreach, cold emailing, and email client support.",
    type: "Lead generation",
  },
];

const tools = [
  { name: "Google Workspace", icon: "googleworkspace" },
  { name: "GoHighLevel", icon: "highlevel" },
  { name: "Zuper", icon: null },
  { name: "Roofr", icon: null },
  { name: "Trello", icon: "trello" },
  { name: "Zapier", icon: "zapier" },
  { name: "QuickBooks", icon: "quickbooks" },
  { name: "Canva", icon: "canva" },
  { name: "Apollo", icon: "apollo" },
  { name: "CompanyCam", icon: null },
  { name: "CapCut", icon: "capcut" },
  { name: "Wix", icon: "wix" },
  { name: "Vercel", icon: "vercel" },
  { name: "GitHub", icon: "github" },
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
  {
    label: "Roofr · Measurements",
    title: "Roofr DIY measurements support",
    text: "Assisted with DIY roof measurements using Roofr, reviewing roof dimensions and square footage to support roofing estimates and project preparation.",
    image: "/images/ChatGPT%20Image%20Nov%2019,%202026,%2008_29_09%20AM.png",
    visual: "project-visual project-visual-image",
    mark: "ROOFR",
  },
];

export default function Home() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ivy Embone",
    url: "https://iaurevant.com/",
    jobTitle: "Virtual Assistant and Web Developer",
    description: "Philippines-based Virtual Assistant and Web Developer supporting administration, U.S. roofing and construction operations, CRM coordination, website management, and lead generation.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "PH"
    },
    knowsAbout: [
      "Virtual assistance",
      "Administrative support",
      "Roofing operations support",
      "Construction administration",
      "Roof measurements support",
      "CRM coordination",
      "Website development",
      "Lead generation"
    ]
  };

  return (
    <main className="ivy-site">      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
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
          <h1>Virtual Assistant<br /><em>Roofing Operations</em><br />&amp; Business Support.</h1>
          <p className="ivy-hero-intro">
            Hi, I&apos;m <strong>Ivy</strong>, a Philippines-based Virtual Assistant and Web Developer supporting U.S. roofing teams and growing businesses. I help with administrative tasks, roofing operations coordination, CRM updates, website support, and lead generation.
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
            <div className="ivy-art-photo-wrap">
              <Image
                src="/images/ivy-working.png"
                alt="Ivy smiling naturally while working at her laptop"
                width={900}
                height={1200}
                priority
                sizes="(max-width: 700px) 72vw, 355px"
                className="ivy-art-photo"
              />
            </div>
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
          </div>
          <div className="ivy-about-copy">
            <p className="ivy-lead">I help make the busy parts of business feel a little more manageable.</p>
            <p>
              My experience spans lead generation, insurance support, and U.S. roofing and
              home-service operations, alongside administrative and business support.
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
              <div className={project.visual}>{project.image ? <Image src={project.image} alt="Roofr DIY roof measurement report showing roof dimensions and square footage" width={952} height={938} /> : <><span>{project.mark.split("\n").map((line) => <i key={line}>{line}</i>)}</span><b>✳</b></>}</div>
              <div className="ivy-project-info"><span>{project.label}</span><h3>{project.title}</h3><p>{project.text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="ivy-tools">
        <div className="ivy-section ivy-tools-inner">
          <div><div className="ivy-section-kicker">05 — TOOLS I WORK WITH</div><h2>Comfortable with<br /><em>the tools behind the work.</em></h2></div>
          <div className="ivy-tool-cloud">{tools.map((tool, index) => <span key={tool.name} className={index % 4 === 0 ? "ivy-tool-featured" : ""}>{tool.icon ? <img src={`https://cdn.simpleicons.org/${tool.icon}`} alt="" aria-hidden="true" loading="lazy" /> : <span className="ivy-tool-monogram" aria-hidden="true">{tool.name.slice(0, 1)}</span>}<span className="ivy-tool-name">{tool.name}</span></span>)}</div>
        </div>
      </section>


      <section className="ivy-section ivy-services" id="faq">
        <div className="ivy-section-heading">
          <div><div className="ivy-section-kicker">06 — COMMON QUESTIONS</div><h2>Good to know<br /><em>before we connect.</em></h2></div>
          <p>A few details about my virtual assistance, roofing operations, and remote support experience.</p>
        </div>
        <div className="ivy-service-grid">
          <article className="ivy-service-card">
            <div className="ivy-service-top"><span>01</span><span className="ivy-service-arrow">↗</span></div>
            <h3>What services do you provide?</h3>
            <p>I provide administrative and executive support, roofing and construction operations assistance, CRM and business operations support, website development and management, and lead generation and content support.</p>
          </article>
          <article className="ivy-service-card">
            <div className="ivy-service-top"><span>02</span><span className="ivy-service-arrow">↗</span></div>
            <h3>Can you support U.S. roofing businesses?</h3>
            <p>My experience includes supporting U.S. roofing and home-service operations with Roofr measurements, estimates and proposals, job photos and project documents, insurance-claim documentation support, material-order coordination, crew dispatching, and schedule updates.</p>
          </article>
          <article className="ivy-service-card">
            <div className="ivy-service-top"><span>03</span><span className="ivy-service-arrow">↗</span></div>
            <h3>Where are you based?</h3>
            <p>I am based in the Philippines and provide remote administrative, website, CRM, and operations support to businesses.</p>
          </article>
          <article className="ivy-service-card">
            <div className="ivy-service-top"><span>04</span><span className="ivy-service-arrow">↗</span></div>
            <h3>What tools do you work with?</h3>
            <p>My tools include Google Workspace, GoHighLevel, Roofr, Zuper, CompanyCam, Trello, Zapier, QuickBooks, Canva, Apollo, Wix, Vercel, and GitHub.</p>
          </article>
          <article className="ivy-service-card">
            <div className="ivy-service-top"><span>05</span><span className="ivy-service-arrow">↗</span></div>
            <h3>How can we discuss a project?</h3>
            <p>Email me with a little information about your business, the tasks you need help with, and your preferred next step. I can review your inquiry and respond with more information.</p>
          </article>
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
      <ReceptionistChat />
    </main>
  );
}
