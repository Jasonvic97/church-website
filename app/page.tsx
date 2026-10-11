import { Hero } from "@/components/hero";
import {
  ScheduleSection,
  WelcomeNote,
  WhoWeAreSection,
} from "@/components/home-sections";

export default function Home() {
  return (
    <main id="main-content" className="homepage">
      <video
        className="homepage-video-background"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
        tabIndex={-1}
      >
        <source src="/videos/homepage-hero.mp4" type="video/mp4" />
      </video>
      <Hero />
      <ScheduleSection />
      <WelcomeNote />
      <WhoWeAreSection />
    </main>
  );
}
