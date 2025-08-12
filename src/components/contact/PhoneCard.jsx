import { Card, CardContent } from "@/components/ui/card";
import { Phone } from "lucide-react";
import { PHONES } from "../data/contact/constants";

export default function PhoneCard() {
  return (
    <Card className="w-full max-w-lg mx-auto text-center">
      <CardContent className="p-4 sm:p-6">
        <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-4">Phone Numbers</h3>
        <div className="space-y-2 text-gray-600 break-all sm:break-words">
          {PHONES.map((p, i) => (
            <p key={i} className="text-sm sm:text-base">{p}</p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}