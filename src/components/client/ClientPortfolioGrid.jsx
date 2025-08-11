import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function ClientPortfolioGrid({ clients }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {clients.map((client, i) => (
        <Card
          key={i}
          className="text-center p-6 hover:shadow-md transition-shadow"
        >
          <CardContent>
            <div className="h-20 flex items-center justify-center mb-4">
              <Image
                src={`/abstract-geometric-shapes.png?height=60&width=120&query=${client} logo`}
                alt={`${client} logo`}
                width={120}
                height={60}
                className="max-h-12 w-auto"
              />
            </div>
            <h3 className="font-semibold text-gray-900">{client}</h3>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
