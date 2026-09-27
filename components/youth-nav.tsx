import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function YouthNav() {
  return (
    <nav className="youth-nav" aria-label="Youth navigation">
      <div className="youth-nav__inner page-wrap">
        <span className="youth-nav__label">Youth</span>
        <div>
          {siteConfig.youthNavigation.map((item) => (
            <Link key={item.label} href={item.href}>{item.label}</Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
