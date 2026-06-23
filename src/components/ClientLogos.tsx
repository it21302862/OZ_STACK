import { clientLogos } from "@/data/site";

export default function ClientLogos() {
  return (
    <section className="py-12 sm:py-16 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-slate-400 mb-8 sm:mb-10">
          Trusted by businesses to remove operational failure
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center">
          {clientLogos.map((client) => (
            <div
              key={client.name}
              className="flex flex-col items-center justify-center gap-2 opacity-60 hover:opacity-100 transition-opacity"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-slate-100 flex items-center justify-center">
                <span className="text-lg sm:text-xl font-bold text-slate-400 tracking-tight">
                  {client.initials}
                </span>
              </div>
              <span className="text-xs sm:text-sm font-medium text-slate-400">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
