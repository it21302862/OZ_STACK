interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-950 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-slate-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
