export const realsProject = {
  label: "Independent Software Project · 2026",
  name: "Reals",
  description:
    "An Android dating product designed and developed end-to-end, centered on compatibility, text-first interaction, progressive profile reveal and staged conversations.",
  status: "Backend deployed and validated on AWS. Android release in preparation.",
  stack: [
    "Kotlin",
    "Spring Boot",
    "Java 21",
    "PostgreSQL",
    "Firebase",
    "AWS",
    "Android / Jetpack Compose",
  ],
  links: [
    {
      label: "Backend repository",
      href: "https://github.com/Gtestino92/reals-backend",
    },
    {
      label: "Android repository",
      href: "https://github.com/Gtestino92/reals-app",
    },
  ],
  highlights: [
    {
      title: "Matchmaking & concurrency",
      text: "Concurrent matchmaking flows with distributed locking and scheduled background coordination.",
    },
    {
      title: "Consistency & resilience",
      text: "Idempotent flows, Resilience4j and rate limiting around user-facing and operational paths.",
    },
    {
      title: "Security & media",
      text: "Firebase Authentication, App Check and private S3 media storage for controlled access.",
    },
    {
      title: "Infrastructure",
      text: "AWS development and production environments using EC2, private RDS PostgreSQL, S3, GitHub Actions, OIDC / SSM and Docker.",
    },
  ],
};

export const otherProjects = [
  {
    name: "Chamba Hunter",
    description:
      "Python automation pipeline for discovering, normalizing, classifying and prioritizing software engineering job opportunities.",
    details:
      "Covers job acquisition, ATS ingestion, normalization/classification, matching/prioritization, SQLite as the source of truth and Excel shortlist output.",
    stack: "Python · SQLite",
    links: [
      {
        label: "Repository",
        href: "https://github.com/Gtestino92/chamba-hunter",
      },
    ],
    placeholder: "Future Excel shortlist screenshot",
  },
  {
    name: "Macetas Ontivero",
    eyebrow: "Earlier project",
    description:
      "E-commerce catalog and order-management system for a bonsai pottery business.",
    details:
      "Included a 50+ model catalog, multi-image product pages, JavaScript/CSS/jQuery frontend, sticky cart, checkout, email notifications, backoffice order history, status management and historical sales charts. A separate Python/Flask service generated recommendations from previous purchase behavior during checkout.",
    stack: "Java / Spring · JavaScript · CSS · jQuery · Python · Flask",
    links: [
      {
        label: "Repository",
        href: "https://github.com/Gtestino92/MacetasOntivero",
      },
    ],
    placeholder: "Future faithful UI reconstruction",
  },
];
