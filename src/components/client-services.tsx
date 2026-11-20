"use client";

import { useState } from "react";

type Service = {
  number: string;
  title: string;
  description: string;
  tags: string[];
};

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
                    <ul className="ivy-package-inclusions">
                      <li>1-month social media content calendar</li>
                      <li>20 custom graphics</li>
                      <li>SEO-friendly captions</li>
                      <li>$399 per month</li>
                    </ul>
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
            <div className="ivy-tags">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          </article>
        );
      })}
    </div>
  );
}
