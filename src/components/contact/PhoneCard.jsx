import { Card, CardContent } from "@/components/ui/card";
import { Phone } from "lucide-react";
import { PHONES } from "../data/contact/constants";

export default function PhoneCard() {
  return (
    <Card className="text-center p-6">
      <CardContent>
        <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-4">Phone Numbers</h3>
        <div className="space-y-2 text-gray-600">
          {PHONES.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
