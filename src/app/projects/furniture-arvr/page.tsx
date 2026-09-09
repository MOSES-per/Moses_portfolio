import BackButton from "../../../components/BackButton";
import {
  SystemDesignDiagram,
  ArchitectureDiagram,
  SystemModelDiagram,
} from "../../../components/FurnitureDiagrams";

export default function FurnitureARVR() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      <BackButton />
      <h1 className="text-4xl font-bold">Furnished — AR Furniture Shopping App</h1>
      <p className="mt-2 text-lg text-muted">
        An Android app that lets shoppers place true-to-scale 3D furniture in their own
        room, using ARCore and Sceneform, before they buy.
      </p>

      <Section title="Problem">
        Customers struggle to judge how a piece of furniture will actually look and fit
        in their space before buying it, and — with no physical showroom to test
        against — there was no easy way to try products out ahead of a purchase decision.
      </Section>

      <Section title="System Design">
        <p>
          The app runs entirely on-device: the Android client (min SDK 24, so it
          supports Android 7.0 and up) handles the camera feed and UI, Firebase stores
          user accounts, transactions and product details, and Sceneform (built on
          ARCore) renders furniture models. Sceneform generates the renderable 3D
          models at runtime, so the app doesn&apos;t need to ship separate pre-baked
          <code className="mx-1 rounded bg-black/10 dark:bg-white/10 px-1 py-0.5 text-[0.85em]">.sfb</code>
          asset files for every product.
        </p>
        <SystemDesignDiagram />
      </Section>

      <Section title="How AR placement works">
        <p>
          Once a user places a marker in their space, the pipeline below runs on every
          frame: the camera stream is captured, converted to grayscale during
          preprocessing, and scanned for the marker. Its position feeds into the
          renderer alongside whichever furniture model the user selected, producing the
          live augmented display.
        </p>
        <ArchitectureDiagram />
      </Section>

      <Section title="System model">
        <p>
          Beyond marker-based placement, the app&apos;s architecture was designed around
          a client–server split: the phone handles capture and style/room-size input,
          while furniture arrangement, type/color/style recommendations and room-style
          analysis live server-side against their own data stores. This kept
          on-device logic light and left room to grow the recommendation and
          room-analysis pieces independently.
        </p>
        <SystemModelDiagram />
      </Section>

      <Section title="Implementation">
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <span className="font-medium text-[var(--text-on-dark)]">
              Data collection &amp; 3D model acquisition —
            </span>{" "}
            with no physical store to scan for testing, furniture models (chairs,
            table sets, coffee tables, and more) were sourced as{" "}
            <code className="rounded bg-black/10 dark:bg-white/10 px-1 py-0.5 text-[0.85em]">.glb</code>{" "}
            files from CGTrader for use in the app.
          </li>
          <li>
            <span className="font-medium text-[var(--text-on-dark)]">
              UI design —
            </span>{" "}
            built a modern, e-commerce-style flow — login/registration, home &amp;
            categories, product &amp; product-detail pages, and cart — using Google
            Fonts&apos; Inter typeface throughout for a clean, consistent look.
          </li>
          <li>
            <span className="font-medium text-[var(--text-on-dark)]">
              Product management &amp; database integration —
            </span>{" "}
            an admin-only, Firebase-authenticated upload flow lets new products be
            added on the server side, instantly available to every registered user
            through the shared Firebase database.
          </li>
        </ol>
      </Section>

      <Section title="Results">
        <ul className="list-disc pl-6 space-y-2">
          <li>Shoppers can preview furniture at real-world scale in their own room instead of guessing from product photos</li>
          <li>Runtime model generation via Sceneform kept the app lightweight — no bundled per-product asset files</li>
          <li>A full browse → product detail → AR preview → cart flow, backed by a shared Firebase catalog admins can update anytime</li>
        </ul>
      </Section>

      <Section title="Tech">
        <div className="flex flex-wrap gap-2">
          {["Android", "Java", "ARCore", "Sceneform", "Firebase"].map((t) => (
            <span
              key={t}
              className="rounded-full border border-amber-500/30 dark:border-indigo-400/20 bg-amber-500/10 dark:bg-indigo-500/10 px-3 py-1 text-sm text-amber-800 dark:text-indigo-300"
            >
              {t}
            </span>
          ))}
        </div>
      </Section>

      <a
        href="https://github.com/MOSES-per/furniture-ar-master"
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
