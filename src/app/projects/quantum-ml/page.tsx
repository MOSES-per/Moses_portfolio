import BackButton from "../../../components/BackButton";

export default function QuantumML() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      <BackButton />
      <h1 className="text-4xl font-bold">Quantum ML for Supply Chain Optimization</h1>
      <p className="mt-2 text-lg text-muted">
        Comparing quantum and classical models for backorder prediction, plus solving
        vehicle routing with QAOA and VQE on real quantum hardware.
      </p>

      <Section title="Problem">
        Backorder data is heavily imbalanced — only about 1 in 5 items in this dataset
        actually go on backorder — so a classical model can look accurate overall while
        still missing most of the cases that actually matter. Separately, routing a
        fleet efficiently between depots and stops is its own NP-hard combinatorial
        problem that gets exponentially harder as more stops are added.
      </Section>

      <Section title="Approach">
        <p className="font-medium text-[var(--text-on-dark)]">Backorder prediction</p>
        <p>
          Built a classical Keras baseline (a dense network: 16 → 25 → 8 → 1, with
          dropout) and a quantum model in PennyLane — a MERA-inspired tensor-network
          circuit trained via amplitude embedding — on the same 61,589-row backorder
          dataset and identical train/test split, so the two could be compared fairly.
        </p>
        <Shot src="/quantum-ml/classical-nn-architecture.png" alt="Keras dense network architecture: 16 input features through two hidden layers with dropout to a single output" caption="Classical baseline: a dense network with dropout, trained on the same data as the quantum model." maxW="max-w-xs" />
        <Shot src="/quantum-ml/mera-training-curve.png" alt="MERA quantum circuit training curve showing cost decreasing and train/test accuracy rising over 50 epochs" caption="The MERA tensor-network circuit's cost, train accuracy, and test accuracy over training." />

        <p className="font-medium text-[var(--text-on-dark)] mt-6">Vehicle routing</p>
        <p>
          Formulated a depot-plus-10-stop vehicle routing problem as a QUBO and solved
          it with both QAOA and VQE (COBYLA and SPSA optimizers) in Qiskit — on local
          simulators, IBM&apos;s qasm simulator, and real IBM quantum hardware (ibmq_oslo
          and ibmq_lagos, with error mitigation on Lagos) — then scaled the same
          formulation up to 15 and 20 variables to see how each approach held up as the
          problem grew.
        </p>
        <Shot src="/quantum-ml/vrp-graph-full.png" alt="Graph of the depot and 10 delivery stops with all candidate routes between them" caption="The full routing graph — depot (node 0) plus 10 delivery stops." maxW="max-w-sm" />
      </Section>

      <Section title="Results">
        <p>
          On backorder prediction, the classical network edged out the quantum model on
          raw accuracy (80.9% vs 79.7%) — but accuracy is a misleading scoreboard on
          data this imbalanced. What actually matters is catching real backorders, and
          there the quantum MERA model won by a wide margin: 83.9% recall against the
          classical model&apos;s 26.6%, at comparable precision (~47% vs 46%) — a jump
          from a 33.8% to a 60.2% F1 score.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Shot src="/quantum-ml/confusion-classical.png" alt="Confusion matrix for the classical model: 300 true positives, 829 false negatives" caption="Classical dense NN — misses most true backorders (829 false negatives)." />
          <Shot src="/quantum-ml/confusion-quantum-mera.png" alt="Confusion matrix for the quantum MERA model: 947 true positives, 182 false negatives" caption="Quantum MERA circuit — catches far more of them (182 false negatives)." />
        </div>

        <p className="mt-6">
          On the routing problem, every optimizer and backend combination — QAOA and
          VQE, COBYLA and SPSA, simulators and real IBM quantum processors — converged
          to the exact same optimal 7-stop route, a good sanity check that the
          formulation was solid.
        </p>
        <Shot src="/quantum-ml/vrp-solution-composite.png" alt="Convergence curves and solved routes for QAOA and VQE across COBYLA, SPSA, and real IBM hardware, all reaching the same route" caption="QAOA (left) vs VQE (right) — different optimizers and hardware, same optimal route." />
        <p className="mt-4">
          Scaling the same formulation up to 20 variables told a more honest story
          about today&apos;s hardware: VQE converged cleanly to a stable low-cost
          solution, while QAOA stayed noisy and never settled — a real look at where
          each algorithm holds up as problem size grows.
        </p>
        <Shot src="/quantum-ml/vrp-scaling-20var.png" alt="QAOA staying noisy across iterations at 20 variables while VQE converges smoothly to a low, stable cost" caption="At 20 variables, VQE (right) converges cleanly; QAOA (left) does not." />
      </Section>

      <a
        href="https://github.com/MOSES-per/Quantum-Supply-Chain-Manager"
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

function Shot({
  src,
  alt,
  caption,
  maxW = "max-w-xl",
}: {
  src: string;
  alt: string;
  caption: string;
  maxW?: string;
}) {
  return (
    <figure className="my-4">
      <div className={`mx-auto ${maxW} rounded-xl border border-black/10 dark:border-white/15 bg-white p-2`}>
        <img src={src} alt={alt} className="w-full rounded-lg" />
      </div>
      <figcaption className="mt-2 text-center text-xs text-muted">{caption}</figcaption>
    </figure>
  );
}
