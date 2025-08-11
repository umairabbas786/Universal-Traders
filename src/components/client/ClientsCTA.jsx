export default function ClientsCTA() {
  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Join Our Growing Client Family
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Experience the quality and service that has made us the preferred
          choice for leading organizations
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Become a Client
          </button>
          <button className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
            View Case Studies
          </button>
        </div>
      </div>
    </section>
  );
}
