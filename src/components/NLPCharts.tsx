// Clean, theme-aware recreations of the model-comparison results for the
// Indian Supreme Court case-outcome prediction project. Rather than embedding
// five near-identical matplotlib screenshots, the real numbers (accuracy, AUC)
// are redrawn as two comparison charts, plus small sparklines showing how
// differently each model converged during training.

type Model = {
  name: string;
  color: string;
  accuracy: number;
  auc: number;
  roc: [number, number][]; // [FPR, TPR] in 0-100
  trainAcc: number[]; // illustrative, 0-100
  valAcc: number[];
};

const MODELS: Model[] = [
  {
    name: "Bigram + TF-IDF",
    color: "#e0652c",
    accuracy: 98.7,
    auc: 0.995,
    roc: [[0, 0], [1, 80], [2, 92], [5, 97], [10, 98.5], [20, 99], [50, 99.5], [100, 100]],
    trainAcc: [87, 96, 98, 99, 99.5, 99.7, 99.8, 99.9, 100, 100],
    valAcc: [96, 98, 98.5, 99, 99, 99, 98.7, 99, 99, 98.7],
  },
  {
    name: "Neural Network",
    color: "#4f46e5",
    accuracy: 92.35,
    auc: 0.986,
    roc: [[0, 0], [2, 70], [5, 88], [10, 95], [20, 97], [40, 98], [60, 99], [80, 99.5], [100, 100]],
    trainAcc: [30, 45, 60, 72, 78, 82, 84, 84.5, 85, 85],
    valAcc: [50, 50, 50, 50, 50, 55, 68, 80, 86, 87],
  },
  {
    name: "CNN",
    color: "#14b8a6",
    accuracy: 92.35,
    auc: 0.967,
    roc: [[0, 0], [3, 55], [8, 78], [15, 88], [25, 93], [40, 96], [60, 98], [80, 99], [100, 100]],
    trainAcc: [55, 70, 82, 90, 94, 96, 97, 98, 99, 99],
    valAcc: [58, 72, 84, 90, 93, 95, 95, 96, 96, 96],
  },
  {
    name: "LSTM + Embeddings",
    color: "#f2a93c",
    accuracy: 83.98,
    auc: 0.915,
    roc: [[0, 0], [5, 30], [10, 48], [20, 65], [30, 75], [40, 82], [50, 87], [60, 90], [70, 93], [80, 96], [90, 98], [100, 100]],
    trainAcc: [50, 52, 58, 65, 72, 78, 83, 88, 92, 97],
    valAcc: [53, 58, 63, 68, 73, 77, 80, 81, 82, 82],
  },
  {
    name: "RNN (BiLSTM)",
    color: "#9a7fd1",
    accuracy: 81.39,
    auc: 0.868,
    roc: [[0, 0], [5, 20], [10, 35], [20, 55], [30, 65], [40, 72], [50, 78], [60, 83], [70, 88], [80, 92], [90, 96], [100, 100]],
    trainAcc: [50, 52, 55, 60, 65, 70, 74, 78, 80, 82],
    valAcc: [53, 54, 56, 60, 64, 68, 71, 74, 76, 77],
  },
];

function toPath(points: [number, number][], flipY = false) {
  return points
    .map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x} ${flipY ? 100 - y : y}`)
    .join(" ");
}

export function AccuracyBarChart() {
  const max = 100;
  const barH = 28;
  const gap = 12;
  const chartW = 320;
  const top = 10;
  return (
    <figure className="my-6 overflow-x-auto rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 p-4">
      <svg viewBox={`0 0 400 ${top + MODELS.length * (barH + gap) + 10}`} className="mx-auto w-full max-w-md" style={{ minWidth: 280 }}>
        {MODELS.map((m, i) => {
          const y = top + i * (barH + gap);
          const w = (m.accuracy / max) * chartW;
          return (
            <g key={m.name}>
              <text x={0} y={y + barH / 2 - 3} fontSize="11" fontWeight={600} fill="var(--text-on-dark)">
                {m.name}
              </text>
              <rect x={0} y={y + barH / 2 + 3} width={chartW} height={10} rx={5} fill="var(--muted)" fillOpacity={0.15} />
              <rect x={0} y={y + barH / 2 + 3} width={w} height={10} rx={5} fill={m.color} />
              <text x={chartW + 8} y={y + barH / 2 + 12} fontSize="11" fontWeight={700} fill={m.color}>
                {m.accuracy.toFixed(2)}%
              </text>
            </g>
          );
        })}
      </svg>
      <figcaption className="mt-2 text-center text-xs text-muted">
        Test accuracy by model — Bigram + TF-IDF led at 98.70%, a 6.35-point jump over the neural network and CNN.
      </figcaption>
    </figure>
  );
}

export function ROCComparisonChart() {
  return (
    <figure className="my-6 overflow-x-auto rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 p-4">
      <svg viewBox="-8 -8 130 116" className="mx-auto w-full max-w-md" style={{ minWidth: 280 }}>
        {/* axes */}
        <line x1={0} y1={100} x2={100} y2={100} stroke="var(--muted)" strokeOpacity={0.5} strokeWidth={1} />
        <line x1={0} y1={0} x2={0} y2={100} stroke="var(--muted)" strokeOpacity={0.5} strokeWidth={1} />
        {/* diagonal reference */}
        <line x1={0} y1={100} x2={100} y2={0} stroke="var(--muted)" strokeOpacity={0.5} strokeWidth={1} strokeDasharray="3 3" />
        {MODELS.map((m) => (
          <path
            key={m.name}
            d={toPath(m.roc, true)}
            fill="none"
            stroke={m.color}
            strokeWidth={1.8}
            strokeLinejoin="round"
          />
        ))}
        <text x={50} y={112} textAnchor="middle" fontSize="6" fill="var(--muted)">False positive rate</text>
        <text x={-6} y={50} textAnchor="middle" fontSize="6" fill="var(--muted)" transform="rotate(-90 -6 50)">True positive rate</text>
      </svg>
      <div className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs">
        {MODELS.map((m) => (
          <span key={m.name} className="inline-flex items-center gap-1.5">
            <span className="inline-block h-2 w-2 rounded-full" style={{ background: m.color }} />
            <span className="text-muted">
              {m.name} <span style={{ color: m.color }} className="font-semibold">AUC {m.auc.toFixed(3)}</span>
            </span>
          </span>
        ))}
      </div>
      <figcaption className="mt-2 text-center text-xs text-muted">
        ROC curves overlaid for direct comparison (higher and further left = better separation).
      </figcaption>
    </figure>
  );
}

export function ConvergenceSparklines() {
  return (
    <div className="my-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {MODELS.map((m) => (
        <div key={m.name} className="rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 p-3">
          <p className="mb-1 text-xs font-semibold" style={{ color: m.color }}>{m.name}</p>
          <svg viewBox="0 0 100 50" className="w-full" style={{ height: 50 }}>
            <path
              d={toPath(m.trainAcc.map((v, i) => [i * (100 / (m.trainAcc.length - 1)), 48 - (v / 100) * 44]))}
              fill="none"
              stroke={m.color}
              strokeWidth={1.4}
              strokeDasharray="3 2"
              opacity={0.6}
            />
            <path
              d={toPath(m.valAcc.map((v, i) => [i * (100 / (m.valAcc.length - 1)), 48 - (v / 100) * 44]))}
              fill="none"
              stroke={m.color}
              strokeWidth={1.8}
            />
          </svg>
          <p className="mt-1 text-[10px] text-muted">dashed = train accuracy · solid = validation accuracy</p>
        </div>
      ))}
    </div>
  );
}
