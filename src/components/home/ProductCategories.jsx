import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ArrowRight } from "lucide-react";

const CATEGORIES = [
  {
    name: "Pipes",
    image: "steel pipes collection",
    description: "MS Seamless, Stainless Steel, Galvanized, Carbon Steel",
    gradient: "from-blue-600 to-blue-800",
  },
  {
    name: "Fittings",
    image: "pipe fittings assortment",
    description: "GI, SS, MS China, Dairy, Welded, Threaded",
    gradient: "from-green-600 to-green-800",
  },
  {
    name: "Valves",
    image: "industrial valves collection",
    description: "Gate, Ball, Globe, Butterfly, Sluice, NRV",
    gradient: "from-purple-600 to-purple-800",
  },
  {
    name: "Flanges",
    image: "steel flanges variety",
    description: "Welded, Threaded, Socket Weld, Blind, Weld Neck",
    gradient: "from-orange-600 to-orange-800",
  },
  {
    name: "Meters & Clamps",
    image: "measuring instruments and clamps",
    description: "Precision meters, clamps, gauges, and tapes",
    gradient: "from-red-600 to-red-800",
  },
  {
    name: "Accessories",
    image: "pipeline accessories",
    description: "Complete range of pipeline accessories and tools",
    gradient: "from-indigo-600 to-indigo-800",
  },
];

export default function ProductCategories() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4 mr-2" />
            Premium Products
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Complete Product
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              {" "}
              Portfolio
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of high-quality pipeline products
            and accessories
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES.map((category, index) => (
            <Link
              key={index}
              href="/products"
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0">
                <div className="relative h-64 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-90`}
                  ></div>
                  <Image
                    src={`/abstract-geometric-shapes.png?height=300&width=400&query=${category.image}`}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {category.name}
                    </h3>
                    <div className="flex items-center text-white/90 group-hover:text-white transition-colors">
                      <span className="text-sm">Explore Range</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 bg-white">
                  <p className="text-gray-600 leading-relaxed">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
