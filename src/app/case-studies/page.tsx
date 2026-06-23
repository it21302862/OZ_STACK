import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import PageLayout from "@/components/PageLayout";
import CTASection from "@/components/CTASection";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Explore OZSTACK's portfolio of delivered projects across healthcare, logistics, fintech, and more.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageLayout
        title="Case Studies"
        subtitle="Real solutions we've built for clients. All project data below is placeholder — swap in your actual portfolio when ready."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} id={project.id} className="scroll-mt-24">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </PageLayout>
      <CTASection />
    </>
  );
}
