import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import ProductCategory from "./ProductCategory";
import FeaturedBrands from "./FeaturedBrands";
import { featuredBrands } from "../data/brands";
import { productCategories } from "../data/productCategories";

export default function MainProduct() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Our Products</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive range of pipeline products from trusted
              international and local brands
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {productCategories.map((category, index) => (
              <ProductCategory key={index} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Brands
            </h2>
            <p className="text-xl text-gray-600">
              Exclusive distributor of premium international pipeline brands
            </p>
          </div>
          <FeaturedBrands brands={featuredBrands} />
        </div>
      </section>

      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our experts can help you find the right products for your specific
            requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Phone className="mr-2 h-5 w-5" />
              Call for Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-900 bg-transparent"
            >
              Request Catalog
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
