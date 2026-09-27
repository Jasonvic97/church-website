type ImagePlaceholderProps = {
  label: string;
  variant?: "sanctuary" | "community" | "youth" | "testimony" | "event" | "message" | "business";
  className?: string;
  stamp?: string;
};

export function ImagePlaceholder({
  label,
  variant = "community",
  className = "",
  stamp = "Photography to come",
}: ImagePlaceholderProps) {
  return (
    <div
      className={"image-placeholder image-placeholder--" + variant + (className ? " " + className : "")}
      role="img"
      aria-label={label}
    >
      <span className="image-placeholder__orb image-placeholder__orb--one" />
      <span className="image-placeholder__orb image-placeholder__orb--two" />
      <span className="image-placeholder__frame" />
      <span className="image-placeholder__texture" />
      <span className="image-placeholder__caption">{stamp}</span>
    </div>
  );
}
