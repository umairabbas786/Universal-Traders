import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function ClientCategoryCard({ category }) {
  const Icon = category.icon;
  return (
    <Card className="p-8 hover:shadow-lg transition-shadow">
      <CardContent>
        <div className="flex items-center mb-6">
          <Icon className="h-12 w-12 text-blue-600 mr-4" />
          <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
        </div>
        <p className="text-gray-600 mb-6">{category.description}</p>
        <div className="grid grid-cols-2 gap-3">
          {category.clients.map((client, i) => (
            <div
              key={i}
              className="flex items-center p-3 bg-blue-50 rounded-lg"
            >
              <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
              <span className="font-medium text-gray-700">{client}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
