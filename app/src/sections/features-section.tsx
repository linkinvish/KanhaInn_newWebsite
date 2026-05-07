import { Shield, Car, Waves, Wifi, Clock, MapPin } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal";

const features = [
  {
    icon: Shield,
    title: "24/7 Security & CCTV",
    description: "Peace of mind with round-the-clock surveillance and security.",
  },
  {
    icon: Car,
    title: "Private Parking",
    description: "On-site, secure parking for cars and bikes at no extra cost.",
  },
  {
    icon: Waves,
    title: "In-house Laundry",
    description: "Fresh linens and quick laundry service for your convenience.",
  },
  {
    icon: Wifi,
    title: "Free High-Speed WiFi",
    description: "Stay connected with complimentary internet throughout the property.",
  },
  {
    icon: Clock,
    title: "24/7 Reception",
    description: "Round-the-clock front desk service for all your needs and assistance.",
  },
  {
    icon: MapPin,
    title: "Prime Location",
    description: "Peaceful location near Gomti Nagar & Hazratganj on Sultanpur Road.",
  },
];

export function FeaturesSection() {
  return (
    <section id="amenities" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-balance">
              Why guests love us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide exceptional hospitality with modern amenities to ensure your
              stay is comfortable and memorable.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <div className="group bg-white border border-gray-200 rounded-xl p-8 text-center hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-amber-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-amber-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
