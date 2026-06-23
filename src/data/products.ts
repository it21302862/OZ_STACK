export interface Product {
  id: string;
  title: string;
  description: string;
  status: "Live" | "Beta" | "Coming Soon";
}

export const products: Product[] = [
  {
    id: "stackflow",
    title: "StackFlow",
    description:
      "A low-code workflow automation platform that lets teams build internal tools without writing code.",
    status: "Live",
  },
  {
    id: "datavault",
    title: "DataVault",
    description:
      "Enterprise data backup and disaster recovery solution with automated scheduling and encryption.",
    status: "Live",
  },
  {
    id: "monitorx",
    title: "MonitorX",
    description:
      "Real-time application performance monitoring with alerting, dashboards, and incident management.",
    status: "Beta",
  },
  {
    id: "securegate",
    title: "SecureGate",
    description:
      "Zero-trust network access platform for remote teams with identity-based security policies.",
    status: "Coming Soon",
  },
];
