import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function ProductCategory({ category, index }) {
  const isOdd = index % 2 === 1;
  return (
    <div
      className={`grid md:grid-cols-2 gap-12 items-center ${
        isOdd ? "md:grid-flow-col-dense" : ""
      }`}
    >
      <div className={isOdd ? "md:col-start-2" : ""}>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          {category.title}
        </h2>
        <p className="text-xl text-gray-600 mb-6">{category.description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {category.products.map((p, i) => (
            <div
              key={i}
              className="flex items-center p-3 bg-gray-50 rounded-lg"
            >
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
              <span className="text-gray-700 font-medium">{p}</span>
            </div>
          ))}
        </div>
        <Button className="bg-orange-500 hover:bg-orange-600">
          <Phone className="mr-2 h-4 w-4" />
          Get Quote for {category.title}
        </Button>
      </div>
      <div className={isOdd ? "md:col-start-1 md:row-start-1" : ""}>
        <Image
          src={`/abstract-geometric-shapes.png?height=400&width=600&query=${category.image}`}
          alt={category.title}
          width={600}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
