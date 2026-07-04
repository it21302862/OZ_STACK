import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";
import CTAButton from "./CTAButton";
import { featuredProjects } from "@/data/projects";

export default function FeaturedProjects() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of solutions we've delivered for clients across industries."
        />

        <div className="mt-10 sm:mt-14 space-y-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              featured={index === 0}
            />
          ))}
        </div>

        <div className="mt-10 sm:mt-14 text-center">
          <CTAButton href="/case-studies">View All Case Studies</CTAButton>
        </div>
      </div>
    </section>
  );
}
