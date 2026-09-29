import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function ContactPage() {
  return (
    <main id="main-content" className="simple-page">
      <section className="simple-page__hero">
        <div className="page-wrap">
          <p className="eyebrow">Get connected</p>
          <h1>Come as you are.<br /><em>Let&apos;s connect.</em></h1>
          <p>{siteConfig.contactNote}</p>
        </div>
      </section>
      <section className="simple-page__body section-pad">
        <div className="page-wrap simple-page__grid">
          <div>
            <p className="eyebrow">Visit</p>
            <h2>Plan a visit.</h2>
            <p className="body-copy">{siteConfig.location}</p>
          </div>
          <div>
            <p className="eyebrow">Stay connected</p>
            <h2>We&apos;ll share more here soon.</h2>
            <p className="body-copy">
              Service times, contact information, prayer requests, and other ways to connect will be added here as they become available.
            </p>
            <Link className="button button--primary" href="/youth">
              Explore youth <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
