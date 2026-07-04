export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "alex-morgan",
    name: "Alex Morgan",
    role: "CEO & Co-Founder",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=600&fit=crop&crop=face",
  },
  {
    id: "sarah-chen",
    name: "Sarah Chen",
    role: "Lead Software Engineer",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=600&fit=crop&crop=face",
  },
  {
    id: "james-wright",
    name: "James Wright",
    role: "Cloud Architect",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop&crop=face",
  },
  {
    id: "priya-sharma",
    name: "Priya Sharma",
    role: "UI/UX Designer",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=600&fit=crop&crop=face",
  },
  {
    id: "marcus-johnson",
    name: "Marcus Johnson",
    role: "DevOps Engineer",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=600&fit=crop&crop=face",
  },
  {
    id: "elena-rodriguez",
    name: "Elena Rodriguez",
    role: "Project Manager",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop&crop=face",
  },
];
