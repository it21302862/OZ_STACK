import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import CTASection from "@/components/CTASection";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Discover OZSTACK's software products — workflow automation, data backup, monitoring, and security solutions.",
};

const statusStyles: Record<string, string> = {
  Live: "bg-green-50 text-green-700 border-green-200",
  Beta: "bg-amber-50 text-amber-700 border-amber-200",
  "Coming Soon": "bg-slate-50 text-slate-500 border-slate-200",
};

export default function ProductsPage() {
  return (
    <>
      <PageLayout
        title="Our Products"
        subtitle="In-house tools and platforms we've built to solve common business challenges at scale."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="p-8 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {product.title.charAt(0)}
                  </span>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium border ${statusStyles[product.status]}`}
                >
                  {product.status}
                </span>
              </div>
              <h2 className="text-xl font-bold text-blue-950">{product.title}</h2>
              <p className="mt-3 text-slate-500 leading-relaxed text-sm">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </PageLayout>
      <CTASection />
    </>
  );
}
