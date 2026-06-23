export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

export const newsArticles: NewsArticle[] = [
  {
    id: "ozstack-expands-cloud",
    title: "OZSTACK Expands Cloud Services Division",
    excerpt:
      "We're growing our cloud infrastructure team to meet rising demand for migration and managed services across the region.",
    date: "2025-05-12",
    category: "Company",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
  },
  {
    id: "healthsync-launch",
    title: "HealthSync Platform Goes Live with MedCore Health",
    excerpt:
      "Our latest healthcare project is now serving 40+ clinics with unified patient records and automated lab integrations.",
    date: "2025-04-03",
    category: "Projects",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop",
  },
  {
    id: "ai-automation-trends",
    title: "5 Trends Shaping AI Automation in 2025",
    excerpt:
      "From agentic workflows to edge AI, here are the trends our engineering team is watching closely this year.",
    date: "2025-03-18",
    category: "Insights",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
  },
  {
    id: "team-growth-2025",
    title: "OZSTACK Welcomes 15 New Engineers",
    excerpt:
      "Our team is growing! We're excited to welcome talented developers, designers, and DevOps engineers to OZSTACK.",
    date: "2025-02-07",
    category: "Company",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop",
  },
];
