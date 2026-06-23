"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import CTAButton from "./CTAButton";
import { navLinks } from "@/data/site";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Logo />

          <nav
            className="hidden lg:flex items-center gap-1 xl:gap-2"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 xl:px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-700 rounded-full hover:bg-blue-50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <CTAButton href="/contact" size="sm">
              Contact Us
            </CTAButton>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 rounded-lg text-blue-900 hover:bg-blue-50 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white">
          <nav className="px-4 py-4 space-y-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-blue-700 hover:bg-blue-50 rounded-xl transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 px-2">
              <CTAButton href="/contact" className="w-full">
                Contact Us
              </CTAButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
