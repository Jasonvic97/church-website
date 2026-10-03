import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__art" aria-hidden="true" />
      <div className="hero__wash" />
      <div className="hero__content page-wrap">
        <div className="hero__copy">
          <p className="eyebrow eyebrow--gold hero__eyebrow">
            <span className="eyebrow__line" /> {siteConfig.welcomeNote}
          </p>
          <h1 id="hero-title">
            <span>{siteConfig.shortName}</span>
            <em>{siteConfig.descriptor}</em>
          </h1>
          <p className="hero__welcome">{siteConfig.welcome}</p>
          <div className="hero__actions">
            <Button href="/#contact">Plan your visit</Button>
            <Button href="/#livestream" variant="light">Watch live</Button>
          </div>
        </div>
        <div className="hero__index" aria-hidden="true">
          <span>01</span><span className="hero__index-rule" /><span>All We Need Is Love</span>
        </div>
      </div>
      <div className="hero__fade" aria-hidden="true" />
    </section>
  );
}
