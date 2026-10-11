import type { Metadata } from "next";
import Image from "next/image";
import styles from "./page.module.css";

type MinisterProfile = {
  id: string;
  imageSrc: string | null;
  name: string | null;
  role: string | null;
};

const ministerProfiles: MinisterProfile[] = Array.from({ length: 6 }, (_, index) => ({
  id: `minister-${index + 1}`,
  imageSrc: null,
  name: null,
  role: null,
}));

export const metadata: Metadata = {
  title: { absolute: "Lead Ministers | Homestead Assembly" },
  description: "Meet the lead ministers of Homestead Assembly Body of Christ.",
};

export default function LeadMinistersPage() {
  return (
    <main id="main-content" className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.container}>
          <p className={styles.eyebrow}>Homestead Assembly Body of Christ</p>
          <h1>Lead Ministers</h1>
          <p className={styles.intro}>
            Meet the lead ministers of Homestead Assembly Body of Christ.
          </p>
        </div>
      </header>

      <section className={styles.profiles} aria-label="Lead minister profiles">
        <div className={styles.container}>
          <p className={styles.note}>
            Six profile spaces are ready for the ministers&apos; portraits, names, and roles.
          </p>
          <ol className={styles.grid}>
            {ministerProfiles.map((minister, index) => (
              <li className={styles.profile} key={minister.id}>
                <article>
                  <div className={styles.portrait}>
                    {minister.imageSrc ? (
                      <Image
                        className={styles.image}
                        src={minister.imageSrc}
                        alt={minister.name ? `${minister.name}, ${minister.role ?? "lead minister"}` : "Lead minister portrait"}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw"
                      />
                    ) : (
                      <span className={styles.portraitPlaceholder}>Portrait to be added</span>
                    )}
                  </div>
                  <div className={styles.profileInfo}>
                    <span className={styles.profileNumber}>{String(index + 1).padStart(2, "0")}</span>
                    <div className={styles.profileIdentity}>
                      {minister.name ? <h2>{minister.name}</h2> : null}
                      {minister.role ? <p className={styles.role}>{minister.role}</p> : null}
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
