// Theme-aware recreation of the ANPR project's model-comparison results
// (Precision / Recall / F1 across all 6 approaches evaluated).

type Model = {
  name: string;
  precision: number;
  recall: number;
  f1: number;
  highlight?: boolean;
};

const MODELS: Model[] = [
  { name: "Keypoint R-CNN (ours)", precision: 1.0, recall: 0.9306, f1: 0.985, highlight: true },
  { name: "YOLOv8", precision: 0.926, recall: 0.7703, f1: 0.695 },
  { name: "Faster R-CNN", precision: 0.0698, recall: 0.9773, f1: 0.99 },
  { name: "Haar Cascade", precision: 0.27, recall: 0.125, f1: 0.17 },
  { name: "Canny + Contours", precision: 0.205, recall: 0.225, f1: 0.215 },
  { name: "Morphology + Thresholding", precision: 0.06, recall: 0.01, f1: 0.02 },
];

const SERIES: { key: keyof Pick<Model, "precision" | "recall" | "f1">; label: string; color: string }[] = [
  { key: "precision", label: "Precision", color: "#e0652c" },
  { key: "recall", label: "Recall", color: "#4f46e5" },
  { key: "f1", label: "F1 Score", color: "#14b8a6" },
];

export function ModelComparisonChart() {
  const rowH = 64;
  const top = 14;
  const chartW = 260;
  const barH = 9;
  const barGap = 3;
  return (
    <figure className="my-6 overflow-x-auto rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 p-4">
      <svg
        viewBox={`0 0 460 ${top + MODELS.length * rowH + 10}`}
        className="mx-auto w-full max-w-lg"
        style={{ minWidth: 320 }}
      >
        {MODELS.map((m, i) => {
          const y = top + i * rowH;
          return (
            <g key={m.name}>
              <text
                x={0}
                y={y + 10}
                fontSize="11.5"
                fontWeight={m.highlight ? 700 : 600}
                fill={m.highlight ? "var(--brand)" : "var(--text-on-dark)"}
              >
                {m.name}
              </text>
              {SERIES.map((s, si) => {
                const by = y + 16 + si * (barH + barGap);
                const w = m[s.key] * chartW;
                return (
                  <g key={s.key}>
                    <rect x={0} y={by} width={chartW} height={barH} rx={4} fill="var(--muted)" fillOpacity={0.15} />
                    <rect x={0} y={by} width={w} height={barH} rx={4} fill={s.color} />
                    <text x={chartW + 6} y={by + barH - 1} fontSize="9" fill={s.color} fontWeight={600}>
                      {(m[s.key] * 100).toFixed(1)}%
                    </text>
                  </g>
                );
              })}
            </g>
          );
        })}
      </svg>
      <div className="mt-2 flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs">
        {SERIES.map((s) => (
          <span key={s.key} className="inline-flex items-center gap-1.5">
            <span className="inline-block h-2 w-2 rounded-full" style={{ background: s.color }} />
            <span className="text-muted">{s.label}</span>
          </span>
        ))}
      </div>
      <figcaption className="mt-2 text-center text-xs text-muted">
        Precision / Recall / F1 (IoU ≥ 0.5) across all 6 approaches evaluated — our Keypoint R-CNN model led on Precision and F1.
      </figcaption>
    </figure>
  );
}
