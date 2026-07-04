import CTAButton from "./CTAButton";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-28 pb-12 sm:pb-16 lg:pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-950 leading-tight tracking-tight">
            Custom software. Cloud systems.
            <br />
            <span className="text-blue-700">Built around how your business works.</span>
          </h1>

          <p className="mt-6 sm:mt-8 text-base sm:text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Ozstack helps Australian businesses eliminate manual work, reduce errors, and deliver software faster through a modern, automation-first approach. Our streamlined development process is built to save you time and{" "}
            <strong className="text-blue-900 font-semibold">
              cost without compromising on quality.
            </strong>
          </p>

          <div className="mt-8 sm:mt-10">
            <CTAButton href="/contact" size="lg">
              Tell Us About Your Problem
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
