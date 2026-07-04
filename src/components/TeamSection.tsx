import Image from "next/image";
import CTAButton from "./CTAButton";
import { teamMembers } from "@/data/team";

export default function TeamSection() {
  return (
    <section className="mt-16 sm:mt-24 -mx-4 sm:-mx-6 lg:-mx-8">
      <div className="px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-950 tracking-tight">
            The Team.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-md lg:text-right leading-relaxed">
            The team designing software that gives businesses more clarity,
            control, and freedom.
          </p>
        </div>
      </div>

      <div className="relative pb-16 sm:pb-20">
        <div className="overflow-x-auto scrollbar-hide snap-x snap-mandatory">
          <div className="flex gap-4 sm:gap-5 px-4 sm:px-6 lg:px-8 min-w-max pb-4">
            {teamMembers.map((member) => (
              <article
                key={member.id}
                className="snap-start shrink-0 w-[200px] sm:w-[240px] lg:w-[260px] group"
              >
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-slate-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                    sizes="260px"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 pt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white font-semibold text-sm">{member.name}</p>
                    <p className="text-white/80 text-xs mt-0.5">{member.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-full max-w-md px-4">
          <CTAButton href="/contact" className="w-full sm:w-auto sm:min-w-[320px] !bg-blue-100 !border-blue-100 !text-blue-900 hover:!bg-blue-200 hover:!border-blue-200">
            Tell Us About Your Problem
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
