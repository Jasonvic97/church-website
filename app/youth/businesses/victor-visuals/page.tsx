import type { Metadata } from "next";
import styles from "./page.module.css";

const visualSiteUrl = "https://jasonvictor.online";

const services = [
  {
    title: "Photography",
    description: "Capturing moments, people, and stories through the lens.",
  },
  {
    title: "Videography",
    description: "Creating visual stories through motion and cinematic perspective.",
  },
  {
    title: "Video Editing",
    description: "Shaping footage into polished, engaging visual content.",
  },
  {
    title: "Website Creation",
    description: "Building modern digital experiences for brands and businesses.",
  },
  {
    title: "Social Media Content",
    description: "Creating visual content for online platforms.",
  },
] as const;

export const metadata: Metadata = {
  title: { absolute: "Victor Visuals | Homestead Assembly Youth" },
  description:
    "Victor Visuals creates photography, videography, editing, and digital experiences. Stories Through the Lens.",
};

export default function VictorVisualsPage() {
  return (
    <main id="main-content" className={styles.page}>
      <section className={styles.hero} aria-labelledby="victor-title">
        <div className={`${styles.container} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Youth Business</p>
            <h1 id="victor-title">Victor Visuals</h1>
            <p className={styles.heroTagline}>Stories Through the Lens.</p>
            <p className={styles.heroDescription}>
              Creative visuals and digital experiences designed to bring ideas to life.
            </p>
            <div className={styles.heroActions}>
              <a
                className={`${styles.button} ${styles.primaryButton}`}
                href={visualSiteUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore Victor Visuals <span aria-hidden="true">↗</span>
              </a>
              <a className={`${styles.button} ${styles.secondaryButton}`} href="#creative-services">
                Discover Our Creative Work <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <div className={styles.heroArtwork} aria-hidden="true">
            <span className={styles.artworkFrame} />
            <span className={styles.artworkCrosshair} />
            <span className={styles.artworkCaption}>Image · Motion · Digital</span>
          </div>
        </div>
      </section>

      <section
        className={styles.services}
        id="creative-services"
        aria-labelledby="services-title"
      >
        <div className={styles.container}>
          <header className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Creative services</p>
            <h2 id="services-title">Ideas, shaped into visuals.</h2>
          </header>
          <div className={styles.serviceGrid}>
            {services.map((service, index) => (
              <article className={styles.serviceCard} key={service.title}>
                <p className={styles.serviceIndex}>{String(index + 1).padStart(2, "0")}</p>
                <h3>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.philosophy} aria-labelledby="philosophy-title">
        <div className={`${styles.container} ${styles.philosophyGrid}`}>
          <p className={styles.eyebrow}>The point of view</p>
          <div className={styles.philosophyCopy}>
            <h2 id="philosophy-title">Every frame tells a story.</h2>
            <p>
              Victor Visuals brings creativity and technology together to turn ideas into
              meaningful visual experiences—from capturing a moment to building a brand&apos;s
              digital presence.
            </p>
          </div>
          <span className={styles.philosophyRule} aria-hidden="true" />
        </div>
      </section>

      <section className={styles.closing} aria-labelledby="closing-title">
        <div className={`${styles.container} ${styles.closingInner}`}>
          <p className={styles.eyebrow}>Main Victor Visuals website</p>
          <h2 id="closing-title">Let&apos;s bring your vision to life.</h2>
          <p>
            Explore the work, creative services, and digital portfolio of Victor Visuals.
          </p>
          <a
            className={`${styles.button} ${styles.primaryButton}`}
            href={visualSiteUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit JasonVictor.online <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}
