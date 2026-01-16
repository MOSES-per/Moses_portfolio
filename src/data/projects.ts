export type Project = {
  slug: string;
  title: string;
  tagline: string;
  problem: string;
  approach: string[];
  challenges: string[];
  results: string[];
  tech: string[];
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    slug: "influenceiq",
    title: "InfluenceIQ",
    tagline: "AI-powered influencer data intelligence and automation platform.",
    problem:
      "Manual influencer research across platforms like Instagram, YouTube, and Reddit is time-consuming, inconsistent, and error-prone.",
    approach: [
      "Built modular collectors for Reddit and YouTube using Python",
      "Automated data extraction and normalization",
      "Designed scoring logic for engagement and authenticity",
      "Exposed insights via a Streamlit dashboard",
    ],
    challenges: [
      "Handling platform rate limits safely",
      "Normalizing data across different social platforms",
      "Avoiding detection and scraping blocks",
    ],
    results: [
      "Reduced manual research time by over 90%",
      "Processed 100+ creators within minutes",
      "Created a reusable analytics pipeline",
    ],
    tech: ["Python", "Streamlit", "BeautifulSoup", "Selenium", "MongoDB"],
    github: "https://github.com/MOSES-per/InfluenceIQ",
  },

  {
    slug: "anpr-keypoints-rcnn",
    title: "ANPR using Keypoints RCNN",
    tagline: "High-accuracy automatic number plate recognition using deep learning.",
    problem:
      "Traditional ANPR systems struggle with skewed angles, low light, and noisy backgrounds.",
    approach: [
      "Used Detectron2 with Keypoints RCNN",
      "Combined keypoint detection with OCR",
      "Optimized preprocessing for real-world images",
    ],
    challenges: [
      "Handling blurred and low-resolution plates",
      "Improving OCR accuracy on distorted text",
    ],
    results: [
      "Improved recognition accuracy by 35%",
      "Robust performance in real-world conditions",
    ],
    tech: ["Python", "Detectron2", "Keypoints RCNN", "OCR"],
    github: "https://github.com/MOSES-per",
  },

  {
    slug: "quantum-ml-supply-chain",
    title: "Quantum ML for Supply Chain Optimization",
    tagline: "Exploring quantum neural networks for backorder prediction.",
    problem:
      "Classical ML models struggle with complex optimization in large supply chains.",
    approach: [
      "Implemented Quantum Neural Networks using Pennylane",
      "Used MERA-based architectures",
      "Benchmarked quantum models against classical baselines",
    ],
    challenges: [
      "Steep learning curve of quantum computing",
      "Limited availability of real quantum hardware",
    ],
    results: [
      "Demonstrated feasibility of QML for supply chains",
      "Achieved competitive results on simulators",
    ],
    tech: ["Python", "Pennylane", "Qiskit", "Quantum ML"],
    github: "https://github.com/MOSES-per",
  },

  {
    slug: "esociety",
    title: "eSociety",
    tagline: "A digital platform for smart residential society management.",
    problem:
      "Residential societies rely on fragmented and manual systems for daily operations.",
    approach: [
      "Designed a full-stack web application",
      "Implemented role-based access control",
      "Centralized announcements and complaints",
    ],
    challenges: [
      "Managing multiple user roles",
      "Ensuring data consistency across modules",
    ],
    results: [
      "Streamlined communication within societies",
      "Reduced manual coordination effort",
    ],
    tech: ["Java", "Spring Boot", "SQL", "HTML", "CSS"],
  },

  {
    slug: "furniture-arvr",
    title: "Furniture Shop using AR/VR",
    tagline: "Visualizing furniture in real environments using AR.",
    problem:
      "Customers struggle to visualize furniture scale and fit before purchasing.",
    approach: [
      "Built AR experience using Unity and Vuforia",
      "Integrated 3D furniture models",
      "Enabled real-time placement and scaling",
    ],
    challenges: [
      "AR tracking stability",
      "Optimizing 3D assets for performance",
    ],
    results: [
      "Improved purchase confidence",
      "Enhanced user engagement through immersive visualization",
    ],
    tech: ["Unity", "Vuforia", "AR/VR"],
  },
];
