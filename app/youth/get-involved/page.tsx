import type { Metadata } from "next";
import { YouthInfoPage } from "@/components/youth-info-page";

export const metadata: Metadata = {
  title: "Get Involved",
  description: "Ways to get involved with Homestead Assembly Youth.",
};

export default function GetInvolvedPage() {
  return <YouthInfoPage eyebrow="Homestead Assembly Youth" title="Get Involved" description="Information about ways to take part will be added as opportunities and details are confirmed." />;
}
