import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function YouthNav() {
  return (
    <nav className="youth-nav" aria-label="Youth navigation">
      <div className="youth-nav__inner page-wrap">
        <Link className="youth-nav__brand" href="/youth" aria-label="Homestead Assembly Youth">
          <Image
            src="/images/church/youth-logo.png"
            alt="Homestead Assembly Youth"
            width={44}
            height={44}
            priority
          />
        </Link>
        <div>
          {siteConfig.youthNavigation.map((item) => (
            <Link key={item.label} href={item.href}>{item.label}</Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
