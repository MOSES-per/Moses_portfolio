// Clean, theme-aware SVG redraws of the three "Furnished" design diagrams
// (System Design, AR Architecture, System Model). Using currentColor / CSS
// vars means these adapt automatically to light and dark mode instead of
// being flat white-background screenshots.

function Box({
  x,
  y,
  w,
  h,
  label,
  sub,
  fill = "var(--surface)",
  strong = false,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  sub?: string;
  fill?: string;
  strong?: boolean;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={10}
        fill={fill}
        stroke={strong ? "var(--brand)" : "var(--muted)"}
        strokeOpacity={strong ? 0.6 : 0.4}
        strokeWidth={strong ? 1.6 : 1.2}
      />
      <text
        x={x + w / 2}
        y={sub ? y + h / 2 - 6 : y + h / 2 + 5}
        textAnchor="middle"
        fontSize="13"
        fontWeight={600}
        fill="var(--text-on-dark)"
      >
        {label}
      </text>
      {sub && (
        <text
          x={x + w / 2}
          y={y + h / 2 + 14}
          textAnchor="middle"
          fontSize="11"
          fill="var(--muted)"
        >
          {sub}
        </text>
      )}
    </g>
  );
}

function ArrowMarkerDefs({ id }: { id: string }) {
  return (
    <defs>
      <marker
        id={id}
        markerWidth="8"
        markerHeight="8"
        refX="6"
        refY="4"
        orient="auto"
      >
        <path d="M0,0 L8,4 L0,8 z" fill="var(--muted)" />
      </marker>
    </defs>
  );
}

function DiagramFrame({
  caption,
  viewBox,
  height,
  children,
}: {
  caption: string;
  viewBox: string;
  height: number;
  children: React.ReactNode;
}) {
  return (
    <figure className="my-6 overflow-x-auto rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 p-4">
      <svg
        viewBox={viewBox}
        style={{ height, minWidth: 320 }}
        className="mx-auto w-full max-w-xl"
      >
        {children}
      </svg>
      <figcaption className="mt-2 text-center text-xs text-muted">
        {caption}
      </figcaption>
    </figure>
  );
}

export function SystemDesignDiagram() {
  const mid = 180;
  return (
    <DiagramFrame caption="Figure 1 — System design: on-device AR capture, Firebase backend, Sceneform/ARCore rendering." viewBox="0 0 360 430" height={430}>
      <ArrowMarkerDefs id="arr1" />
      <Box x={mid - 110} y={10} w={220} h={110} label="Android Device" fill="var(--card)" strong />
      <Box x={mid - 90} y={40} w={80} h={34} label="User Interface" />
      <Box x={mid + 10} y={40} w={80} h={34} label="Camera" />
      <line x1={mid} y1={120} x2={mid} y2={165} stroke="var(--muted)" strokeWidth={1.5} markerEnd="url(#arr1)" />

      <ellipse cx={mid} cy={195} rx={70} ry={16} fill="var(--muted)" fillOpacity={0.25} stroke="var(--muted)" strokeOpacity={0.5} />
      <rect x={mid - 70} y={195} width={140} height={45} fill="var(--muted)" fillOpacity={0.15} stroke="var(--muted)" strokeOpacity={0.5} />
      <ellipse cx={mid} cy={240} rx={70} ry={16} fill="var(--muted)" fillOpacity={0.15} stroke="var(--muted)" strokeOpacity={0.5} />
      <text x={mid} y={222} textAnchor="middle" fontSize="13" fontWeight={600} fill="var(--text-on-dark)">Database</text>
      <text x={mid} y={238} textAnchor="middle" fontSize="10.5" fill="var(--muted)">(Firebase)</text>

      <line x1={mid} y1={256} x2={mid} y2={300} stroke="var(--muted)" strokeWidth={1.5} markerEnd="url(#arr1)" />

      <Box x={mid - 110} y={300} w={220} h={110} label="Rendering Engine" fill="var(--card)" strong />
      <Box x={mid - 90} y={330} w={80} h={34} label="Sceneform" />
      <Box x={mid + 10} y={330} w={80} h={34} label="ARCore" />
    </DiagramFrame>
  );
}

export function ArchitectureDiagram() {
  return (
    <DiagramFrame caption="Figure 2 — Marker-based AR pipeline: capture → preprocess → detect → position → render." viewBox="0 0 620 300" height={300}>
      <ArrowMarkerDefs id="arr2" />
      <Box x={10} y={20} w={100} h={44} label="Camera" />
      <Box x={150} y={20} w={110} h={44} label="Image Capturing" />
      <Box x={300} y={20} w={110} h={44} label="Preprocessing" />
      <Box x={470} y={20} w={130} h={44} label="Marker Detection" />

      <Box x={470} y={130} w={130} h={44} label="Calculate Position" />
      <Box x={300} y={130} w={110} h={44} label="Rendering" />
      <Box x={300} y={220} w={110} h={44} label="Select Virtual Object" />
      <Box x={110} y={130} w={130} h={44} label="Augmented Display" fill="var(--card)" strong />

      {/* flow */}
      <line x1={110} y1={42} x2={148} y2={42} stroke="var(--muted)" strokeWidth={1.5} markerEnd="url(#arr2)" />
      <line x1={260} y1={42} x2={298} y2={42} stroke="var(--muted)" strokeWidth={1.5} markerEnd="url(#arr2)" />
      <line x1={410} y1={42} x2={468} y2={42} stroke="var(--muted)" strokeWidth={1.5} markerEnd="url(#arr2)" />
      <line x1={535} y1={64} x2={535} y2={128} stroke="var(--muted)" strokeWidth={1.5} markerEnd="url(#arr2)" />
      <line x1={468} y1={152} x2={412} y2={152} stroke="var(--muted)" strokeWidth={1.5} markerEnd="url(#arr2)" />
      <line x1={298} y1={152} x2={242} y2={152} stroke="var(--muted)" strokeWidth={1.5} markerEnd="url(#arr2)" />
      <line x1={355} y1={218} x2={355} y2={176} stroke="var(--muted)" strokeWidth={1.5} markerEnd="url(#arr2)" />

      <text x={129} y={35} fontSize="9.5" fill="var(--muted)">video stream</text>
      <text x={269} y={35} fontSize="9.5" fill="var(--muted)">image</text>
      <text x={412} y={35} fontSize="9.5" fill="var(--muted)">grayscale</text>
      <text x={430} y={148} fontSize="9.5" fill="var(--muted)" textAnchor="end">marker</text>
      <text x={290} y={148} fontSize="9.5" fill="var(--muted)" textAnchor="end">position</text>
    </DiagramFrame>
  );
}

export function SystemModelDiagram() {
  return (
    <DiagramFrame caption="Figure 3 — Reference system model: on-device capture paired with server-side placement, recommendation and room analysis." viewBox="0 0 420 400" height={400}>
      <ArrowMarkerDefs id="arr3" />
      <rect x={10} y={10} width={400} height={90} rx={12} fill="none" stroke="var(--brand)" strokeOpacity={0.5} strokeWidth={1.4} />
      <text x={24} y={30} fontSize="12" fontWeight={700} fill="var(--text-on-dark)">Client — Mobile AR</text>
      <Box x={24} y={40} w={170} h={48} label="Style preference" sub="+ room size" />
      <Box x={214} y={40} w={170} h={48} label="Frame capture" sub="camera input" />

      <line x1={109} y1={88} x2={109} y2={118} stroke="var(--muted)" strokeWidth={1.5} markerEnd="url(#arr3)" />
      <line x1={330} y1={118} x2={330} y2={88} stroke="var(--muted)" strokeWidth={1.5} markerEnd="url(#arr3)" />
      <text x={350} y={106} fontSize="10" fill="var(--muted)">RGB</text>

      <rect x={10} y={120} width={400} height={270} rx={12} fill="none" stroke="var(--muted)" strokeOpacity={0.5} strokeWidth={1.4} strokeDasharray="4 3" />
      <text x={24} y={140} fontSize="12" fontWeight={700} fill="var(--text-on-dark)">Server</text>

      <Box x={24} y={150} w={190} h={56} label="Furniture arrangement" sub="procedural placement rules" />
      <Box x={230} y={150} w={155} h={56} label="Placement rules DB" fill="var(--card)" />

      <Box x={24} y={222} w={190} h={56} label="Recommender service" sub="type / color / style" />
      <Box x={230} y={222} w={155} h={56} label="Furniture data DB" fill="var(--card)" />

      <Box x={24} y={294} w={190} h={56} label="Room analysis" sub="style + palette detection" />
      <Box x={230} y={294} w={155} h={56} label="Room data DB" fill="var(--card)" />
    </DiagramFrame>
  );
}
