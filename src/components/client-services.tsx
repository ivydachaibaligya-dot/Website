"use client";

import { useState } from "react";

type Service = {
  number: string;
  title: string;
  description: string;
  tags: string[];
};

const tagIcons: Record<string, string> = {
  "Email & documents": "✉", "Data entry": "▦", "Scheduling": "◷",
  "Executive assistance": "✦", "Team coordination": "↗",
  "Roof measurements": "⌁", "Estimates & proposals": "▤",
  "Claim documentation": "✓", "Job photos": "▧", "Material orders": "◇",
  "Crew dispatching": "⇄", "CRM management": "◎", "Lead tracking": "⌖",
  "Company SOPs": "▤", "Process documentation": "≡",
  "Workflow automation": "⟳", "Reporting": "▥",
  "Website creation": "⌘", "Responsive design": "▣",
  "Website updates": "↻", "Site maintenance": "⚙", "Basic SEO": "⌕",
  "Graphic design": "✎", "Canva graphics": "▧",
  "Social media content": "◉", "SEO captions": "✧",
  "Promotional materials": "◇",
  "1-month social media content calendar": "▦",
  "20 custom graphics": "✎", "SEO-friendly captions": "✧",
  "$399 per month": "$"
};

function ServiceTags({ tags }: { tags: string[] }) {
  return (
    <div className="ivy-tags">
      {tags.map((tag) => (
        <span className="ivy-service-tag" key={tag}>
          <i aria-hidden="true">{tagIcons[tag] || "✦"}</i>
          <span>{tag}</span>
        </span>
      ))}
    </div>
  );
}

export default function ClientServices({ services }: { services: Service[] }) {
  const [packageOpen, setPackageOpen] = useState(false);

  return (
    <div className="ivy-service-grid">
      {services.map((service) => {
        const isPackage = service.number === "06";
        if (isPackage) {
          return (
            <article className="ivy-service-card ivy-package-card" key={service.number}>
              <div>
                <div className="ivy-service-top"><span>{service.number}</span><span className="ivy-service-arrow">↗</span></div>
                <h3>Monthly Social Media Package</h3>
                <span className="ivy-package-price">$399 / month</span>
              </div>
              <div>
                <button
                  className="ivy-package-trigger"
                  type="button"
                  aria-expanded={packageOpen}
                  aria-controls="ivy-package-details"
                  onClick={() => setPackageOpen((open) => !open)}
                >
                  <span>{packageOpen ? "Hide Package Details" : "View Package Details"}</span>
                  <span aria-hidden="true">{packageOpen ? "↑" : "↗"}</span>
                </button>
                <div id="ivy-package-details" className={`ivy-package-details${packageOpen ? " is-open" : ""}`} aria-hidden={!packageOpen}>
                  <div className="ivy-package-details-inner">
                    <ServiceTags tags={["1-month social media content calendar", "20 custom graphics", "SEO-friendly captions", "$399 per month"]} />
                    <button className="ivy-package-close" type="button" onClick={() => setPackageOpen(false)}>Close package details ×</button>
                  </div>
                </div>
              </div>
            </article>
          );
        }

        return (
          <article className="ivy-service-card" key={service.number}>
            <div className="ivy-service-top"><span>{service.number}</span><span className="ivy-service-arrow">↗</span></div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ServiceTags tags={service.tags} />
          </article>
        );
      })}
    </div>
  );
}
