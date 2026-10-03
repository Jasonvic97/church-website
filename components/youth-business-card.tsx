import Image from "next/image";
import Link from "next/link";

type YouthBusinessCardProps = {
  name: string;
  href?: string;
  logoSrc?: string;
  imageSrc?: string;
  tagline?: string;
  presentation?: "featured" | "editorial" | "product" | "typographic";
  statusLabel?: string;
  linkLabel?: string;
};

export function YouthBusinessCard({
  name,
  href,
  logoSrc,
  imageSrc,
  tagline,
  presentation = "featured",
  statusLabel,
  linkLabel,
}: YouthBusinessCardProps) {
  const comingSoonTile = (
    <article className="youth-business-tile youth-business-tile--coming">
      <p className="youth-business-tile__status">Coming Soon</p>
      <h3>{name}</h3>
    </article>
  );

  if (!href || !tagline) return comingSoonTile;

  if (presentation === "product" && imageSrc) {
    return (
      <Link className="youth-business-tile youth-business-tile--product" href={href}>
        <div className="youth-business-tile__product-art" aria-hidden="true">
          <Image
            className="youth-business-tile__product-image"
            src={imageSrc}
            alt=""
            width={1080}
            height={1350}
            sizes="(max-width: 900px) 100vw, 44vw"
          />
        </div>
        <div className="youth-business-tile__content">
          <p className="youth-business-tile__status">Youth Business</p>
          <h3>{name}</h3>
          <p className="youth-business-tile__tagline">{tagline}</p>
          <span className="youth-business-tile__link">
            Discover Copy Cat Charms <span aria-hidden="true">↗</span>
          </span>
        </div>
      </Link>
    );
  }

  if (presentation === "typographic") {
    return (
      <Link className="youth-business-tile youth-business-tile--typographic" href={href}>
        <div className="youth-business-tile__typographic-art" aria-hidden="true">
          <span>Stories<br />Through the Lens.</span>
        </div>
        <div className="youth-business-tile__content">
          <p className="youth-business-tile__status">{statusLabel ?? "Youth Business"}</p>
          <h3>{name}</h3>
          <p className="youth-business-tile__tagline">{tagline}</p>
          <span className="youth-business-tile__link">
            {linkLabel ?? "Explore the business"} <span aria-hidden="true">↗</span>
          </span>
        </div>
      </Link>
    );
  }

  if (!logoSrc) return comingSoonTile;

  if (presentation === "editorial") {
    return (
      <Link className="youth-business-tile youth-business-tile--editorial" href={href}>
        <div className="youth-business-tile__brand" aria-hidden="true">
          <Image className="youth-business-tile__brand-logo" src={logoSrc} alt="" width={534} height={467} sizes="(max-width: 900px) 60vw, 26vw" />
        </div>
        <div className="youth-business-tile__content">
          <p className="youth-business-tile__status">{statusLabel ?? "Upcoming"}</p>
          <h3>{name}</h3>
          <p className="youth-business-tile__tagline">{tagline}</p>
          <span className="youth-business-tile__link">{linkLabel ?? "Explore the business"} <span aria-hidden="true">↗</span></span>
        </div>
      </Link>
    );
  }

  if (!imageSrc) return comingSoonTile;

  return (
    <Link className="youth-business-tile youth-business-tile--featured" href={href}>
      <div className="youth-business-tile__photos" aria-hidden="true">
        <Image className="youth-business-tile__drink-photo" src={imageSrc} alt="" width={1536} height={1024} sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw" />
        <Image className="youth-business-tile__logo" src={logoSrc} alt="" width={509} height={491} />
      </div>
      <div className="youth-business-tile__content">
        <p className="youth-business-tile__status">{statusLabel ?? "Featured Youth Business"}</p>
        <h3>{name}</h3>
        <p className="youth-business-tile__tagline">{tagline}</p>
        <span className="youth-business-tile__link">{linkLabel ?? "Explore the business"} <span aria-hidden="true">↗</span></span>
      </div>
    </Link>
  );
}
