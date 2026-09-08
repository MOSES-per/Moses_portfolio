import BackButton from "../../../components/BackButton";

export default function NLPCourtPrediction() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      <BackButton />
      <h1 className="text-4xl font-bold">
        Indian Supreme Court Case Outcome Prediction
      </h1>
      <p className="mt-2 text-lg text-muted">
        NLP models predicting case outcomes from Indian Supreme Court case-facts text.
      </p>

      <Section title="Problem">
        Predicting how a case is likely to resolve from its facts alone is a
        hard text-classification problem, especially on a small, imbalanced
        legal dataset.
      </Section>

      <Section title="Approach">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Built and compared 5 models on 3,464 Supreme Court cases:
            Doc2Vec+NN, CNN, Bi-gram+TF-IDF, BiLSTM, and LSTM+embeddings
          </li>
          <li>Upsampled the imbalanced 2,114 / 1,350 class split for training</li>
        </ul>
      </Section>

      <Section title="Results">
        <ul className="list-disc pl-6 space-y-2">
          <li>Bi-gram + TF-IDF was the best model at 98.70% test accuracy</li>
          <li>A 6.35-point improvement over the neural network and CNN approaches</li>
        </ul>
      </Section>

      <a
        href="https://github.com/MOSES-per/Court-Judgement-Decisions-Predictions-using-NLP-techniques"
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
