import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function EmergencyBanner() {
  return (
    <section className="py-16 bg-red-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-red-900 mb-4">
          Emergency Pipeline Services
        </h2>
        <p className="text-xl text-red-700 mb-6">
          24/7 emergency support for critical pipeline issues
        </p>
        <Button className="bg-red-600 hover:bg-red-700 text-white">
          <Phone className="mr-2 h-5 w-5" />
          Emergency Hotline: 0300-9750265
        </Button>
      </div>
    </section>
  );
}
