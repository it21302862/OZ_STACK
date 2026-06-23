import Link from "next/link";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "outline" | "filled";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function CTAButton({
  href,
  children,
  variant = "outline",
  size = "md",
  className = "",
}: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 group";

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  const variants = {
    outline:
      "border border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white",
    filled:
      "bg-blue-600 text-white border border-blue-600 hover:bg-blue-700 hover:border-blue-700",
  };

  return (
    <Link
      href={href}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
      <span
        aria-hidden="true"
        className="transition-transform duration-200 group-hover:translate-x-0.5"
      >
        ›
      </span>
    </Link>
  );
}
