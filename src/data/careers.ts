export interface JobListing {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
}

export const jobListings: JobListing[] = [
  {
    id: "senior-fullstack",
    title: "Senior Full-Stack Developer",
    department: "Engineering",
    location: "Remote / Hybrid",
    type: "Full-time",
  },
  {
    id: "cloud-architect",
    title: "Cloud Solutions Architect",
    department: "Cloud Services",
    location: "On-site",
    type: "Full-time",
  },
  {
    id: "ui-designer",
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Hybrid",
    type: "Full-time",
  },
  {
    id: "project-manager",
    title: "Technical Project Manager",
    department: "Delivery",
    location: "On-site",
    type: "Full-time",
  },
  {
    id: "intern-software",
    title: "Software Engineering Intern",
    department: "Engineering",
    location: "On-site",
    type: "Internship",
  },
];
