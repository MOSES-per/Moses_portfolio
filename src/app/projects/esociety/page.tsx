export default function ESociety() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      <h1 className="text-4xl font-bold">eSociety</h1>
      <p className="mt-2 text-lg text-muted">
        Digital platform for smart residential society management.
      </p>

      <Section title="Problem">
        Residential societies rely on fragmented tools and manual coordination
        for daily operations.
      </Section>

      <Section title="Approach">
        <ul className="list-disc pl-6 space-y-2">
          <li>Built a full-stack web application</li>
          <li>Implemented role-based access control</li>
          <li>Centralized announcements and complaints</li>
        </ul>
      </Section>

      <Section title="Results">
        <ul className="list-disc pl-6 space-y-2">
          <li>Streamlined internal communication</li>
          <li>Reduced administrative overhead</li>
        </ul>
      </Section>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <div className="text-muted">{children}</div>
    </section>
  );
}
