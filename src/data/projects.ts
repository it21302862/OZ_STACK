export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  year: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "healthsync-platform",
    title: "HealthSync Platform",
    client: "MedCore Health",
    category: "Healthcare",
    description:
      "A unified patient management system connecting clinics, labs, and pharmacies with real-time data sync and automated reporting.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
    year: "2025",
    featured: true,
  },
  {
    id: "fleettrack-pro",
    title: "FleetTrack Pro",
    client: "LogiMove Logistics",
    category: "Logistics",
    description:
      "GPS-enabled fleet management dashboard with route optimization, driver analytics, and predictive maintenance alerts.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
    tags: ["Next.js", "Python", "MongoDB", "Azure"],
    year: "2025",
    featured: true,
  },
  {
    id: "payflow-gateway",
    title: "PayFlow Gateway",
    client: "FinEdge Solutions",
    category: "FinTech",
    description:
      "Secure payment processing API with multi-currency support, fraud detection, and merchant analytics portal.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    tags: ["TypeScript", "Go", "Redis", "Kubernetes"],
    year: "2024",
    featured: true,
  },
  {
    id: "edulearn-portal",
    title: "EduLearn Portal",
    client: "BrightPath Academy",
    category: "Education",
    description:
      "Interactive e-learning platform with live classes, progress tracking, and AI-powered content recommendations.",
    image:
      "https://images.unsplash.com/photo-1501504904252-d473417437e0?w=800&h=600&fit=crop",
    tags: ["Vue.js", "Django", "WebRTC", "GCP"],
    year: "2024",
    featured: false,
  },
  {
    id: "retailpulse-crm",
    title: "RetailPulse CRM",
    client: "UrbanStyle Retail",
    category: "Retail",
    description:
      "Customer relationship management system with inventory integration, loyalty programs, and sales forecasting.",
    image:
      "https://images.unsplash.com/photo-1556742111-a301076d9cbd?w=800&h=600&fit=crop",
    tags: ["Angular", ".NET", "SQL Server", "Docker"],
    year: "2024",
    featured: false,
  },
  {
    id: "greengrid-monitor",
    title: "GreenGrid Monitor",
    client: "EcoPower Energy",
    category: "Energy",
    description:
      "IoT-based energy monitoring platform for solar farms with real-time dashboards and automated alert systems.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop",
    tags: ["React Native", "Node.js", "InfluxDB", "AWS IoT"],
    year: "2023",
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
