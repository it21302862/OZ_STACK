import type { Metadata } from "next";
import {
  Bot,
  Cloud,
  Code,
  Lightbulb,
  Smartphone,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import PageLayout from "@/components/PageLayout";
import CTASection from "@/components/CTASection";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore OZSTACK's IT services — custom software, cloud infrastructure, mobile apps, AI automation, and more.",
};

const iconMap: Record<string, LucideIcon> = {
  code: Code,
  cloud: Cloud,
  smartphone: Smartphone,
  bot: Bot,
  workflow: Workflow,
  lightbulb: Lightbulb,
};

export default function ServicesPage() {
  return (
    <>
      <PageLayout
        title="Our Services"
        subtitle="Comprehensive IT solutions from strategy to deployment tailored to your industry and scale."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? Code;
            return (
              <div
                key={service.id}
                id={service.id}
                className="p-8 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300 scroll-mt-24"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>
                <h2 className="text-xl font-bold text-blue-950">{service.title}</h2>
                <p className="mt-3 text-slate-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </PageLayout>
      <CTASection />
    </>
  );
}
