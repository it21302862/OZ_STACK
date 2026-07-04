import type { Metadata } from "next";
import Image from "next/image";
import PageLayout from "@/components/PageLayout";
import TeamSection from "@/components/TeamSection";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Company",
  description: `Learn about ${siteConfig.name} — our mission, values, and the team behind our IT solutions.`,
};

const values = [
  {
    title: "Client-First",
    description:
      "Every decision starts with your business goals. We build solutions that solve real problems, not just impressive demos.",
  },
  {
    title: "Quality by Default",
    description:
      "Clean code, thorough testing, and maintainable architecture are non-negotiable in everything we ship.",
  },
  {
    title: "Transparent Delivery",
    description:
      "Regular updates, clear timelines, and honest communication — no surprises, no hidden scope creep.",
  },
  {
    title: "Continuous Growth",
    description:
      "We invest in learning and modern tools so our team always brings the best practices to your project.",
  },
];

export default function CompanyPage() {
  return (
    <PageLayout
      title="About OZSTACK"
      subtitle="We're a team of engineers, designers, and strategists helping businesses build software that actually works."
    >
      <section>
        <h2 className="text-2xl font-bold text-blue-950 mb-6 sm:mb-8">Our Story</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
              alt="OZSTACK office — placeholder image"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="space-y-4 text-slate-500 leading-relaxed">
            <p>
              Ozstack was born from a simple idea: businesses deserve software that
              works for them, not against them. We started Ozstack to bring modern,
              automation-first development to Australian businesses tired of slow
              timelines, manual processes, and outdated software practices.
            </p>
            <p>
              Today, we combine deep technical expertise with a hands-on,
              business-minded approach helping you move from idea to launch with less
              friction and faster results. Whether you need a custom platform, cloud
              migration, or an AI-powered automation layer, we partner with you from
              discovery through launch and beyond.
            </p>
          </div>
        </div>
      </section>

      <TeamSection />

      <div className="mt-16 sm:mt-20">
        <h2 className="text-2xl font-bold text-blue-950 mb-8">Our Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {values.map((value) => (
            <div
              key={value.title}
              className="p-6 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors"
            >
              <h3 className="text-lg font-bold text-blue-950">{value.title}</h3>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
