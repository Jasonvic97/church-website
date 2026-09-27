import { ImagePlaceholder } from "@/components/ui/image-placeholder";

type YouthBusinessCardProps = {
  name: string;
  category: string;
  description: string;
  imageLabel: string;
  initials: string;
};

export function YouthBusinessCard({
  name,
  category,
  description,
  imageLabel,
  initials,
}: YouthBusinessCardProps) {
  return (
    <article className="business-card">
      <div className="business-card__image-wrap">
        <ImagePlaceholder label={imageLabel} variant="business" className="business-card__image" stamp="Sample imagery" />
        <span className="business-card__category">{category}</span>
        <span className="business-card__open" aria-hidden="true">↗</span>
      </div>
      <div className="business-card__content">
        <div className="business-card__heading">
          <span className="business-card__monogram" aria-hidden="true">{initials}</span>
          <span className="sample-tag">Sample profile</span>
        </div>
        <h2>{name}</h2>
        <p>{description}</p>
        <details className="business-card__details">
          <summary className="business-card__footer">
            <span>More about this business</span><span aria-hidden="true">↗</span>
          </summary>
          <p>Profile links, contact details, and gallery will be added when a young entrepreneur&apos;s listing is confirmed.</p>
        </details>
      </div>
    </article>
  );
}
