import { Users, Wind, Tv, Wifi, Droplets, Sun, Sofa, Phone, MessageCircle } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal";

const rooms = [
  {
    image: "/images/room-family.jpg",
    title: "Family Suite",
    available: true,
    roomCount: 3,
    guests: 4,
    description: "Spacious suites with a cozy living area—ideal for families and longer stays.",
    amenities: [
      { icon: Wind, label: "AC" },
      { icon: Tv, label: "TV" },
      { icon: Sofa, label: "Sofa" },
      { icon: Wifi, label: "Free Wi‑Fi" },
      { icon: Sun, label: "Balcony" },
      { icon: Droplets, label: "Hot Water" },
    ],
  },
  {
    image: "/images/room-deluxe.jpg",
    title: "Deluxe Double Bed",
    available: true,
    roomCount: 12,
    guests: 2,
    description: "Comfortable rooms with premium bedding and essentials for business or leisure.",
    amenities: [
      { icon: Wind, label: "AC" },
      { icon: Tv, label: "TV" },
      { icon: Wifi, label: "Free Wi‑Fi" },
      { icon: Droplets, label: "Hot Water" },
    ],
  },
  {
    image: "/images/room-standard.jpg",
    title: "Standard Double Bed",
    available: true,
    roomCount: 4,
    guests: 2,
    description: "Neat, budget-friendly rooms with all the core comforts.",
    amenities: [
      { icon: Wind, label: "AC" },
      { icon: Tv, label: "TV" },
      { icon: Wifi, label: "Free Wi‑Fi" },
      { icon: Droplets, label: "Hot Water" },
    ],
  },
];

export function RoomsSection() {
  return (
    <section id="rooms" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Rooms
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our variety of comfortable and well-equipped rooms designed for
              your perfect stay.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <StaggerItem key={room.title}>
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group">
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {room.available && (
                    <span className="absolute top-3 left-3 px-3 py-1 bg-navy text-white text-xs font-medium rounded">
                      Available
                    </span>
                  )}
                  <span className="absolute top-3 right-3 px-3 py-1 bg-white text-gray-800 text-xs font-medium rounded shadow-sm">
                    {room.roomCount} rooms
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {room.title}
                  </h3>
                  <div className="flex items-center gap-1 text-sm text-gray-500 mb-3">
                    <Users className="w-4 h-4" />
                    <span>Up to {room.guests} guests</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {room.description}
                  </p>

                  {/* Amenities */}
                  <div className="flex flex-wrap gap-3 mb-5">
                    {room.amenities.map((amenity) => (
                      <div
                        key={amenity.label}
                        className="flex items-center gap-1 text-xs text-gray-500"
                      >
                        <amenity.icon className="w-3.5 h-3.5" />
                        <span>{amenity.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <a
                      href="tel:+918801046444"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold rounded-md transition-all hover:-translate-y-0.5"
                    >
                      <Phone className="w-4 h-4" />
                      Call Now
                    </a>
                    <a
                      href="https://wa.me/918801046444"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-green-brand text-green-brand hover:bg-green-50 text-sm font-semibold rounded-md transition-all hover:-translate-y-0.5"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-10">
            <a
              href="#rooms"
              className="inline-flex items-center gap-2 px-6 py-2.5 border border-amber-500 text-amber-500 hover:bg-amber-50 text-sm font-semibold rounded-md transition-all hover:-translate-y-0.5"
            >
              See All Room Details
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
