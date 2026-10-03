import type { Metadata } from "next";
import Image from "next/image";
import styles from "./page.module.css";

const instagramUrl = "https://www.instagram.com/copycat_charms/";
const threadsUrl =
  "https://www.threads.com/@copycat_charms?xmt=AQG0bTNPxuoOsmwgpAxdlf9uzTWZoFWyZpGLRH0-V4gb5f4";

export const metadata: Metadata = {
  title: { absolute: "Copy Cat Charms | Homestead Assembly Youth" },
  description:
    "Copy Cat Charms is a made-to-order bakery specializing in decorated cake pops and red velvet dessert jars.",
};

export default function CopyCatCharmsPage() {
  return (
    <main id="main-content" className={styles.page}>
      <section className={styles.hero} aria-labelledby="copy-cat-title">
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <h1 id="copy-cat-title" className={styles.heroTitle}>
              Copy Cat Charms
            </h1>
            <p className={styles.tagline}>Creating Magic One Cake at a Time</p>
            <a
              className={styles.instagramButton}
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore on Instagram <span aria-hidden="true">↗</span>
            </a>
          </div>

        </div>
      </section>

      <section className={styles.treats} aria-labelledby="treats-title">
        <div className={styles.container}>
          <header className={styles.sectionHeading}>
            <p className={styles.eyebrow}>MADE TO ORDER</p>
            <h2 id="treats-title">Made to charm.</h2>
            <p className={styles.introDescription}>
              Thoughtfully crafted cake pops and red velvet dessert jars, made to
              bring a little sweetness to every occasion.
            </p>
          </header>

          <div className={styles.photoGallery}>
            <figure className={styles.featuredFigure}>
              <Image
                className={styles.featuredImage}
                src="/images/youth/copy-cat-charms/cake-pops-box.PNG"
                alt="A box of decorated cake pops."
                width={1536}
                height={1024}
                sizes="(max-width: 760px) 92vw, 1180px"
              />
            </figure>

            <div className={styles.cakeGallery}>
              <figure className={styles.cakeFigure}>
                <Image
                  className={styles.galleryImage}
                  src="/images/youth/copy-cat-charms/custom-cake.heic"
                  alt="A full decorated cake with floral details."
                  width={1086}
                  height={1448}
                  sizes="(max-width: 760px) 92vw, (max-width: 1100px) 44vw, 560px"
                />
              </figure>
              <figure className={styles.popFigure}>
                <Image
                  className={styles.galleryImage}
                  src="/images/youth/copy-cat-charms/cake-pops.jpg"
                  alt="A close-up arrangement of decorated cake pops."
                  width={1535}
                  height={1024}
                  sizes="(max-width: 760px) 92vw, (max-width: 1100px) 44vw, 560px"
                />
              </figure>
            </div>
          </div>

          <article className={styles.jarFeature} aria-labelledby="jar-title">
            <figure className={styles.jarFigure}>
              <Image
                className={styles.jarImage}
                src="/images/youth/copy-cat-charms/red-velvet-biscoff.PNG"
                alt="Red velvet dessert jars."
                width={1408}
                height={1117}
                sizes="(max-width: 760px) 92vw, (max-width: 1100px) 88vw, 1000px"
              />
            </figure>
            <div className={styles.jarCopy}>
              <p className={styles.productLabel}>Made to order</p>
              <h3 id="jar-title">Red Velvet Dessert Jar</h3>
              <p className={styles.jarPrice}>$7 per bottle</p>
              <a
                className={styles.orderButton}
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Order Red Velvet <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className={styles.social} aria-labelledby="social-title">
        <div className={styles.socialInner}>
          <p className={styles.eyebrow}>Social</p>
          <h2 id="social-title">Follow Copy Cat Charms</h2>
          <nav className={styles.socialLinks} aria-label="Copy Cat Charms social links">
            <a
              className={styles.socialLink}
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram <span aria-hidden="true">↗</span>
            </a>
            <a
              className={styles.socialLink}
              href={threadsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Threads <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </div>
      </section>
    </main>
  );
}
