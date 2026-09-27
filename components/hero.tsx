import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <ImagePlaceholder
        label="Abstract sanctuary light and linework; church photography will be added here"
        variant="sanctuary"
        className="hero__art"
        stamp="A place to belong"
      />
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
          <span>01</span><span className="hero__index-rule" /><span>Faith · Community · Purpose</span>
        </div>
      </div>
      <a className="hero__scroll" href="#who-we-are">
        <span>Scroll to explore</span><span aria-hidden="true">↓</span>
      </a>
    </section>
  );
}
