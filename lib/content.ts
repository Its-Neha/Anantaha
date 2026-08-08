/**
 * Every piece of copy on the landing page lives here so the marketing
 * text can be edited without touching layout.
 */

export const nav = [
  { label: "Solutions", href: "#capabilities" },
  { label: "Industries", href: "#capabilities" },
  { label: "Platform", href: "#process" },
  { label: "Insights", href: "#cta" },
] as const;

export const hero = {
  eyebrow: "Infinite possibilities by purpose",
  headingAccent: "Infinite",
  heading: "by purpose.",
  body: [
    "We partner with ambitious organizations",
    "to solve business challenges of any size,",
    "in any industry, through technology.",
  ],
} as const;

export const stats = [
  { value: "500+", label: "Projects delivered" },
  { value: "40+", label: "Industries served" },
  { value: "99.9%", label: "Uptime" },
  { value: "24×7", label: "Partnership" },
] as const;

export const capabilities = [
  {
    number: "01",
    icon: "strategy",
    title: "Strategy & Transformation",
    body: "We align business, people, and technology to create measurable impact.",
  },
  {
    number: "02",
    icon: "product",
    title: "Product Engineering",
    body: "Scalable, secure, and intuitive digital products engineered for real-world outcomes.",
  },
  {
    number: "03",
    icon: "cloud",
    title: "Cloud & Data Platform",
    body: "Modern infrastructure and data platforms that turn information into intelligent advantage.",
  },
  {
    number: "04",
    icon: "security",
    title: "Security & Compliance",
    body: "Enterprise-grade security and compliance to protect what matters most.",
  },
] as const;

export const processSteps = [
  {
    numeral: "I",
    title: "Discover",
    body: ["We immerse, understand,", "and define what truly matters."],
  },
  {
    numeral: "II",
    title: "Design",
    body: ["We craft elegant solutions that", "align with your vision and goals."],
  },
  {
    numeral: "III",
    title: "Deliver",
    body: ["We build, launch, and evolve —", "creating value that compounds."],
  },
] as const;

export const footerColumns = [
  {
    title: "Solutions",
    links: [
      "Strategy & Transformation",
      "Product Engineering",
      "Cloud & Data Platform",
      "Security & Compliance",
    ],
  },
  {
    title: "Industries",
    links: [
      "FinTech",
      "Healthcare",
      "Retail & Commerce",
      "Manufacturing",
      "More Industries",
    ],
  },
  {
    title: "Platform",
    links: ["Overview", "Capabilities", "Security", "Integrations", "Developers"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Insights", "Contact"],
  },
] as const;
