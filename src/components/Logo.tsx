import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center group ${className}`}
      aria-label={`${siteConfig.name} home`}
    >
      <Image
        src="/images/ozstack-logo.jpeg"
        alt={siteConfig.name}
        width={320}
        height={96}
        className="w-25 sm:w-35 lg:w-45 h-auto object-contain"
        priority
      />
    </Link>
  );
}
