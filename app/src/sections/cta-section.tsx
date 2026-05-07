import { Phone, MessageCircle } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

export function CTASection() {
  return (
    <section className="bg-gradient-to-r from-navy via-slate-900 to-navy py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Experience Kanha Inn?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Call us now to book your stay and enjoy our comfortable accommodations with
            personalized service.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+918801046444"
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-md transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <Phone className="w-5 h-5" />
              Call Now: +91 88010 46444
            </a>
            <a
              href="https://wa.me/918801046444"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-brand hover:bg-green-brand-hover text-white font-semibold rounded-md transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Chat
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
