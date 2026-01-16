export default function QuantumML() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      <h1 className="text-4xl font-bold">Quantum ML for Supply Chain Optimization</h1>
      <p className="mt-2 text-lg text-muted">
        Exploring quantum neural networks for backorder prediction.
      </p>

      <Section title="Problem">
        Classical ML models struggle with optimization in complex,
        large-scale supply chains.
      </Section>

      <Section title="Approach">
        <ul className="list-disc pl-6 space-y-2">
          <li>Implemented Quantum Neural Networks using Pennylane</li>
          <li>Designed MERA-based quantum architectures</li>
          <li>Benchmarked against classical ML models</li>
        </ul>
      </Section>

      <Section title="Results">
        <ul className="list-disc pl-6 space-y-2">
          <li>Demonstrated feasibility of QML for supply chains</li>
          <li>Achieved competitive results on simulators</li>
        </ul>
      </Section>

      <a
        href="https://github.com/MOSES-per"
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
