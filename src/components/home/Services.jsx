import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Wrench, ArrowRight } from "lucide-react";

const SERVICES = [
  {
    icon: Wrench,
    title: "Fire & Water Supply",
    description:
      "Complete fire safety and water supply systems with certified components and professional installation.",
    color: "from-red-500 to-orange-500",
    bgColor: "bg-red-50",
    iconColor: "text-red-600",
  },
  {
    icon: Award,
    title: "Gas Pipeline Solutions",
    description:
      "Safe and reliable gas pipeline systems using international standard materials and fittings.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Users,
    title: "Exclusive Distribution",
    description:
      "Authorized distributor of top international pipeline brands including KITZ and other premium manufacturers.",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-transparent to-orange-50/30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <Award className="w-4 h-4 mr-2" />
            Our Expertise
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Pipeline
            <span className="bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
              {" "}
              Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From residential installations to large-scale industrial projects,
            we deliver excellence across all sectors with cutting-edge
            technology and unmatched expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <CardContent className="p-8 relative">
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 ${service.bgColor} rounded-full -mr-16 -mt-16 opacity-20 group-hover:scale-110 transition-transform duration-500`}
                  ></div>
                  <div
                    className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className={`h-8 w-8 ${service.iconColor}`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="flex items-center text-blue-600 font-medium group-hover:text-orange-600 transition-colors">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
