import type { ReactNode } from "react";
import { YouthNav } from "@/components/youth-nav";

export default function YouthLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <YouthNav />
      {children}
    </>
  );
}
