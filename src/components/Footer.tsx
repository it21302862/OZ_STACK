import Link from "next/link";
import Logo from "./Logo";
import { navLinks, siteConfig } from "@/data/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 text-blue-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo className="[&_span:first-child]:bg-white [&_span:first-child]:text-blue-700 [&_span:last-child]:border-white [&_span:last-child]:text-white" />
            <p className="mt-4 text-sm text-blue-200 leading-relaxed max-w-xs">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-blue-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-blue-200">
              <li>{siteConfig.email}</li>
              <li>{siteConfig.phone}</li>
              <li>{siteConfig.address}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Follow Us</h3>
            <ul className="space-y-2 text-sm">
              {["LinkedIn", "Twitter", "GitHub"].map((social) => (
                <li key={social}>
                  <span className="text-blue-200 hover:text-white transition-colors cursor-pointer">
                    {social}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-blue-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-blue-300">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-blue-300">
            <span className="hover:text-white cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer transition-colors">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
