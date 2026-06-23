import type { Metadata } from "next";
import { MapPin, Clock, Briefcase } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import CTASection from "@/components/CTASection";
import { jobListings } from "@/data/careers";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the OZSTACK team. Explore open positions in engineering, design, cloud, and project management.",
};

const perks = [
  "Competitive salary & benefits",
  "Remote-friendly culture",
  "Learning & certification budget",
  "Flexible working hours",
  "Modern tech stack",
  "Team events & retreats",
];

export default function CareersPage() {
  return (
    <>
      <PageLayout
        title="Join Our Team"
        subtitle="We're always looking for talented people who care about building great software. Check out our open roles below."
      >
        <div className="mb-12 sm:mb-16">
          <h2 className="text-xl font-bold text-blue-950 mb-4">Why OZSTACK?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {perks.map((perk) => (
              <div
                key={perk}
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-blue-50 text-sm text-blue-800"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                {perk}
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-xl font-bold text-blue-950 mb-6">Open Positions</h2>
        <div className="space-y-4">
          {jobListings.map((job) => (
            <div
              key={job.id}
              className="p-6 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-md hover:shadow-blue-50 transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div>
                <h3 className="text-lg font-bold text-blue-950">{job.title}</h3>
                <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4" />
                    {job.department}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {job.type}
                  </span>
                </div>
              </div>
              <button
                type="button"
                className="shrink-0 px-6 py-2.5 rounded-full border border-blue-900 text-blue-900 text-sm font-medium hover:bg-blue-900 hover:text-white transition-colors"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </PageLayout>
      <CTASection />
    </>
  );
}
