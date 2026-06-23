import type { Metadata } from "next";
import Image from "next/image";
import PageLayout from "@/components/PageLayout";
import { newsArticles } from "@/data/news";

export const metadata: Metadata = {
  title: "News",
  description: "Latest news, project launches, and insights from the OZSTACK team.",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function NewsPage() {
  return (
    <PageLayout
      title="News & Insights"
      subtitle="Stay up to date with company announcements, project launches, and industry perspectives."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {newsArticles.map((article, index) => (
          <article
            key={article.id}
            className={`group rounded-2xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300 ${
              index === 0 ? "md:col-span-2 md:grid md:grid-cols-2" : ""
            }`}
          >
            <div
              className={`relative bg-slate-100 ${
                index === 0 ? "aspect-[16/10] md:aspect-auto md:min-h-[260px]" : "aspect-[16/10]"
              }`}
            >
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes={
                  index === 0
                    ? "(max-width: 768px) 100vw, 50vw"
                    : "(max-width: 768px) 100vw, 50vw"
                }
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                <span className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 font-medium">
                  {article.category}
                </span>
                <span>{formatDate(article.date)}</span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-blue-950 group-hover:text-blue-700 transition-colors">
                {article.title}
              </h2>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                {article.excerpt}
              </p>
            </div>
          </article>
        ))}
      </div>
    </PageLayout>
  );
}
