import { Card, CardContent } from "@/components/ui/card";

export default function Testimonials({ testimonials }) {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {testimonials.map((t, i) => (
        <Card key={i} className="p-6">
          <CardContent>
            <div className="mb-4">
              <div className="flex text-yellow-400 mb-2">
                {[...Array(5)].map((_, idx) => (
                  <span key={idx}>★</span>
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">"{t.testimonial}"</p>
            </div>
            <div className="border-t pt-4">
              <p className="font-semibold text-gray-900">{t.company}</p>
              <p className="text-sm text-gray-600">{t.person}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
