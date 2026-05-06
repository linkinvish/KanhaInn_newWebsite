import { MapPin, Phone, Mail, Clock, Twitter, Facebook, PinIcon } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/scroll-reveal";

export function Footer() {
  return (
    <footer className="bg-navy border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <StaggerItem>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/kanha-inn-logo.jpg"
                  alt="Kanha Inn"
                  className="h-10 w-auto rounded"
                />
                <h3 className="text-xl font-bold text-amber-500">Kanha Inn</h3>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                Experience comfort and hospitality at its finest. Your home away from
                home with modern amenities and personalized service.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <PinIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {["Home", "Rooms & Suites", "About Us", "Blog"].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/70 hover:text-amber-500 text-sm transition-colors"
                    >
                      {link}
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
                    123 Heritage Street, Kanha National Park Area, Madhya Pradesh
                    481768, India
                  </span>
                </li>
                <li className="flex items-center gap-2 text-white/70 text-sm">
                  <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-center gap-2 text-white/70 text-sm">
                  <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>info@kanhainn.com</span>
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
            &copy; 2024 Kanha Inn. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cancellation Policy"].map(
              (link) => (
                <a
                  key={link}
                  href="#"
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
