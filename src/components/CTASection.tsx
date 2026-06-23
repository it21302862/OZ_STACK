import CTAButton from "./CTAButton";

export default function CTASection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-blue-600 to-blue-800 px-6 sm:px-10 lg:px-16 py-12 sm:py-16 lg:py-20 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-white" />
          </div>

          <div className="relative">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Ready to build something great?
            </h2>
            <p className="mt-4 text-blue-100 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Tell us about your challenge and we&apos;ll show you how OZSTACK can
              help you move faster with the right technology.
            </p>
            <div className="mt-8">
              <CTAButton
                href="/contact"
                variant="filled"
                size="lg"
                className="!bg-white !text-blue-700 !border-white hover:!bg-blue-50 hover:!border-blue-50"
              >
                Get in Touch
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
