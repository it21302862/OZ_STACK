import {
  Bot,
  Cloud,
  Code,
  Lightbulb,
  Smartphone,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { services } from "@/data/services";

const iconMap: Record<string, LucideIcon> = {
  code: Code,
  cloud: Cloud,
  smartphone: Smartphone,
  bot: Bot,
  workflow: Workflow,
  lightbulb: Lightbulb,
};

export default function ServicesPreview() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What We Do"
          subtitle="End-to-end IT services to design, build, and scale your digital products."
        />

        <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? Code;
            return (
              <div
                key={service.id}
                className="p-6 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-md hover:shadow-blue-50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-blue-950">{service.title}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
