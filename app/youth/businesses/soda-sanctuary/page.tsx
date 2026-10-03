import type { Metadata } from "next";
import Image from "next/image";

const instagramUrl = "https://www.instagram.com/thesodasanctuary";

export const metadata: Metadata = {
  title: "The Soda Sanctuary",
  description: "Sip Something Heavenly at The Soda Sanctuary, a youth-created specialty drink business.",
};

const features = [
  { title: "Creative Flavors", icon: "spark" },
  { title: "Refreshing Drinks", icon: "cup" },
  { title: "Made by Our Youth", icon: "heart" },
  { title: "With Purpose", icon: "star" },
] as const;

function FeatureIcon({ name }: { name: (typeof features)[number]["icon"] }) {
  const paths = {
    spark: <path d="M12 2.5 14.2 9l6.3 3-6.3 2.2-2.2 6.3L9.8 14.2 3.5 12l6.3-3L12 2.5Z" />,
    cup: <><path d="M6 4h12l-1.1 16H7.1L6 4Z" /><path d="M6 8h12M9 2v2m6-2v2m-3 8v4" /></>,
    heart: <path d="M20.8 8.7c0 5.1-8.8 11.3-8.8 11.3S3.2 13.8 3.2 8.7A4.7 4.7 0 0 1 12 6.2a4.7 4.7 0 0 1 8.8 2.5Z" />,
    star: <path d="m12 2.5 2.9 6 6.6 1-4.8 4.7 1.1 6.6-5.8-3.1-5.8 3.1 1.1-6.6-4.8-4.7 6.6-1 2.9-6Z" />,
  };

  return (
    <svg className="soda-feature-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

export default function SodaSanctuaryPage() {
  return (
    <main id="main-content" className="soda-page">
      <section className="soda-hero">
        <div className="soda-hero__inner page-wrap">
          <div className="soda-hero__copy">
            <Image className="soda-hero__logo" src="/images/youth/soda-sanctuary/logo.png?v=20260930200343" alt="The Soda Sanctuary logo" width={509} height={491} sizes="112px" />
            <p className="soda-eyebrow">Youth Business</p>
            <h1>The Soda<br />Sanctuary</h1>
            <p className="soda-hero__tagline">Sip Something Heavenly</p>
            <p className="soda-hero__description">A youth-created specialty drink business serving creative dirty sodas, energy drinks, Poppi creations, lemonades, and custom combinations. Refreshing drinks. Creative flavors. Made with purpose.</p>
            <div className="soda-hero__actions">
              <a className="soda-button soda-button--instagram" href={instagramUrl} target="_blank" rel="noopener noreferrer">Follow on Instagram <span aria-hidden="true">→</span></a>
              <a className="soda-button soda-button--menu" href="#menu">View Menu <span aria-hidden="true">→</span></a>
            </div>
          </div>
          <div className="soda-hero__photo-window">
            <Image className="soda-hero__photo" src="/images/youth/soda-sanctuary/hero.png?v=20260930204509" alt="Colorful Soda Sanctuary drinks with branded cups, fruit, and ice" fill sizes="(max-width: 900px) 100vw, 58vw" />
          </div>
        </div>
      </section>

      <div className="soda-showcase page-wrap">
        <section className="soda-menu" id="menu" aria-labelledby="soda-menu-title">
          <div className="soda-menu__heading">
            <p className="soda-eyebrow">Find your favorite</p>
            <h2 id="soda-menu-title">The Menu</h2>
            <p>Choose a favorite or build your own.</p>
          </div>
          <div className="soda-menu__image-wrap">
            <Image className="soda-menu__image" src="/images/youth/soda-sanctuary/menu.png?v=20260930200603" alt="The Soda Sanctuary menu, including sodas, energy drinks, Poppi, Heaven’s Lemon, and build-your-own options" width={1320} height={1824} sizes="(max-width: 900px) 100vw, 55vw" />
          </div>
          <a className="soda-menu__open" href="/images/youth/soda-sanctuary/menu.png?v=20260930200603" target="_blank" rel="noopener noreferrer">Open full menu image <span aria-hidden="true">↗</span></a>
        </section>

        <div className="soda-showcase__aside">
          <section className="soda-features" aria-label="What makes The Soda Sanctuary special">
            {features.map((feature) => (
              <article className="soda-feature-card" key={feature.title}>
                <FeatureIcon name={feature.icon} />
                <h3>{feature.title}</h3>
              </article>
            ))}
          </section>

          <section className="soda-social" aria-label="Follow The Soda Sanctuary on Instagram">
            <div className="soda-social__photo-window">
              <Image src="/images/youth/soda-sanctuary/pink-drink.png" alt="Pink drink in a branded Soda Sanctuary cup, surrounded by bubbles and splashing water" fill sizes="(max-width: 900px) 100vw, 22vw" />
            </div>
            <div className="soda-social__copy">
              <p className="soda-social__label">Follow Us</p>
              <p className="soda-social__handle">@thesodasanctuary</p>
              <a className="soda-button soda-button--social" href={instagramUrl} target="_blank" rel="noopener noreferrer">Follow on Instagram <span aria-hidden="true">→</span></a>
            </div>
          </section>
        </div>
      </div>

      <section className="soda-drink-feature" aria-labelledby="soda-blue-drink-title">
        <div className="page-wrap soda-drink-feature__inner">
          <div className="soda-drink-feature__copy">
            <p className="soda-eyebrow">Featured drink</p>
            <h2 id="soda-blue-drink-title">Blue Heaven</h2>
          </div>
          <div className="soda-drink-feature__image">
            <Image src="/images/youth/soda-sanctuary/blue-drink.png" alt="Blue drink in a branded Soda Sanctuary cup on a beach, with bubbles and splashing water" fill sizes="(max-width: 640px) 100vw, 58vw" />
          </div>
        </div>
      </section>
    </main>
  );
}
