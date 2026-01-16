export default function InfluenceIQ() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      <h1 className="text-4xl font-bold">InfluenceIQ</h1>
      <p className="mt-2 text-lg text-muted">
        AI-powered influencer data intelligence and automation platform.
      </p>

      <Section title="Problem">
        Manual influencer research across Instagram, YouTube, and Reddit is slow,
        inconsistent, and error-prone.
      </Section>

      <Section title="Approach">
        <ul className="list-disc pl-6 space-y-2">
          <li>Built modular collectors for Reddit & YouTube</li>
          <li>Automated data extraction & normalization</li>
          <li>Designed engagement & authenticity scoring</li>
          <li>Streamlit dashboard for insights</li>
        </ul>
      </Section>

      <Section title="Results">
        <ul className="list-disc pl-6 space-y-2">
          <li>Reduced research time by 90%</li>
          <li>Processed 100+ creators in minutes</li>
          <li>Reusable analytics pipeline</li>
        </ul>
      </Section>

      <a
        href="https://github.com/MOSES-per/InfluenceIQ"
        target="_blank"
        className="btn-primary mt-8 inline-block"
      >
        GitHub
      </a>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <div className="text-muted">{children}</div>
    </section>
  );
}
