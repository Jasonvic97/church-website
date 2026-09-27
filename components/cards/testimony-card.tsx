import { ImagePlaceholder } from "@/components/ui/image-placeholder";

type TestimonyCardProps = {
  title: string;
  excerpt: string;
  person?: string;
  imageLabel: string;
  fullStory: string;
};

export function TestimonyCard({ title, excerpt, person, imageLabel, fullStory }: TestimonyCardProps) {
  return (
    <article className="testimony-card">
      <ImagePlaceholder label={imageLabel} variant="testimony" className="testimony-card__image" stamp="Story portrait to come" />
      <div className="testimony-card__body">
        <span className="sample-tag">Sample preview</span>
        <h3>{title}</h3>
        <p>{excerpt}</p>
        <div className="testimony-card__byline">{person}</div>
        <details className="read-story">
          <summary>Read story <span aria-hidden="true">↗</span></summary>
          <p>{fullStory}</p>
        </details>
      </div>
    </article>
  );
}
