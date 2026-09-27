import type { Metadata } from "next";
import { YouthBusinessCard } from "@/components/cards/youth-business-card";
import { YouthNav } from "@/components/youth-nav";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { sampleBusinesses } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Youth Businesses",
  description: "Meet businesses started and operated by young people in the Homestead Assembly community.",
};

export default function YouthBusinessesPage() {
  return (
    <main id="main-content" className="businesses-page">
      <YouthNav />
      <section className="businesses-hero">
        <div className="businesses-hero__grid page-wrap">
          <div className="businesses-hero__copy">
            <p className="eyebrow eyebrow--gold"><span className="eyebrow__line" /> The youth business directory</p>
            <h1>Good ideas<br /><em>grow here.</em></h1>
            <p>A place to discover, encourage, and support the businesses our young people are building.</p>
            <a href="#directory" className="businesses-hero__scroll">Meet the makers <span aria-hidden="true">↓</span></a>
          </div>
          <div className="businesses-hero__art" aria-hidden="true">
            <span className="businesses-hero__sun" />
            <span className="businesses-hero__ring businesses-hero__ring--one" />
            <span className="businesses-hero__ring businesses-hero__ring--two" />
            <span className="businesses-hero__vertical">CREATE · BUILD · SHARE</span>
            <span className="businesses-hero__sticker">H<br /><i>community</i></span>
          </div>
        </div>
        <span className="businesses-hero__bottom page-wrap"><span>Homestead Assembly</span><span>Young people at work</span></span>
      </section>

      <section className="directory-section section-pad" id="directory">
        <div className="page-wrap">
          <div className="directory-heading">
            <SectionHeading
              eyebrow="Meet the makers"
              title="Built with heart. Backed by community."
              description="Explore the sample profiles below. Real business listings will be added with each young entrepreneur's permission."
            />
            <span className="directory-heading__count">03 <i>sample profiles</i></span>
          </div>
          <div className="directory-toolbar">
            <span>Featured directory</span>
            <span className="directory-toolbar__rule" />
            <span>All categories <span aria-hidden="true">⌄</span></span>
          </div>
          <div className="business-grid">
            {sampleBusinesses.map((business, index) => (
              <Reveal key={business.name} delay={index * 120}>
                <YouthBusinessCard {...business} />
              </Reveal>
            ))}
          </div>
          <div className="directory-note">
            <span className="directory-note__mark" aria-hidden="true">✳</span>
            <p>These are sample profiles. Business names and descriptions are illustrative and do not represent actual church members or businesses.</p>
          </div>
        </div>
      </section>

      <section className="business-cta">
        <div className="business-cta__inner page-wrap">
          <div>
            <p className="eyebrow eyebrow--gold"><span className="eyebrow__line" /> Made something of your own?</p>
            <h2>Your work<br /><em>belongs here.</em></h2>
            <p>We look forward to celebrating the next generation of builders and makers.</p>
          </div>
          <Reveal>
            <div className="business-cta__card">
              <span className="business-cta__symbol" aria-hidden="true">H</span>
              <p className="business-cta__label">Youth business directory</p>
              <p>Listing information will be shared here when details are ready.</p>
              <Button href="/#contact" variant="light">Connect with us</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
