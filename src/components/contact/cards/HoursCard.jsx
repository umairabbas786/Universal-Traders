import { HOURS } from "@/components/data/contact/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";

export default function HoursCard() {
  return (
    <Card className="w-full max-w-lg mx-auto text-center">
      <CardContent className="p-4 sm:p-6">
        <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
        <div className="space-y-2 text-gray-600 break-all sm:break-words">
          {HOURS.map((h, i) => (
            <p key={i} className="text-sm sm:text-base">
              {h}
            </p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
