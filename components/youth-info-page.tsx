export function YouthInfoPage({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <main id="main-content" className="youth-info-page">
      <section className="youth-info-page__hero">
        <div className="page-wrap">
          <p className="youth-businesses-eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="youth-info-page__description">{description}</p>
          <p className="youth-info-page__note">More information will be shared here as details are confirmed.</p>
        </div>
      </section>
    </main>
  );
}
