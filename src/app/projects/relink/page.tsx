import BackButton from "../../../components/BackButton";

export default function Relink() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      <BackButton />
      <h1 className="text-4xl font-bold">Relink</h1>
      <p className="mt-2 text-lg text-muted">
        Local-first cross-device app pairing Windows and iPhone over WebSocket.
      </p>

      <Section title="Problem">
        Keeping a phone and a desktop in sync usually means routing everything
        through the cloud, adding latency and privacy tradeoffs for something
        two nearby devices should be able to do directly.
      </Section>

      <Section title="Approach">
        <ul className="list-disc pl-6 space-y-2">
          <li>Built a Rust backend handling WebSocket pairing and the shared protocol</li>
          <li>Paired devices over QR code using a custom JSON protocol</li>
          <li>Built the desktop client with React, TypeScript, and Tauri</li>
          <li>Built the iOS client with SwiftUI</li>
        </ul>
      </Section>

      <Section title="Status">
        <ul className="list-disc pl-6 space-y-2">
          <li>Pairing, WebSocket, and IPC foundation implemented and verified</li>
          <li>Clipboard sync, file transfer, notifications, and music sync are planned next</li>
        </ul>
      </Section>

      <a
        href="https://github.com/MOSES-per/Relink"
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
