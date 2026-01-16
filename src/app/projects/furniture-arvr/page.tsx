export default function FurnitureARVR() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      <h1 className="text-4xl font-bold">Furniture Shop using AR/VR</h1>
      <p className="mt-2 text-lg text-muted">
        Visualizing furniture in real environments using augmented reality.
      </p>

      <Section title="Problem">
        Customers struggle to visualize furniture scale and fit before purchase.
      </Section>

      <Section title="Approach">
        <ul className="list-disc pl-6 space-y-2">
          <li>Built AR experience using Unity and Vuforia</li>
          <li>Integrated optimized 3D furniture models</li>
          <li>Enabled real-time placement and scaling</li>
        </ul>
      </Section>

      <Section title="Results">
        <ul className="list-disc pl-6 space-y-2">
          <li>Improved purchase confidence</li>
          <li>Higher engagement through immersive visualization</li>
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
