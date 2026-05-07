import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/scroll-reveal";

export function Footer() {
  return (
    <footer id="contact" className="bg-navy border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <StaggerItem>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/images/kanha-inn-logo.jpg"
                  alt="Kanha Inn"
                  className="h-10 w-auto rounded"
                />
                <h3 className="text-xl font-bold text-amber-500">Kanha Inn</h3>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                Experience comfort and hospitality at its finest. Your home away from
                home with modern amenities and personalized service.
              </p>
              <div className="flex items-center gap-3 text-xs text-white/60">
                <span className="px-2 py-1 rounded-full bg-white/10">Family Friendly</span>
                <span className="px-2 py-1 rounded-full bg-white/10">24/7 Service</span>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { label: "Home", href: "#home" },
                  { label: "Amenities", href: "#amenities" },
                  { label: "Rooms", href: "#rooms" },
                  { label: "Location", href: "#location" },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-amber-500 text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-white/70 text-sm">
                  <MapPin className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                  <span>
                    Ahmamau, Sultanpur Road, Lucknow, Uttar Pradesh, India
                  </span>
                </li>
                <li className="flex items-center gap-2 text-white/70 text-sm">
                  <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                  <a href="tel:+918801046444" className="hover:text-amber-400 transition-colors">+91 88010 46444</a>
                </li>
                <li className="flex items-center gap-2 text-white/70 text-sm">
                  <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                  <a href="mailto:lko.kanhainn@gmail.com" className="hover:text-amber-400 transition-colors">lko.kanhainn@gmail.com</a>
                </li>
              </ul>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div>
              <h4 className="text-white font-semibold mb-4">Business Hours</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-white/70 text-sm">
                  <Clock className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-white/90">Reception</p>
                    <p>24/7 Available</p>
                  </div>
                </li>
                <li className="text-white/70 text-sm">
                  <span className="text-amber-500 font-medium">Check-in:</span>{" "}
                  2:00 PM onwards
                </li>
                <li className="text-white/70 text-sm">
                  <span className="text-amber-500 font-medium">Check-out:</span>{" "}
                  12:00 PM
                </li>
              </ul>
            </div>
          </StaggerItem>
        </StaggerContainer>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            &copy; 2026 Kanha Inn. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cancellation Policy"].map(
              (link) => (
                <a
                  key={link}
                  href="#contact"
                  className="text-white/50 hover:text-amber-500 text-sm transition-colors"
                >
                  {link}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
