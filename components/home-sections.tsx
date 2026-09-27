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
      <p>Rooted in faith.<br /><span>Growing together.</span></p>
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
          <Button href="/youth#haym" variant="light">Discover HAYM</Button>
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
          <SectionHeading eyebrow="Who we are" title="A church family, making room for one another." />
          <p className="body-copy">
            Homestead Assembly is preparing this space to share our story, our faith, and the people who make this
            church feel like home.
          </p>
          <p className="placeholder-note"><span aria-hidden="true">✦</span> This introduction is sample copy and will be updated by the church.</p>
          <Button href="/#mission" variant="outline">Our mission</Button>
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
          <Link className="text-link text-link--light" href="/youth/businesses">Meet youth businesses <span aria-hidden="true">↗</span></Link>
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
          <Link className="text-link" href="/#livestream">Livestream details <span aria-hidden="true">↗</span></Link>
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
          <Link className="text-link" href="/#contact">Ask about visiting <span aria-hidden="true">↗</span></Link>
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
