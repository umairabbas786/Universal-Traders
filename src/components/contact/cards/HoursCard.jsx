import { HOURS } from "@/components/data/contact/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";

export default function HoursCard() {
  return (
    <Card className="text-center p-6">
      <CardContent>
        <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
        <div className="space-y-2 text-gray-600">
          {HOURS.map((h, i) => (
            <p key={i}>{h}</p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
