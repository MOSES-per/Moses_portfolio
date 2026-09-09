import BackButton from "../../../components/BackButton";
import {
  AccuracyBarChart,
  ROCComparisonChart,
  ConvergenceSparklines,
} from "../../../components/NLPCharts";

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

      <Section title="Methodology">
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <span className="font-medium text-[var(--text-on-dark)]">Data collection —</span>{" "}
            gathered court case data from legal documents, court transcripts and news
            articles, focused on cases involving violations of Articles 3, 4, 5 and 8.
          </li>
          <li>
            <span className="font-medium text-[var(--text-on-dark)]">Data preprocessing —</span>{" "}
            cleaned the text, stripped irrelevant content, and converted it into a
            format suitable for machine learning models.
          </li>
          <li>
            <span className="font-medium text-[var(--text-on-dark)]">Feature extraction —</span>{" "}
            pulled out the relevant case attributes — violation type, location and
            severity — from the preprocessed text.
          </li>
          <li>
            <span className="font-medium text-[var(--text-on-dark)]">Model selection —</span>{" "}
            compared five approaches on 3,464 cases: a neural network, a CNN, a
            bidirectional LSTM (RNN), an LSTM with text embeddings, and bigram + TF-IDF
            features.
          </li>
          <li>
            <span className="font-medium text-[var(--text-on-dark)]">Model training —</span>{" "}
            trained each model on the preprocessed, upsampled data (correcting the
            imbalanced 2,114 / 1,350 class split), tuning parameters to improve fit.
          </li>
          <li>
            <span className="font-medium text-[var(--text-on-dark)]">Model evaluation —</span>{" "}
            scored every model on a held-out test set for accuracy and effectiveness
            at detecting case-outcome patterns.
          </li>
        </ol>
      </Section>

      <Section title="Results">
        <p>
          Bigram + TF-IDF was the clear winner — 98.70% test accuracy and 0.995 AUC, a
          6.35-point jump over the neural network and CNN, and well ahead of both
          sequence models. On a dataset this small, simple bag-of-words features
          generalized far better than deep sequence encoders, and its output tracked
          the Indian Supreme Court&apos;s actual decisions most closely.
        </p>
        <AccuracyBarChart />
        <ROCComparisonChart />
        <p className="mt-4">
          The training curves tell the same story: Bigram + TF-IDF and the CNN
          converged quickly with a small train/validation gap, while the RNN and LSTM
          needed far more epochs and still showed a wider generalization gap —
          consistent with sequence models needing more data than this set provided.
        </p>
        <ConvergenceSparklines />
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
      <div className="text-muted space-y-3">{children}</div>
    </section>
  );
}
