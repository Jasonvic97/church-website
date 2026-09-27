import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

type MessageCardProps = {
  title: string;
  speaker: string;
  description: string;
};

export function MessageCard({ title, speaker, description }: MessageCardProps) {
  return (
    <article className="message-card">
      <div className="message-card__visual">
        <ImagePlaceholder label="Message artwork placeholder" variant="message" stamp="Message archive coming soon" />
        <span className="message-card__play" aria-hidden="true">
          <svg viewBox="0 0 20 20"><path d="m7 4 9 6-9 6z" /></svg>
        </span>
        <span className="message-card__number" aria-hidden="true">01 / 01</span>
      </div>
      <div className="message-card__copy">
        <p className="eyebrow">The message</p>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="message-card__meta">{speaker}<span>·</span>Recording coming soon</div>
        <Button href="/#livestream" variant="outline">Message archive</Button>
      </div>
    </article>
  );
}
