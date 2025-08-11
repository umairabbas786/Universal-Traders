import { LOCATIONS } from "@/components/data/contact/constants";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

export default function LocationsCard() {
  return (
    <Card className="text-center p-6">
      <CardContent>
        <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-4">Locations</h3>
        <div className="space-y-2 text-gray-600">
          {LOCATIONS.map((l, i) => (
            <p key={i}>
              {l.label}: {l.value}
            </p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
