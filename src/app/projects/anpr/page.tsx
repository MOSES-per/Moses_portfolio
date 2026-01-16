export default function ANPR() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      <h1 className="text-4xl font-bold">ANPR using Keypoints RCNN</h1>
      <p className="mt-2 text-lg text-muted">
        High-accuracy automatic number plate recognition using deep learning.
      </p>

      <Section title="Problem">
        Traditional ANPR systems fail under skewed angles, poor lighting,
        and noisy backgrounds.
      </Section>

      <Section title="Approach">
        <ul className="list-disc pl-6 space-y-2">
          <li>Used Detectron2 with Keypoints RCNN</li>
          <li>Combined keypoint localization with OCR</li>
          <li>Optimized preprocessing for real-world images</li>
        </ul>
      </Section>

      <Section title="Results">
        <ul className="list-disc pl-6 space-y-2">
          <li>Improved recognition accuracy by 35%</li>
          <li>Robust performance in real-world scenarios</li>
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
