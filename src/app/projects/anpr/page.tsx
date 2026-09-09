import BackButton from "../../../components/BackButton";
import { ModelComparisonChart } from "../../../components/ANPRCharts";

export default function ANPR() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      <BackButton />
      <h1 className="text-4xl font-bold">Automatic Number Plate Detection with Keypoint R-CNN</h1>
      <p className="mt-2 text-lg text-muted">
        Locating license plates by their four corners instead of just a bounding box —
        benchmarked against 5 other detection approaches.
      </p>

      <Section title="Problem">
        Number plates are often tilted, partially covered, or hard to read in low light,
        bad weather, or motion blur — and most detectors either need heavy compute to
        stay robust to this or fall over the moment a plate isn&apos;t front-on and
        well-lit.
      </Section>

      <Section title="Approach">
        <p>
          As part of a 5-person capstone research project, we built and evaluated 6
          detection approaches on the same annotated plate dataset (Pascal VOC-format
          bounding boxes and corner keypoints): three classical computer-vision
          baselines (Canny edge detection + contours, morphology + thresholding, Haar
          cascade), two learned object detectors (Faster R-CNN, YOLOv8), and our own
          Keypoint R-CNN model.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Backbone: torchvision&apos;s Keypoint R-CNN with a ResNet-50 FPN, pretrained
            on COCO, with a custom keypoint-prediction head (
            <code className="mx-1 rounded bg-black/10 dark:bg-white/10 px-1 py-0.5 text-[0.85em]">ConvTranspose2d</code>
            ) retrained to localize the plate&apos;s 4 corners rather than just a box
          </li>
          <li>Trained with SGD (lr 0.005, momentum 0.9, weight decay 0.0005) against combined classification, bounding-box regression, and Smooth-L1 keypoint losses</li>
          <li>Scored every model on Precision, Recall, and F1 at IoU ≥ 0.5 for a fair, apples-to-apples comparison</li>
        </ul>
      </Section>

      <Section title="Results">
        <p>
          Our Keypoint R-CNN was the strongest detector overall — 100% precision,
          93.06% recall, and a 98.50% F1 score — clearly ahead of every classical CV
          baseline and both other learned detectors. YOLOv8 traded some accuracy for a
          lighter, faster model (92.60% / 77.03% / 69.50%), while Faster R-CNN swung
          the other way: very high recall (97.73%) but so many false positives that
          precision collapsed to 6.98%.
        </p>
        <ModelComparisonChart />
        <figure className="my-6">
          <img
            src="/anpr/prediction-1.png"
            alt="Keypoint R-CNN detecting a license plate: green bounding box and red corner keypoints on a rear-view car photo"
            className="mx-auto w-full max-w-md rounded-xl border border-black/10 dark:border-white/10"
          />
          <figcaption className="mt-2 text-center text-xs text-muted">
            The trained model correctly boxes the plate and marks its 4 corner keypoints on an unseen test image.
          </figcaption>
        </figure>
      </Section>

      <a
        href="https://github.com/MOSES-per/ANPR"
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
