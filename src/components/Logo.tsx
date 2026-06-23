import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 group ${className}`}
      aria-label={`${siteConfig.name} home`}
    >
      <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-blue-600 text-white font-bold text-sm tracking-tight shrink-0">
        OZ
      </span>
      <span className="hidden sm:inline-flex items-center px-3 py-1.5 rounded-full border border-blue-900 text-blue-900 font-semibold text-sm tracking-wide group-hover:bg-blue-50 transition-colors">
        {siteConfig.name}
      </span>
    </Link>
  );
}
