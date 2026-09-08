export default function ESociety() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      <h1 className="text-4xl font-bold">eSociety</h1>
      <p className="mt-2 text-lg text-muted">
        Digital platform for smart residential society management.
      </p>

      <Section title="Problem">
        Residential societies relied on fragmented tools and manual,
        paper-based coordination for dues, payments, and complaints.
      </Section>

      <Section title="Approach">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Built the Flutter front end and integrated it with a team-built
            Spring Boot/MongoDB backend covering dues, payments, and
            complaints
          </li>
          <li>
            Implemented REST API integration, JSON data mapping, and UI
            state updates to keep the app in sync with backend changes
          </li>
          <li>
            Contributed to digitizing manual, paper-based record-keeping
            into a searchable, role-based system
          </li>
        </ul>
      </Section>

      <Section title="Results">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Replaced manual, paper-based record-keeping with a searchable,
            role-based digital system
          </li>
          <li>Streamlined internal communication and reduced administrative overhead</li>
        </ul>
      </Section>

      <a
        href="https://github.com/MOSES-per/esociety_project"
        target="_blank"
        rel="noreferrer"
        className="btn-primary mt-8 inline-block"
      >
        GitHub
      </a>
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
