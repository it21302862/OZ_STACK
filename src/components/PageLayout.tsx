import PageHero from "@/components/PageHero";

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function PageLayout({ title, subtitle, children }: PageLayoutProps) {
  return (
    <>
      <PageHero title={title} subtitle={subtitle} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {children}
      </div>
    </>
  );
}
