import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

const TEAM = [
  {
    name: "Muhammad Usman Ansar",
    role: "General Manager",
    desc: "Leading Universal Traders with extensive experience in pipeline solutions and client relationship management.",
  },
  {
    name: "Abdul Aziz",
    role: "Order Supplier",
    desc: "Managing procurement and supply chain operations to ensure timely delivery of quality products to our valued clients.",
  },
];

export default function LeadershipTeam() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Leadership Team
          </h2>
          <p className="text-xl text-gray-600">
            Experienced professionals leading our commitment to excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {TEAM.map((m, i) => (
            <Card key={i} className="text-center p-8">
              <CardContent>
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-16 w-16 text-gray-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">{m.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{m.role}</p>
                <p className="text-gray-600">{m.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
