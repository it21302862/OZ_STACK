export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: "custom-software",
    title: "Custom Software Development",
    description:
      "Tailored applications built from the ground up to match your workflows, scale with your growth, and integrate with existing systems.",
    icon: "code",
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud Infrastructure",
    description:
      "Design, migration, and management of cloud environments on AWS, Azure, and GCP with security and cost optimization built in.",
    icon: "cloud",
  },
  {
    id: "mobile-apps",
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android with seamless backend integration and offline support.",
    icon: "smartphone",
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    description:
      "Intelligent automation, chatbots, and AI agents that eliminate manual work, reduce errors, and accelerate decision-making.",
    icon: "bot",
  },
  {
    id: "devops",
    title: "DevOps & CI/CD",
    description:
      "Streamlined deployment pipelines, infrastructure as code, and monitoring solutions for reliable, fast releases.",
    icon: "workflow",
  },
  {
    id: "consulting",
    title: "IT Consulting",
    description:
      "Strategic technology advisory to help you choose the right stack, plan digital transformation, and optimize IT spend.",
    icon: "lightbulb",
  },
];
