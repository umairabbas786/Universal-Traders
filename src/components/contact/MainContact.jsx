import Hero from "./Hero";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import OfficeMapCard from "./cards/OfficeMapCard";
import QuickResponseCard from "./QuickResponseCard";
import EmergencyBanner from "./EmergencyBanner";

export default function MainContact() {
  return (
    <div className="min-h-screen">
      <Hero />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <ContactInfo />
          <div className="grid lg:grid-cols-2 gap-12">
            <ContactForm />
            <div className="space-y-8">
              <OfficeMapCard />
              <QuickResponseCard />
            </div>
          </div>
        </div>
      </section>
      <EmergencyBanner />
    </div>
  );
}
