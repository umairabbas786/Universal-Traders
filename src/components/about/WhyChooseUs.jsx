import { Award, Target, Users } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Why Choose Universal Traders?
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            Two decades of experience, quality products, and unwavering
            commitment to client satisfaction
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <Award className="h-16 w-16 mx-auto mb-4 text-orange-400" />
            <h3 className="text-2xl font-semibold mb-4">Quality Assurance</h3>
            <p className="text-blue-100">
              All products meet international standards and undergo rigorous
              quality checks
            </p>
          </div>

          <div className="text-center">
            <Users className="h-16 w-16 mx-auto mb-4 text-orange-400" />
            <h3 className="text-2xl font-semibold mb-4">Expert Team</h3>
            <p className="text-blue-100">
              Experienced professionals providing technical support and
              consultation
            </p>
          </div>

          <div className="text-center">
            <Target className="h-16 w-16 mx-auto mb-4 text-orange-400" />
            <h3 className="text-2xl font-semibold mb-4">Competitive Pricing</h3>
            <p className="text-blue-100">
              Best value for money with transparent pricing and no hidden costs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
