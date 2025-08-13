import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function QuickResponseCard() {
  return (
    <Card className="bg-blue-50">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-blue-900 mb-4">
          Quick Response Guarantee
        </h3>
        <p className="text-blue-800 mb-4">
          We understand that time is critical in your projects. Our team is
          committed to responding to all inquiries within 2 hours during
          business hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button className="bg-orange-500 hover:bg-orange-600">
            <Phone className="mr-2 h-4 w-4" />
            Call Now: 0300-9750265
          </Button>
          <a href="https://wa.me/923175247072" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
            >
              WhatsApp Us
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
 