import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8">
            <CardContent>
              <div className="flex items-center mb-6">
                <Eye className="h-12 w-12 text-blue-600 mr-4" />
                <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To provide coordinated and complete pipeline solutions for
                professionals and institutional clients, establishing ourselves
                as the premier choice for quality pipeline products and services
                in Pakistan.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8">
            <CardContent>
              <div className="flex items-center mb-6">
                <Target className="h-12 w-12 text-blue-600 mr-4" />
                <h3 className="text-3xl font-bold text-gray-900">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To deliver customized pipeline solutions for residential,
                commercial, and industrial clients, focusing on quality,
                reasonable pricing, and client satisfaction through
                collaboration with global and local brands.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
