import Link from "next/link";
import { Countdown } from "@/components/countdown";
import { EventCard } from "@/components/cards/event-card";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { events, siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Youth",
  description: "Faith, friendship, creativity, and a place to grow at Homestead Assembly.",
};

export default function YouthPage() {
  return (
    <main id="main-content" className="youth-page">
      <section className="youth-hero">
        <ImagePlaceholder
          label="Abstract youth gathering artwork; youth photography will be added here"
          variant="youth"
          className="youth-hero__art"
          stamp="Youth · Homestead Assembly"
        />
        <div className="youth-hero__overlay" />
        <div className="youth-hero__content page-wrap">
          <p className="eyebrow eyebrow--gold"><span className="eyebrow__line" /> Faith with room to become</p>
          <h1>Find your people.<br /><em>Find your purpose.</em></h1>
          <p>A welcoming place for young people to grow in faith, build real friendships, and bring their ideas to life.</p>
          <div className="youth-hero__actions">
            <Button href="#haym" variant="light">Explore HAYM</Button>
            <Button href="/youth/businesses" variant="outline">Youth businesses</Button>
          </div>
          <span className="youth-hero__vertical" aria-hidden="true">HOMESTEAD ASSEMBLY · YOUTH</span>
        </div>
      </section>

      <section className="youth-intro section-pad">
        <div className="page-wrap youth-intro__grid">
          <Reveal>
            <p className="eyebrow">A place for what comes next</p>
            <h2>Bring your questions,<br /><em>your gifts, your whole self.</em></h2>
          </Reveal>
          <Reveal delay={110}>
            <p className="body-copy">Our youth community is being built around belonging, faith, and possibility. There is room to learn, serve, create, and find your own way forward.</p>
            <p className="placeholder-note"><span aria-hidden="true">✦</span> Youth program details and schedules will be added by the church.</p>
          </Reveal>
        </div>
      </section>

      <section className="youth-haym section-pad" id="haym">
        <div className="youth-haym__grid page-wrap">
          <Reveal className="youth-haym__art-wrap">
            <ImagePlaceholder
              label="Abstract HAYM event artwork; event photography will be added here"
              variant="sanctuary"
              className="youth-haym__art"
              stamp="Homestead Assembly Youth Meeting"
            />
            <span className="youth-haym__date-stamp">04—07<br /><i>August 2027</i></span>
          </Reveal>
          <Reveal className="youth-haym__content" delay={100}>
            <p className="eyebrow"><span className="eyebrow__line" /> The annual gathering</p>
            <p className="youth-haym__acronym">H · A · Y · M</p>
            <h2>Homestead Assembly<br /><em>Youth Meeting.</em></h2>
            <p>{siteConfig.haym.theme} More details about the gathering will be shared as they are confirmed.</p>
            <p className="youth-haym__date">{siteConfig.haym.dateLabel}</p>
            <Countdown />
          </Reveal>
        </div>
      </section>

      <section className="youth-business-feature section-pad" id="youth-businesses">
        <div className="page-wrap youth-business-feature__inner">
          <Reveal>
            <p className="eyebrow eyebrow--gold"><span className="eyebrow__line" /> Young ideas, in motion</p>
            <h2>Support what<br /><em>they’re building.</em></h2>
            <p>A directory celebrating businesses started and operated by young people in our church.</p>
            <Button href="/youth/businesses" variant="light">Explore youth businesses</Button>
          </Reveal>
          <Reveal delay={130} className="youth-business-feature__visual">
            <ImagePlaceholder
              label="Abstract sample business showcase artwork"
              variant="business"
              className="youth-business-feature__image"
              stamp="Creativity · Craft · Community"
            />
            <span className="youth-business-feature__index">YOUTH / 02</span>
          </Reveal>
        </div>
      </section>

      <section className="youth-events section-pad" id="youth-events">
        <div className="page-wrap">
          <div className="events-section__heading">
            <SectionHeading eyebrow="Together is the point" title="Time to connect." description="Youth gatherings and event details will appear here as they are confirmed." />
            <Link className="text-link" href="/#contact">Ask us about youth <span aria-hidden="true">↗</span></Link>
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

      <section className="youth-media section-pad" id="youth-media">
        <div className="youth-media__grid page-wrap">
          <div>
            <SectionHeading eyebrow="Stories in motion" title="Youth media." description="A home for youth messages, photos, creative work, and moments from life together." />
            <p className="placeholder-note"><span aria-hidden="true">✦</span> Youth media will be added when church photography and recordings are ready.</p>
          </div>
          <ImagePlaceholder
            label="Youth media gallery placeholder"
            variant="message"
            className="youth-media__art"
            stamp="Youth media archive coming soon"
          />
        </div>
      </section>
    </main>
  );
}
