import ClientCategoryCard from ".//ClientCategoryCard";
import ClientPortfolioGrid from ".//ClientPortfolioGrid";
import Testimonials from ".//Testimonials";
import ClientsCTA from ".//ClientsCTA";
import { clientCategories } from "../data/clients/clientCategories";
import { testimonials } from "../data/clients/testimonials";
import { allClients } from "../data/clients/allClients";

export default function MainClients() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Valued Clients</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Trusted by leading organizations across Pakistan for over two
            decades
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Serving Diverse Industries
            </h2>
            <p className="text-xl text-gray-600">
              From government institutions to private enterprises, we deliver
              excellence across all sectors
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {clientCategories.map((cat, i) => (
              <ClientCategoryCard key={i} category={cat} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Client Portfolio
            </h2>
            <p className="text-xl text-gray-600">
              Organizations that trust Universal Traders for their pipeline
              needs
            </p>
          </div>
          <ClientPortfolioGrid clients={allClients} />
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Hear from organizations who have experienced our commitment to
              excellence
            </p>
          </div>
          <Testimonials testimonials={testimonials} />
        </div>
      </section>

      <ClientsCTA />
    </div>
  );
}
