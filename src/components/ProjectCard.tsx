import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article
      className={`group rounded-2xl overflow-hidden border border-slate-100 bg-white hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-300 ${
        featured ? "lg:flex lg:flex-row" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden bg-slate-100 ${
          featured ? "lg:w-1/2 aspect-[16/10] lg:aspect-auto lg:min-h-[280px]" : "aspect-[16/10]"
        }`}
      >
        <Image
          src={project.image}
          alt={`${project.title} project screenshot`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes={featured ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
        />
        <div className="absolute top-3 left-3">
          <span className="inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium text-blue-700">
            {project.category}
          </span>
        </div>
      </div>

      <div className={`p-5 sm:p-6 ${featured ? "lg:w-1/2 lg:flex lg:flex-col lg:justify-center" : ""}`}>
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
          <span>{project.client}</span>
          <span>·</span>
          <span>{project.year}</span>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-blue-950 group-hover:text-blue-700 transition-colors">
          <Link href={`/case-studies#${project.id}`}>{project.title}</Link>
        </h3>

        <p className="mt-2 text-sm text-slate-500 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
