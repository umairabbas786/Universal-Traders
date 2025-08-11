import Image from "next/image";

export default function CompanyStory() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Universal Traders, operating under the shop name Al Aziz Pipe
                Store, has been a cornerstone in Pakistan&apos;s pipeline
                industry since 2004. What began as a modest venture has evolved
                into one of the country&apos;s most trusted suppliers of fire,
                water supply, and gas pipeline solutions.
              </p>
              <p>
                Our journey started with G.I. pipes and has expanded to include
                a comprehensive range of seamless and PVC pipes, fittings,
                valves, and accessories. This evolution reflects our commitment
                to staying ahead of industry trends and meeting our
                clients&apos; diverse needs.
              </p>
              <p>
                With the establishment of our new warehouse and head office in
                Islamabad, we&apos;ve strengthened our capacity to serve clients
                across Pakistan. Our strategic partnerships with global brands
                like KITZ have positioned us as an exclusive distributor of
                premium international pipeline products.
              </p>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/placeholder-rjabs.png"
              alt="Our Facility"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
