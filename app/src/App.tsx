import { Navbar } from "./sections/navbar";
import { HeroSection } from "./sections/hero-section";
import { FeaturesSection } from "./sections/features-section";
import { FoodServiceSection } from "./sections/food-service-section";
import { RoomsSection } from "./sections/rooms-section";
import { LocationSection } from "./sections/location-section";
import { StatsSection } from "./sections/stats-section";
import { CTASection } from "./sections/cta-section";
import { Footer } from "./sections/footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main className="overflow-x-hidden">
        <HeroSection />
        <FeaturesSection />
        <FoodServiceSection />
        <RoomsSection />
        <LocationSection />
        <StatsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
