"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { siteConfig } from "@/data/site";
import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <PageLayout
      title="Contact Us"
      subtitle="Have a project in mind or a problem to solve? We'd love to hear from you."
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h2 className="text-lg font-bold text-blue-950">Get in Touch</h2>
            <p className="mt-2 text-sm text-slate-500 leading-relaxed">
              Fill out the form and our team will get back to you within one
              business day.
            </p>
          </div>

          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-sm font-medium text-blue-950">Email</div>
                <div className="text-sm text-slate-500">{siteConfig.email}</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-sm font-medium text-blue-950">Phone</div>
                <div className="text-sm text-slate-500">{siteConfig.phone}</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-sm font-medium text-blue-950">Office</div>
                <div className="text-sm text-slate-500">{siteConfig.address}</div>
              </div>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          {submitted ? (
            <div className="p-8 rounded-2xl bg-blue-50 border border-blue-100 text-center">
              <div className="text-2xl font-bold text-blue-700 mb-2">
                Thank you!
              </div>
              <p className="text-sm text-slate-500">
                We&apos;ve received your message and will be in touch soon.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl border border-slate-100 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-blue-950 mb-1.5"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-blue-950 mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-blue-950 mb-1.5"
                >
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-blue-950 mb-1.5"
                >
                  Tell us about your problem
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow resize-y"
                  placeholder="Describe your project or challenge..."
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </PageLayout>
  );
}
