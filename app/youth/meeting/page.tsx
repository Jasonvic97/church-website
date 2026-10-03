import type { Metadata } from "next";
import { Countdown } from "@/components/countdown";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Youth Meeting",
  description: "Details for the Homestead Assembly Youth Meeting.",
};

export default function YouthMeetingPage() {
  return (
    <main id="main-content" className="youth-info-page">
      <section className="youth-info-page__hero">
        <div className="page-wrap">
          <p className="youth-businesses-eyebrow">Homestead Assembly Youth</p>
          <h1>Youth Meeting</h1>
          <p className="youth-info-page__description">{siteConfig.haym.theme}</p>
          <div className="youth-meeting-date">
            <span>Homestead Assembly Youth Meeting</span>
            <strong>{siteConfig.haym.dateLabel}</strong>
            <Countdown />
          </div>
        </div>
      </section>
    </main>
  );
}
