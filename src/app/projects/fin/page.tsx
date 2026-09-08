import BackButton from "../../../components/BackButton";

export default function FIN() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      <BackButton />
      <h1 className="text-4xl font-bold">F.I.N. (Friend In Need)</h1>
      <p className="mt-2 text-lg text-muted">
        A lean-startup project addressing everyday pain points for VIT students.
      </p>

      <Section title="Problem">
        VIT students regularly deal with printing costs, buying and selling
        second-hand goods, unreliable transport, and housing search — each
        handled through fragmented, informal channels.
      </Section>

      <Section title="Approach">
        <ul className="list-disc pl-6 space-y-2">
          <li>Applied lean-startup methodology as part of a 4-person team</li>
          <li>Validated demand with a 100+ student pilot survey</li>
          <li>
            Designed revenue models: a per-page printing margin, a 10% margin
            on second-hand goods, and a 10–15% cab-sharing commission
          </li>
        </ul>
      </Section>

      <Section title="Results">
        <ul className="list-disc pl-6 space-y-2">
          <li>Validated demand across all four pain points via the student survey</li>
          <li>Sized an estimated ~100,000-student addressable market at VIT</li>
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
