import Link from "next/link";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

type EventCardProps = {
  title: string;
  date: string;
  description: string;
  imageLabel: string;
  index: string;
};

export function EventCard({ title, date, description, imageLabel, index }: EventCardProps) {
  return (
    <article className="event-card">
      <ImagePlaceholder label={imageLabel} variant="event" className="event-card__image" stamp="Event details soon" />
      <div className="event-card__body">
        <div className="event-card__meta"><span>{date}</span><span>{index}</span></div>
        <h3>{title}</h3>
        <p>{description}</p>
        <Link className="text-link" href="/#contact">Get event updates <span aria-hidden="true">↗</span></Link>
      </div>
    </article>
  );
}
