import { Users, Award, CheckCircle, Phone } from "lucide-react";

const CLIENTS = [
  "KRL",
  "NUST",
  "PAEC",
  "PMO",
  "CDA",
  "OGDCL",
  "HMC",
  "Islamabad Club",
  "Bestway Cement",
  "Pepsi",
  "MIA",
  "Shaigan Pharma",
];

const STATS = [
  { number: "20+", label: "Years of Excellence", icon: Award },
  { number: "500+", label: "Projects Completed", icon: CheckCircle },
  { number: "50+", label: "Happy Clients", icon: Users },
  { number: "24/7", label: "Support Available", icon: Phone },
];

export default function TrustedClients() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-4 border border-white/20">
            <Users className="w-4 h-4 mr-2" />
            Trusted Partners
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Trusted by Leading
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              {" "}
              Organizations
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Serving government institutions, corporations, and industrial
            clients across Pakistan with excellence
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {CLIENTS.map((client, index) => (
            <div
              key={index}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/10">
                <div className="h-16 flex items-center justify-center mb-3">
                  <span className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                    {client}
                  </span>
                </div>
                <div className="w-full h-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-4 gap-8 text-center">
          {STATS.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <IconComponent className="w-12 h-12 text-orange-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <div className="text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-blue-200">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
