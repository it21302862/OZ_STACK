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
    id: "Welcome to Ozstack",
    title: "Welcome to Ozstack – Smarter Software Starts Here",
    excerpt:
      `Ozstack is proud to introduce a modern, automation-first software development company dedicated to helping Australian businesses streamline operations and embrace digital transformation.

Our mission is simple: eliminate repetitive manual work, reduce operational errors, and deliver reliable software solutions that help businesses grow faster and work smarter.

Whether it's developing custom business applications, automating workflows, or integrating existing systems, our team focuses on building scalable solutions that save time, improve efficiency, and create lasting value.

As we begin our journey, we're committed to delivering innovative technology backed by quality, transparency, and long-term partnerships.`,
    date: "2026-07-04",
    category: "Company",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
  },
  {
    id: "healthsync-launch",
    title: "Why Automation Matters More Than Ever",
    excerpt:
`Many businesses continue to rely on manual processes that consume valuable time and increase the risk of human error. At Ozstack, we believe technology should simplify operations—not complicate them.

By automating repetitive tasks and streamlining workflows, organizations can improve productivity, reduce operational costs, and allow employees to focus on more meaningful work.

Our automation-first approach ensures every solution we build is designed to maximize efficiency while remaining flexible enough to grow alongside your business.

Automation isn't just about replacing manual work—it's about creating smarter ways to achieve better results.`,
    date: "2026-07-04",
    category: "Projects",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop",
  },
  {
    id: "ai-automation-trends",
    title: "Our Commitment to Innovation",
    excerpt:
      `Technology is evolving rapidly, and businesses need software partners who can adapt just as quickly.

At Ozstack, innovation is at the heart of everything we do. We continuously explore emerging technologies, modern development practices, and automation strategies to build future-ready software solutions.

Our streamlined development process enables us to deliver projects faster while maintaining high standards of quality, security, and scalability.

As we continue to grow, we look forward to helping more businesses transform their ideas into powerful digital solutions.`,
    date: "2026-07-04",
    category: "Insights",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
  },
];
