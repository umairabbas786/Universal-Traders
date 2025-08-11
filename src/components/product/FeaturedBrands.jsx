import { Card, CardContent } from "@/components/ui/card";

export default function FeaturedBrands({ brands }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {brands.map((brand, i) => (
        <Card
          key={i}
          className="text-center p-6 hover:shadow-lg transition-shadow"
        >
          <CardContent>
            <div className="h-20 flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-gray-700">{brand}</span>
            </div>
            <p className="text-sm text-gray-600">Authorized Distributor</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
