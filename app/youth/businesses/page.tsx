import type { Metadata } from "next";
import { YouthBusinessCard } from "@/components/youth-business-card";

export const metadata: Metadata = {
  title: "Youth Businesses",
  description: "Discover businesses created by young people in the Homestead Assembly community.",
};

const businesses = [
  {
    name: "The Soda Sanctuary",
    href: "/youth/businesses/soda-sanctuary",
    logoSrc: "/images/youth/soda-sanctuary/logo.png?v=20260930200343",
    imageSrc: "/images/youth/soda-sanctuary/hero.png?v=20260930204509",
    tagline: "Sip Something Heavenly",
  },
  {
    name: "The Tip Of The Spear Podcast",
    href: "/youth/businesses/tip-of-the-spear",
    logoSrc: "/images/youth/tip-of-the-spear/logo.png",
    tagline: "Biblical principles and practical wisdom for daily living.",
    presentation: "editorial" as const,
    statusLabel: "Upcoming Podcast",
    linkLabel: "Explore the podcast",
  },
  {
    name: "Copy Cat Charms",
    href: "/youth/businesses/copy-cat-charms",
    imageSrc: "/images/youth/copy-cat-charms/cake-pops-box.PNG",
    tagline: "Creating Magic One Cake at a Time",
    presentation: "product" as const,
  },
  {
    name: "Victor Visuals",
    href: "/youth/businesses/victor-visuals",
    tagline: "Photography, videography, editing, and digital creativity.",
    presentation: "typographic" as const,
    statusLabel: "Youth Business",
    linkLabel: "Explore Victor Visuals",
  },
];

export default function YouthBusinessesPage() {
  return (
    <main id="main-content" className="youth-businesses-page">
      <section className="youth-businesses-intro">
        <div className="page-wrap youth-businesses-intro__inner">
          <p className="youth-businesses-eyebrow">Homestead Assembly Youth</p>
          <h1>Youth Businesses</h1>
          <p>Discover businesses created by young people in our community.</p>
          <a href="#businesses" className="youth-businesses-scroll">Meet the businesses <span aria-hidden="true">↓</span></a>
        </div>
        <span className="youth-businesses-intro__spark" aria-hidden="true">✳</span>
      </section>

      <section className="youth-businesses-section section-pad" id="businesses" aria-label="Youth businesses">
        <div className="page-wrap">
          <div className="youth-businesses-heading">
            <div>
              <p className="youth-businesses-eyebrow">Made by our youth</p>
              <h2>Meet the businesses.</h2>
            </div>
            <p>Explore four businesses created by young people in our community.</p>
          </div>
          <div className="youth-businesses-grid">
            {businesses.map((business) => (
              <YouthBusinessCard key={business.name} {...business} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
