type MissionCardProps = {
  number: string;
  title: string;
  body: string;
  symbol: string;
};

export function MissionCard({ number, title, body, symbol }: MissionCardProps) {
  return (
    <article className="mission-card">
      <span className="mission-card__number">{number}</span>
      <span className="mission-card__symbol" aria-hidden="true">{symbol}</span>
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  );
}
