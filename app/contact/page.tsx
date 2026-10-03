import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function ContactPage() {
  return (
    <main id="main-content" className="simple-page">
      <section className="simple-page__hero">
        <div className="page-wrap">
          <p className="eyebrow">Get connected</p>
          <h1>Come as you are.<br /><em>Let&apos;s connect.</em></h1>
          {/* <p>{siteConfig.contactNote}</p> */}
        </div>
      </section>
      <section className="simple-page__body section-pad">
        <div className="page-wrap simple-page__grid">
          <div>
            <p className="eyebrow">Visit</p>
            <h2>Plan a visit.</h2>
            <p className="body-copy">
              The church address, service times, and official social links are listed in the footer below.
            </p>
            <Link className="button button--primary" href="#contact">
              View church information <span aria-hidden="true">↓</span>
            </Link>
          </div>
          <div>
            <p className="eyebrow">Explore</p>
            <h2>Get connected with Youth.</h2>
            <p className="body-copy">
              Discover youth businesses, events, and ways to get involved with Homestead Assembly Youth.
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
