import Link from "next/link";
import { Countdown } from "@/components/countdown";
import { EventCard } from "@/components/cards/event-card";
import { MessageCard } from "@/components/cards/message-card";
import { MissionCard } from "@/components/cards/mission-card";
import { TestimonyCard } from "@/components/cards/testimony-card";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { events, latestMessage, missionCards, siteConfig, testimonies } from "@/lib/site-config";

export function WelcomeNote() {
  return (
    <div className="welcome-note">
      <p>Walk by Faith.<br /><span>not by sight.</span></p>
      <span className="welcome-note__place">A church family<span aria-hidden="true"> · </span>{siteConfig.location}</span>
    </div>
  );
}

export function HaymSection() {
  return (
    <section className="haym-band" aria-labelledby="haym-countdown-title">
      <div className="haym-band__texture" aria-hidden="true" />
      <div className="haym-band__inner page-wrap">
        <div className="haym-band__copy">
          <p className="eyebrow eyebrow--gold"><span className="eyebrow__line" /> Homestead Assembly Youth Meeting</p>
          <h2 id="haym-countdown-title">Something good<br /><em>is gathering.</em></h2>
          <p className="haym-band__date">{siteConfig.haym.dateLabel}</p>
          <p className="haym-band__description">{siteConfig.haym.theme}</p>
          <Button href="/haym" variant="light">Discover HAYM</Button>
        </div>
        <div className="haym-band__count">
          <p className="countdown-overline">The countdown is on</p>
          <Countdown />
        </div>
      </div>
      <span className="haym-band__side-label" aria-hidden="true">H · A · Y · M</span>
    </section>
  );
}

export function WhoWeAreSection() {
  return (
    <section className="who-section section-pad" id="who-we-are">
      <div className="who-section__wordmark" aria-hidden="true">Who We Are</div>
      <div className="who-section__grid page-wrap">
        <Reveal className="who-section__image-wrap">
          <ImagePlaceholder
            label="Placeholder for a photo of the Homestead Assembly community"
            variant="community"
            className="who-section__image"
            stamp="Our community"
          />
          <span className="image-note">A community shaped by faith, hospitality, and hope.</span>
        </Reveal>
        <Reveal className="who-section__copy" delay={110}>
          <SectionHeading title="The church of the living God." />
          <p className="body-copy">
            Today, 2,000 years later, the Body of Christ, the church of the living God is being restored to its original glory and power!
          </p>
          <Button href="/who-we-are" variant="outline">Read our story</Button>
        </Reveal>
      </div>
    </section>
  );
}

export function MissionSection() {
  return (
    <section className="mission-section section-pad" id="mission">
      <div className="page-wrap">
        <div className="mission-section__top">
          <SectionHeading
            eyebrow="What guides us"
            title="A faith lived with open hands."
            description="The values we hope to practice in our church and carry into our community."
          />
          <p className="mission-section__note">Our mission statement is being shaped with the church community.</p>
        </div>
        <div className="mission-grid">
          {missionCards.map((card, index) => (
            <Reveal key={card.number} delay={index * 90}>
              <MissionCard {...card} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimoniesSection() {
  return (
    <section className="testimonies-section section-pad" id="testimonies">
      <div className="page-wrap">
        <div className="testimonies-section__heading">
          <SectionHeading
            eyebrow="Stories from our community"
            title="Faith, told in real life."
            description="A space for people to share the moments, changes, and encouragement that matter to them."
          />
          <span className="section-count">01 — 02</span>
        </div>
        <div className="testimony-grid">
          {testimonies.map((story, index) => (
            <Reveal key={story.title} delay={index * 130}>
              <TestimonyCard {...story} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function YouthFeatureSection() {
  return (
    <section className="youth-feature" aria-labelledby="youth-feature-title">
      <ImagePlaceholder
        label="Abstract youth gathering artwork; youth photography will be added here"
        variant="youth"
        className="youth-feature__art"
        stamp="A generation with room to grow"
      />
      <div className="youth-feature__overlay" />
      <div className="youth-feature__content page-wrap">
        <Reveal>
          <p className="eyebrow eyebrow--gold"><span className="eyebrow__line" /> The next generation</p>
          <h2 id="youth-feature-title">Young hearts.<br /><em>Big purpose.</em></h2>
          <p>Faith, friendship, creativity, and a place to become who you are called to be.</p>
          <div className="youth-feature__actions">
            <Button href="/youth" variant="light">Explore youth</Button>
          <Link className="text-link text-link--light" href="/youth/businesses">Meet youth businesses</Link>
          </div>
        </Reveal>
        <div className="youth-feature__side" aria-hidden="true">HOMESTEAD ASSEMBLY · YOUTH</div>
      </div>
    </section>
  );
}

export function MessagesSection() {
  return (
    <section className="messages-section section-pad" id="messages">
      <div className="page-wrap">
        <div className="messages-section__heading">
          <SectionHeading eyebrow="Take a moment" title="A word for the way." description="Listen, reflect, and carry a little encouragement with you." />
          <Link className="text-link" href="/livestream">Livestream details</Link>
        </div>
        <MessageCard {...latestMessage} />
      </div>
    </section>
  );
}

export function EventsSection() {
  return (
    <section className="events-section section-pad" id="events">
      <div className="page-wrap">
        <div className="events-section__heading">
          <SectionHeading eyebrow="Make a little room" title="Gather with us." description="Church and youth event information will be shared here as dates are confirmed." />
          <Link className="text-link" href="/contact">Ask about visiting</Link>
        </div>
        <div className="events-grid">
          {events.map((event, index) => (
            <Reveal key={event.title} delay={index * 110}>
              <EventCard {...event} index={"0" + (index + 1)} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LivestreamSection() {
  return (
    <section className="livestream-section" id="livestream">
      <div className="livestream-section__inner page-wrap">
        <div>
          <p className="eyebrow eyebrow--gold"><span className="eyebrow__line" /> Join us from wherever you are</p>
          <h2>Worship with us,<br /><em>wherever life finds you.</em></h2>
          <p>Livestream schedule and viewing details will be posted here once available.</p>
        </div>
        <div className="livestream-card">
          <span className="livestream-card__signal"><i /><i /><i /></span>
          <p className="livestream-card__status">Live information</p>
          <p className="livestream-card__title">Coming soon</p>
          <span className="livestream-card__rule" />
          <span className="livestream-card__meta">{siteConfig.shortName}</span>
        </div>
      </div>
    </section>
  );
}

const homeSchedule = [
  { day: "Saturday", gathering: "Service" },
  { day: "Sunday", gathering: "Service" },
  { day: "Thursday", gathering: "Prayer Meeting" },
] as const;

export function ScheduleSection() {
  return (
    <section className="home-schedule" aria-labelledby="home-schedule-title">
      <div className="page-wrap">
        <h2 className="home-schedule__title" id="home-schedule-title">Schedule</h2>
        <div className="home-schedule__grid">
          {homeSchedule.map((item) => {
            const service = siteConfig.serviceTimes.find((entry) => entry.day === item.day);
            if (!service) return null;

            return (
              <div className="home-schedule__item" key={item.day}>
                <p className="home-schedule__day">{item.day}</p>
                <p className="home-schedule__gathering">{item.gathering}</p>
                <time className="home-schedule__time">{service.time}</time>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function HomeMissionPreview() {
  return (
    <section className="home-mission section-pad" aria-labelledby="home-mission-title">
      <div className="page-wrap home-mission__inner">
        <p className="eyebrow eyebrow--gold"><span className="eyebrow__line" /> Our mission</p>
        <div className="home-mission__copy">
          <h2 id="home-mission-title">A beacon of hope.</h2>
          <p>
            We want to do unto others as Christ has done to us: Give love, comfort, and hope. With the guidance of Almighty God, this we will do.
          </p>
          <Button href="/who-we-are" variant="outline">Read our story</Button>
        </div>
      </div>
    </section>
  );
}

export function HomeVisitSection() {
  return (
    <section className="home-visit section-pad" aria-labelledby="home-visit-title">
      <div className="page-wrap home-visit__inner">
        <div className="home-visit__copy">
          <p className="eyebrow">Visit Homestead Assembly</p>
          <h2 id="home-visit-title">We welcome you.</h2>
          <address>
            <span>{siteConfig.address.street}</span>
            <span>{siteConfig.address.locality}</span>
          </address>
        </div>
        <Button href="/contact" variant="outline" className="home-visit__button">
          Visit information
        </Button>
      </div>
    </section>
  );
}
