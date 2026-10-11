import type { Metadata } from "next";
import styles from "./page.module.css";

const storyParagraphs = [
  "2,000 years ago Jesus Christ came on earth and built a church. He built His church amidst all the religious movements and religious systems that already existed. Of all the religious systems that existed why did He come and build something separate?",
  "The Lord sought for a real and sincere people. A people who were not simply religious but were transformed into His image. A people who were wholly dedicated and consecrated to His will. A people who were transformed by the renewing of their mind.",
  `To begin this church He didn't choose a king, a prince, a rabbi, a high priest, or even a chief elder. He didn't begin with one of the biggest synagogues to preach and teach. He just chose 12 men, some of whom were mere fishermen, and most of whom were ordinary men and told them to follow Him. He called them out of the masses of the world and false religion and began in their foreheads. They were redeemed from the earth and they sang a new song. It was a song that no man could understand. It was a message that they died living and preaching! A new work on earth. The 12 disciples grew into 120 and on the Day of Pentecost, the Lord sent power from above. The 120 grew into 3,000 and the Lord kept adding to His church as He pleased. That church grew in numbers and in power until its falling away. The Scriptures tell us of 144,000 who had the Father's name (which translates to nature) written.`,
  "The 144,000 also were not defiled with women, the false religious system, and they followed the Lamb wherever He went. They were the first fruits unto God and to the Lamb (Revelation 14:1-5). That was the product of that glorious church that Jesus built. That was the beautiful man-child we see in Revelation 12:1-5.",
  "After all the apostles and thousands of saints were killed, the Body of Christ was infiltrated with false doctrines and teachings and the church fell away.",
  "Today, 2,000 years later, the Body of Christ, the church of the living God is being restored to its original glory and power! The Lord is calling ordinary men, women, boys, and girls out of the masses of the world and false religion which is also called Babylon and adding them to His body (Revelation 18:4).",
  `In 1914, the Lord spoke to a man by the name, William Sowders, and told him, "I want you to preach MY gospel." When the Lord said, "MY gospel" He made a clear distinction between all the other gospels being preached in the world. The Lord began to open his eyes to truths in His Word. Truths he hadn't heard anywhere during all the years he was in religion. When the Lord opened his eyes he began to teach others and this was the beginning of the restoration of the Body of Christ. We are not reforming or renewing anything. We are simply restoring what was. We are bringing back the order, the doctrines, the standards, and the principles of holiness and charity that was in the early church. Through the leading of the Holy Spirit, we are restoring the truth. Our church here in Homestead is not the only one preaching this message of restoration. There are many churches across this country and all over the world who believe what we believe and teach what we teach. We don't profess to be the only ones but with all humility and thankfulness in our hearts, we know that we are just a small part of the Body of Jesus Christ.`,
  "Our mission is to be a beacon of hope to a world that is hopeless, torches of light to those in utter darkness, comfort to those in despair, and through Jesus Christ offer rest to a world that is in turmoil. We want to do unto others as Christ has done to us: Give love, comfort, and hope. With the guidance of Almighty God, this we will do.",
] as const;

export const metadata: Metadata = {
  title: { absolute: "Who We Are | Homestead Assembly" },
  description:
    "Learn the story, beliefs, restoration message, and mission of Homestead Assembly Body of Christ.",
};

export default function WhoWeArePage() {
  return (
    <main id="main-content" className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.wrap}>
          <p className={styles.eyebrow}>Homestead Assembly</p>
          <h1>Who We Are</h1>
        </div>
      </header>

      <article className={styles.wrap} aria-label="Who We Are">
        <div className={styles.story}>
          {storyParagraphs.map((paragraph, index) => (
            <p className={styles.paragraph} key={index}>
              {paragraph}
            </p>
          ))}
        </div>

        <section className={styles.scripture} aria-labelledby="scripture-title">
          <p className={styles.scriptureLabel}>Scripture</p>
          <h2 id="scripture-title">Matthew 11:28-30 KJV</h2>
          <blockquote>
            <p>
              <span className={styles.verseNumber}>[28]</span> Come unto me, all ye that labour and are heavy laden, and I will give you rest.
            </p>
            <p>
              <span className={styles.verseNumber}>[29]</span> Take my yoke upon you, and learn of me; for I am meek and lowly in heart: and ye shall find rest unto your souls.
            </p>
            <p>
              <span className={styles.verseNumber}>[30]</span> For my yoke is easy, and my burden is light.
            </p>
          </blockquote>
        </section>
      </article>
    </main>
  );
}
