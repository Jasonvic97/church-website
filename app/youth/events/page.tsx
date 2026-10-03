import type { Metadata } from "next";
import { EventCard } from "@/components/cards/event-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { events } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Youth Events",
  description: "Youth event information from Homestead Assembly.",
};

export default function YouthEventsPage() {
  return (
    <main id="main-content" className="youth-events-page">
      <section className="events-section section-pad" aria-label="Youth events">
        <div className="page-wrap">
          <div className="events-section__heading">
            <SectionHeading eyebrow="Together is the point" title="Youth Events" description="Youth gatherings and event details will appear here as they are confirmed." />
          </div>
          <div className="events-grid">
            {events.slice(1).map((event, index) => (
              <Reveal key={event.title}>
                <EventCard {...event} index={"0" + (index + 1)} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
