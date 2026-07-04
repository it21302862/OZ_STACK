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
        subtitle="Our case studies showcase how we partner with businesses to solve real-world challenges through innovative software solutions. From streamlining operations and automating workflows to building scalable digital platforms, each project reflects our commitment to delivering measurable results and lasting value. The projects displayed here are currently presented as placeholders and will be updated with our growing portfolio of client success stories as they become available."
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
