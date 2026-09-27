import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="site-footer__top">
        <div className="site-footer__brand-block">
          <Link className="brand brand--footer" href="/" aria-label="Homestead Assembly home">
            <span className="brand__mark" aria-hidden="true">H</span>
            <span className="brand__wordmark">
              <span>{siteConfig.shortName}</span>
              <span>{siteConfig.descriptor}</span>
            </span>
          </Link>
          <p className="site-footer__intro">{siteConfig.welcome}</p>
        </div>
        <div className="site-footer__column">
          <p className="footer-label">Explore</p>
          <nav className="footer-links" aria-label="Footer navigation">
            {siteConfig.navigation.map((item) => (
              <Link key={item.label} href={item.href}>{item.label}</Link>
            ))}
          </nav>
        </div>
        <div className="site-footer__column">
          <p className="footer-label">Stay connected</p>
          <p className="site-footer__contact">{siteConfig.contactNote}</p>
          <div className="footer-socials" aria-label="Social media placeholders">
            {siteConfig.socialLinks.map((social) => (
              <span key={social.label} title={social.status}>
                {social.label} <span>· {social.status}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="site-footer__bottom">
        <span>© {new Date().getFullYear()} {siteConfig.name}</span>
        <span className="site-footer__location">{siteConfig.location}</span>
        <Link href="/youth/businesses">Youth businesses <span aria-hidden="true">↗</span></Link>
      </div>
    </footer>
  );
}
