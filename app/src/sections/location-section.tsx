import { ScrollReveal } from "@/components/scroll-reveal";

export function LocationSection() {
  return (
    <section id="location" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Location
            </h2>
            <p className="text-gray-600 text-lg">Ahmamau, Sultanpur Road, Lucknow, India</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="max-w-4xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-md aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.584879339654!2d81.0156!3d26.8554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2f8b62477b7%3A0xa9f43f7f0c5f49d7!2sSultanpur%20Road%2C%20Lucknow!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kanha Inn Location"
                className="w-full h-full"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
