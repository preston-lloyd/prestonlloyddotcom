export type Project = {
  slug: string;
  title: string;
  description: string;
  role?: string;
  year?: string;
  technologies: string[];
  highlights?: string[];
  link?: string;
  linkLabel?: string;
};

export const projects: Project[] = [
  {
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with cart, checkout, and inventory management. Built for scale with serverless functions and edge caching.",
    role: "Full-Stack Engineer",
    year: "2024",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Redis"],
    highlights: [
      "Handled 10k+ concurrent users during launch",
      "Reduced checkout abandonment by 23%",
      "Integrated real-time inventory sync",
    ],
    linkLabel: "View case study",
  },
  {
    slug: "design-system",
    title: "Design System",
    description: "A comprehensive component library and design tokens used across multiple product teams. Includes documentation site and Figma integration.",
    role: "Design Systems Lead",
    year: "2024",
    technologies: ["React", "Storybook", "Tailwind CSS", "Figma API"],
    highlights: [
      "50+ accessible components",
      "Used by 6 product teams",
      "Design-dev parity with automated sync",
    ],
  },
  {
    slug: "analytics-dashboard",
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard for marketing teams. Custom visualizations, scheduled reports, and data export capabilities.",
    role: "Frontend Engineer",
    year: "2023",
    technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
    highlights: [
      "Sub-second data refresh",
      "Custom chart builder",
      "Export to CSV/PDF",
    ],
  },
  {
    slug: "mobile-app-backend",
    title: "Mobile App Backend",
    description: "REST and GraphQL APIs powering a fitness tracking mobile app. Handles auth, sync, and push notifications at scale.",
    role: "Backend Engineer",
    year: "2023",
    technologies: ["Node.js", "GraphQL", "PostgreSQL", "Redis", "Kubernetes"],
    highlights: [
      "99.9% uptime SLA",
      "Optimistic sync with conflict resolution",
      "Real-time push notifications",
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
