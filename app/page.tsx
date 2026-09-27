import { Hero } from "@/components/hero";
import {
  EventsSection,
  HaymSection,
  LivestreamSection,
  MessagesSection,
  MissionSection,
  TestimoniesSection,
  WelcomeNote,
  WhoWeAreSection,
  YouthFeatureSection,
} from "@/components/home-sections";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <WelcomeNote />
      <HaymSection />
      <WhoWeAreSection />
      <MissionSection />
      <TestimoniesSection />
      <YouthFeatureSection />
      <MessagesSection />
      <EventsSection />
      <LivestreamSection />
    </main>
  );
}
