import type { Metadata } from "next";
import Image from "next/image";
import styles from "./page.module.css";

const linktreeUrl = "https://linktr.ee/tipofthespearofficial";
const logoSrc = "/images/youth/tip-of-the-spear/logo.png";

const focusAreas = [
  "Spirituality",
  "Finance",
  "Physical",
  "Intellectual",
  "Mental",
  "Emotion",
  "Social",
] as const;

export const metadata: Metadata = {
  title: { absolute: "The Tip Of The Spear Podcast | Homestead Assembly Youth" },
  description:
    "A Christian personal development podcast dedicated to helping people become the best version of themselves so they can fulfill everything God has called them to do.",
};

export default function TipOfTheSpearPage() {
  return (
    <main id="main-content" className={styles.page}>
      <section className={styles.hero} aria-labelledby="spear-title">
        <div className={`${styles.container} ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <h1 id="spear-title" className={styles.heroTitle}>
              <span>Become the best version of yourself.</span>
            </h1>
            <p className={styles.heroThesis}>Biblical principles and wisdom for daily living.</p>
            <p className={styles.heroSupport}>
              So you can fulfill everything God has called you to do.
            </p>
          </div>
          <figure className={styles.heroArt}>
            <Image
              className={styles.logo}
              src={logoSrc}
              alt="The Tip of the Spear Podcast logo featuring a microphone and spear"
              width={534}
              height={467}
              sizes="(max-width: 700px) 76vw, (max-width: 1050px) 42vw, 480px"
              preload
            />
          </figure>
        </div>
      </section>

      <section className={styles.about} aria-labelledby="about-title">
        <div className={`${styles.container} ${styles.aboutGrid}`}>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionIndex}>01 <span>Purpose</span></p>
            <br />
            <br />
            <h2 id="about-title">What is It?</h2>
          </div>
          <div className={styles.aboutCopy}>
            <p>A Christian personal development podcast dedicated to helping people become the best version of themselves so they can fulfill everything God has called them to do.</p>
            <div className={styles.audience} aria-label="Who the podcast is for">
              <p>For everyone.</p>
              <p>With a particular emphasis on youth.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.whyName} aria-labelledby="why-name-title">
        <div className={`${styles.container} ${styles.whyNameGrid}`}>
          <header className={styles.whyNameHeading}>
            <p className={styles.sectionIndex}>WHY THE NAME</p>
            <h2 id="why-name-title" className={styles.whyNameTitle}>
              A LIFE OF PURPOSE REQUIRES DIRECTION.
            </h2>
            <span className={styles.whyNameDirection} aria-hidden="true" />
          </header>
          <div className={styles.whyNameCopy}>
            <p>
              A spear is designed with a point. Its strength is not simply in its form, but in its direction and purpose. The tip leads the way, representing readiness to move forward with clarity, discipline, and intention.
            </p>
            <p>
              The Tip Of The Spear represents the decision to stop drifting and start living with purpose. It is about sharpening your character, strengthening your faith, and preparing yourself to meet life&apos;s challenges with wisdom and conviction.
            </p>
            <p>
              But our strength does not come from ourselves alone. Our foundation is in God. As Scripture reminds us, we are called to be strong in the Lord and equipped with His armor—not merely to advance, but to stand firm.
            </p>
            <blockquote className={styles.scripture}>
              <p>
                “Finally, my brethren, be strong in the Lord, and in the power of his might. Put on the whole armour of God, that ye may be able to stand against the wiles of the devil.”
              </p>
              <cite>EPHESIANS 6:10–11 (KJV)</cite>
            </blockquote>
          </div>
        </div>
      </section>

      <section className={styles.areas} aria-labelledby="areas-title">
        <div className={styles.container}>
          <div className={styles.areasHeading}>
            <div className={styles.sectionHeading}>
              <p className={styles.sectionIndex}>02 <span>Personal development</span></p>
              <h2 id="areas-title">The 7 areas of personal development</h2>
            </div>
          </div>
          <ol className={styles.areaGrid}>
            {focusAreas.map((area, index) => (
              <li className={styles.area} key={area}>
                <span className={styles.areaNumber}>{String(index + 1).padStart(2, "0")}</span>
                <h3>{area}</h3>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.host} aria-labelledby="host-title">
        <div className={`${styles.container} ${styles.hostGrid}`}>
          <div className={styles.hostCopy}>
            <p className={styles.hostLabel}>The Host</p>
            <br />
            <h2 id="host-title" className={styles.hostName}>PAUL DOUILLON</h2>
          </div>
        </div>
      </section>

      <section className={styles.launch} aria-labelledby="launch-title">
        <div className={`${styles.container} ${styles.launchInner}`}>
          <p className={styles.sectionIndex}>04 <span>Upcoming</span></p>
          <h2 id="launch-title">
            <span>THE CONVERSATIONS</span>
            <span>HAVE STARTED.</span>
            <span>THE EPISODES ARE</span>
            <span>COMING.</span>
          </h2>
          <a className={styles.button} href={linktreeUrl} target="_blank" rel="noopener noreferrer" aria-label="Follow Tip of the Spear on Linktree, opens in a new tab">
            Follow The Tip of the Spear <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}
