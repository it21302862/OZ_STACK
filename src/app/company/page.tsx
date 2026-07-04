import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Company",
  description: `Learn about ${siteConfig.name} — our mission, values, and the team behind our IT solutions.`,
};

// const stats = [
//   { value: "50+", label: "Projects Delivered" },
//   { value: "30+", label: "Team Members" },
//   { value: "8+", label: "Years of Experience" },
// ];

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
      {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 sm:mb-20">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="text-center p-6 rounded-2xl bg-blue-50 border border-blue-100"
          >
            <div className="text-2xl sm:text-3xl font-bold text-blue-700">
              {stat.value}
            </div>
            <div className="mt-1 text-sm text-slate-500">{stat.label}</div>
          </div>
        ))}
      </div> */}

      <div className="max-w-3xl">
        <h2 className="text-2xl font-bold text-blue-950">Our Story</h2>
        <div className="mt-4 space-y-4 text-slate-500 leading-relaxed">
          <p>
            Ozstack was born from a simple idea: businesses deserve software that works for them, not against them. 
            We started Ozstack to bring modern, automation-first development to Australian businesses tired of slow timelines, 
            manual processes, 
            and outdated software practices.
          </p>
          <p>
            Today, we combine deep technical expertise with a hands-on, business-minded approach 
            helping you move from idea to launch with less friction and faster results.
            Whether you need a custom platform, cloud
            migration, or an AI-powered automation layer, we partner with you from
            discovery through launch and beyond.
          </p>
        </div>
      </div>

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
