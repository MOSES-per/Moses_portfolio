import BackButton from "../../../components/BackButton";

export default function ESociety() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      <BackButton />
      <h1 className="text-4xl font-bold">eSociety</h1>
      <p className="mt-2 text-lg text-muted">
        Cloud platform for managing a housing society&apos;s finances — dues, payments,
        approvals, and ward-level reporting.
      </p>

      <Section title="Problem">
        Housing societies were tracking dues, collections, and ward-level spending in
        spreadsheets — with no built-in scalability, transparency, or audit trail. That
        made it easy for an urgent ward payment to slip through, or for collected funds
        to be mismanaged without anyone noticing.
      </Section>

      <Section title="Onboarding & approvals">
        <p>
          Residents log in or create an account, and every family is onboarded and
          mapped to a ward. To keep fund handling honest, we built in a{" "}
          <span className="font-medium text-[var(--text-on-dark)]">Maker-Checker</span>{" "}
          workflow — a designated Checker has to review and approve a payment request
          before it goes through, rather than any one person being able to push a
          payment unilaterally.
        </p>
      </Section>
      <DemoVideo
        src="/esociety/demo-login.mp4"
        poster="/esociety/demo-login-poster.png"
        caption="Login &amp; account creation"
        description="Walks through creating a resident account and logging in — the entry point for the whole system, and where each family gets tied to their unit."
      />

      <Section title="Admin dashboard & reporting">
        <p>
          Built the Flutter front end (Google Material Design) and integrated it with
          the team&apos;s Spring Boot / Spring Security backend and MongoDB/Firebase
          database. The ward-filtered admin dashboard surfaces total defaulters, total
          collected, pending dues, and collection rate at a glance, backed by reports
          for in-ward payments by date, families with frequent delayed payments,
          yearly spending, and year-over-year spending comparisons.
        </p>
      </Section>
      <DemoVideo
        src="/esociety/demo-dashboard.mp4"
        poster="/esociety/demo-dashboard-poster.png"
        caption="Admin dashboard — defaulters, collections, ward filters"
        description="Shows an admin filtering by ward and reading the live summary cards — total defaulters, total collected, pending dues, and collection rate — the numbers a society's treasurer used to have to tally by hand from a spreadsheet."
      />

      <Section title="Payments & dues">
        <p>
          Each ward&apos;s annual budget determines the monthly maintenance fee, which
          the system divides across its mapped families automatically and bills as a
          receipt once paid. Late payments carry a flat ₹100 fine, and residents get
          reminders on anything still pending.
        </p>
      </Section>
      <DemoVideo
        src="/esociety/demo-payments.mp4"
        poster="/esociety/demo-payments-poster.png"
        caption="Payments — pending dues, reminders, history"
        description="Covers the resident-facing side of billing: pending dues with a one-tap reminder or payment, and a full paid-history log with transaction IDs for audit purposes."
      />

      <Section title="Results">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Replaced spreadsheet-based tracking with a searchable, role-based,
            audited digital system — with a Maker-Checker approval step closing the
            fund-misuse gap the old process had
          </li>
          <li>
            Automated fee calculation, defaulter tracking, and ward-level fund
            reporting that used to be done by hand
          </li>
          <li>
            Built to the project&apos;s non-functional requirements: credential-based
            auth, 99.99% target availability, and logging/auditing at the app, web,
            and database layers
          </li>
        </ul>
      </Section>

      <a
        href="https://github.com/MOSES-per/esociety_project"
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

function DemoVideo({
  src,
  poster,
  caption,
  description,
}: {
  src: string;
  poster: string;
  caption: string;
  description: string;
}) {
  return (
    <figure className="mt-6">
      <video
        src={src}
        poster={poster}
        className="w-full rounded-xl border border-black/10 dark:border-white/10"
        autoPlay
        loop
        muted
        playsInline
        controls
      />
      <figcaption className="mt-3 text-sm text-muted">
        <span className="font-medium text-[var(--text-on-dark)]">{caption}.</span>{" "}
        {description}
      </figcaption>
    </figure>
  );
}
