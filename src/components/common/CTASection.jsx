import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function CTASection({
  title,
  subtitle,
  primaryText,
  secondaryText,
}) {
  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">{subtitle}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            <Phone className="mr-2 h-5 w-5" />
            {primaryText}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-blue-900 bg-transparent"
          >
            {secondaryText}
          </Button>
        </div>
      </div>
    </section>
  );
}
