import { Utensils, Truck, ChefHat, DoorOpen, Phone, MessageCircle, Check } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal";

const foodOptions = [
  {
    icon: Truck,
    title: "Food Delivery Apps",
    description: "Order from Zomato, Swiggy, or other popular delivery platforms directly to your room.",
    badges: ["Zomato", "Swiggy", "Uber Eats"],
  },
  {
    icon: ChefHat,
    title: "Hotel Kitchen Service",
    description: "Contact our front desk to order meals from nearby restaurants through the hotel.",
    highlight: { text: "Available 24/7", color: "green" },
  },
  {
    icon: DoorOpen,
    title: "Room Service Delivery",
    description: "All food orders are delivered directly to your room for maximum convenience.",
    highlight: { text: "No extra delivery charges", color: "amber" },
  },
];

export function FoodServiceSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <Utensils className="w-8 h-8 text-amber-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Food & Room Service
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Enjoy delicious meals delivered directly to your room through multiple
              convenient options
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {foodOptions.map((option) => (
            <StaggerItem key={option.title}>
              <div className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-amber-100 flex items-center justify-center">
                  <option.icon className="w-6 h-6 text-amber-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {option.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                  {option.description}
                </p>
                {option.badges && (
                  <div className="flex flex-wrap justify-center gap-2">
                    {option.badges.map((badge) => (
                      <span
                        key={badge}
                        className="px-3 py-1 text-xs font-medium text-gray-600 border border-gray-200 rounded-full"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                )}
                {option.highlight && (
                  <div
                    className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium mx-auto ${
                      option.highlight.color === "green"
                        ? "bg-green-light text-green-brand"
                        : "bg-amber-100 text-amber-600"
                    }`}
                  >
                    <Check className="w-3 h-3" />
                    {option.highlight.text}
                  </div>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.3}>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-xl">🍽️</span>
              <h4 className="text-xl font-semibold text-gray-900">
                All Meals Served in Your Room
              </h4>
            </div>
            <p className="text-gray-600 max-w-3xl mx-auto mb-6">
              Whether you order through delivery apps or contact our front desk for
              assistance, all food will be delivered directly to your room for maximum
              comfort and convenience. Our staff will coordinate with delivery partners
              to ensure smooth service.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+918801046444"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold rounded-md transition-all hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4" />
                Call for Food Assistance
              </a>
              <a
                href="https://wa.me/918801046444"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-amber-500 text-amber-500 hover:bg-amber-50 text-sm font-semibold rounded-md transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp for Help
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
