import EmailCard from "./cards/EmailCard";
import HoursCard from "./cards/HoursCard";
import LocationsCard from "./cards/LocationsCard";
import PhoneCard from "./PhoneCard";

export default function ContactInfo() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
      <PhoneCard />
      <EmailCard />
      <LocationsCard />
      <HoursCard />
    </div>
  );
}
