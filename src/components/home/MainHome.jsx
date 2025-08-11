import Hero from "./Hero";
import Services from "./Services";
import ProductCategories from "./ProductCategories";
import TrustedClients from "./TrustedClients";
import ContactCTA from "./ContactCTA";

export default function MainHome() {
  return (
    <div className="min-h-screen overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
        </div>
      </div>

      <Hero />
      <Services />
      <ProductCategories />
      <TrustedClients />
      <ContactCTA />
    </div>
  );
}
