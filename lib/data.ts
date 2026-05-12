import {
  BadgeCheck,
  BarChart3,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  CloudCog,
  Code2,
  Database,
  Figma,
  Gauge,
  Globe2,
  Layers3,
  LifeBuoy,
  LineChart,
  LockKeyhole,
  MessagesSquare,
  MonitorSmartphone,
  Network,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Workflow,
  Zap
} from "lucide-react";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/portfolio" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" }
];

export const services = [
  {
    title: "IT Consulting",
    icon: BrainCircuit,
    description: "Strategic technology advisory for organizations modernizing teams, platforms, and operating models.",
    features: ["Technology audits", "Roadmap planning", "Architecture reviews"],
    benefits: "Sharper decisions, lower delivery risk, and systems designed for scale."
  },
  {
    title: "Web Development",
    icon: Globe2,
    description: "High-performance web apps, SaaS products, portals, and business platforms built with modern stacks.",
    features: ["Next.js platforms", "Role-based portals", "API-first builds"],
    benefits: "Fast, elegant digital products that customers and teams enjoy using."
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    description: "Native-feeling mobile applications for booking, commerce, field operations, and customer engagement.",
    features: ["Flutter apps", "Push notifications", "Offline-first flows"],
    benefits: "Reliable mobile experiences that keep your business close to customers."
  },
  {
    title: "Enterprise Solutions",
    icon: Layers3,
    description: "Custom enterprise systems that connect departments, streamline workflows, and reduce manual work.",
    features: ["ERP modules", "CRM systems", "Internal platforms"],
    benefits: "Better visibility, faster operations, and secure access to critical data."
  },
  {
    title: "Cloud Solutions",
    icon: CloudCog,
    description: "Cloud migration, infrastructure planning, integration, and API ecosystems for modern operations.",
    features: ["AWS architecture", "API gateways", "DevOps enablement"],
    benefits: "More resilient systems with room to grow."
  },
  {
    title: "Automation",
    icon: Workflow,
    description: "Business automation that replaces repetitive tasks with intelligent workflows and dashboards.",
    features: ["Workflow engines", "Approvals", "Reporting automation"],
    benefits: "Lower operating cost and faster decision cycles."
  },
  {
    title: "UI/UX Design",
    icon: Figma,
    description: "Product strategy, interface design, and design systems for enterprise-grade user experiences.",
    features: ["UX research", "Design systems", "Interactive prototypes"],
    benefits: "Clear, polished products that feel intuitive from the first session."
  },
  {
    title: "Maintenance & Support",
    icon: LifeBuoy,
    description: "Long-term product support, performance tuning, security hardening, and continuous improvement.",
    features: ["SLA support", "Monitoring", "Version upgrades"],
    benefits: "Stable platforms with proactive care after launch."
  }
];

export const techStack = [
  "React",
  "Next.js",
  "Flutter",
  "Node.js",
  "Java",
  "Spring Boot",
  "Docker",
  "Kubernetes",
  "AWS",
  "MongoDB",
  "PostgreSQL"
];

export const projects = [
  {
    title: "Enterprise Dashboard Platform",
    category: "Enterprise Software",
    description: "A centralized executive dashboard for finance, operations, and performance reporting.",
    impact: "Reduced weekly reporting time by 68% and unified five business units.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
    gradient: "from-blue-600 via-cyan-500 to-slate-900"
  },
  {
    title: "Booking Mobile Application",
    category: "Mobile Product",
    description: "A cross-platform booking app with real-time availability, payments, and customer messaging.",
    impact: "Increased completed reservations by 41% within the first quarter.",
    technologies: ["Flutter", "Node.js", "MongoDB", "Firebase"],
    gradient: "from-cyan-500 via-blue-500 to-indigo-900"
  },
  {
    title: "CRM System",
    category: "Business Platform",
    description: "A tailored CRM for sales tracking, lead management, and customer lifecycle automation.",
    impact: "Improved sales team response time by 52% with automated follow-ups.",
    technologies: ["React", "Spring Boot", "PostgreSQL", "Docker"],
    gradient: "from-sky-500 via-blue-700 to-slate-950"
  },
  {
    title: "E-commerce Platform",
    category: "Commerce",
    description: "A premium storefront with inventory sync, secure checkout, promotions, and analytics.",
    impact: "Delivered a 2.4x faster checkout flow and improved conversion tracking.",
    technologies: ["Next.js", "Stripe", "AWS", "PostgreSQL"],
    gradient: "from-indigo-500 via-blue-500 to-cyan-500"
  },
  {
    title: "Document Management System",
    category: "Workflow Automation",
    description: "A secure document repository with approvals, audit trails, and team collaboration workflows.",
    impact: "Cut approval cycles from days to hours across compliance teams.",
    technologies: ["Java", "Spring Boot", "AWS S3", "Kubernetes"],
    gradient: "from-slate-900 via-blue-600 to-cyan-400"
  },
  {
    title: "Analytics Dashboard",
    category: "Data Intelligence",
    description: "A real-time analytics suite for operational KPIs, customer behavior, and revenue reporting.",
    impact: "Enabled leadership to monitor live KPIs across 14 revenue streams.",
    technologies: ["React", "Node.js", "MongoDB", "Docker"],
    gradient: "from-cyan-400 via-blue-600 to-slate-900"
  }
];

export const testimonials = [
  {
    quote:
      "NexBak Solutions brought clarity and execution speed to a platform project that had been stuck for months.",
    name: "Amelia Carter",
    role: "COO, Meridian Flow"
  },
  {
    quote:
      "Their team thinks like product strategists and builds like senior engineers. The result felt premium from day one.",
    name: "Daniel Okafor",
    role: "Founder, ScaleAxis"
  },
  {
    quote:
      "We trusted NexBak with a mission-critical dashboard, and they delivered a secure, fast, and beautiful system.",
    name: "Priya Raman",
    role: "Director of Operations, Noventis Group"
  }
];

export const stats = [
  { value: "40+", label: "Products delivered" },
  { value: "12", label: "Industry verticals" },
  { value: "99.9%", label: "Platform uptime targets" },
  { value: "6x", label: "Average workflow speed-up" }
];

export const process = [
  { title: "Discover", description: "We map business goals, users, systems, constraints, and technical opportunities." },
  { title: "Design", description: "We define the product architecture, UX flows, interface language, and delivery plan." },
  { title: "Build", description: "We ship in focused sprints with transparent communication and continuous validation." },
  { title: "Scale", description: "We harden, monitor, automate, and evolve the platform as your business grows." }
];

export const values = [
  { title: "Clarity", description: "We turn complex requirements into practical product decisions.", icon: BadgeCheck },
  { title: "Craft", description: "We care about performance, polish, maintainability, and small details.", icon: Sparkles },
  { title: "Trust", description: "We communicate honestly and build systems teams can rely on.", icon: ShieldCheck },
  { title: "Momentum", description: "We keep strategy connected to measurable delivery.", icon: Rocket }
];

export const team = [
  { name: "Maya Bennett", role: "Managing Partner", expertise: "Digital transformation and delivery strategy" },
  { name: "Noah Williams", role: "Lead Software Architect", expertise: "Enterprise platforms, APIs, and cloud systems" },
  { name: "Sara Delgado", role: "Product Design Lead", expertise: "UX research, design systems, and SaaS interfaces" },
  { name: "Ibrahim Cole", role: "Mobile Engineering Lead", expertise: "Flutter apps and customer engagement products" }
];

export const clients = ["Northstar Bank", "Apex Logistics", "Lumora Health", "Atlas Retail", "Kentro Labs", "Orbital Finance"];

export const positions = [
  { title: "Senior Full-Stack Engineer", location: "Remote / Hybrid", type: "Full-time" },
  { title: "Product Designer", location: "Remote", type: "Full-time" },
  { title: "Cloud Solutions Engineer", location: "Hybrid", type: "Contract" },
  { title: "Business Automation Analyst", location: "Remote", type: "Full-time" }
];

export const faq = [
  {
    question: "What type of companies does NexBak Solutions work with?",
    answer: "We work with startups, growing SMEs, and enterprise teams that need reliable software, modern workflows, or technical strategy."
  },
  {
    question: "Can you build both the design and development?",
    answer: "Yes. We handle discovery, UX/UI design, engineering, cloud integration, deployment, and long-term support."
  },
  {
    question: "Do you provide ongoing maintenance?",
    answer: "Yes. We offer monitoring, performance improvements, security updates, feature releases, and SLA-based support."
  },
  {
    question: "How do you start a new project?",
    answer: "We begin with a discovery session, define goals and scope, then prepare a roadmap with milestones, timeline, and delivery model."
  }
];

export const capabilities = [
  { title: "Secure by design", icon: LockKeyhole },
  { title: "API-first architecture", icon: Network },
  { title: "Data-rich dashboards", icon: BarChart3 },
  { title: "Automation engines", icon: Bot },
  { title: "Performance focused", icon: Gauge },
  { title: "Cross-platform delivery", icon: MonitorSmartphone },
  { title: "Analytics intelligence", icon: LineChart },
  { title: "Modern codebases", icon: Code2 },
  { title: "Scalable databases", icon: Database },
  { title: "Fast collaboration", icon: MessagesSquare },
  { title: "Launch readiness", icon: Rocket },
  { title: "Operational speed", icon: Zap }
];
