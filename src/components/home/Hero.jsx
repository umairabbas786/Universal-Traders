import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, CheckCircle, TrendingUp, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-orange-400/10 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-blue-300/10 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-20 right-40 w-24 h-24 bg-orange-300/10 rounded-full animate-float"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-white space-y-8 animate-slide-in-left">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Star className="w-4 h-4 text-yellow-400 mr-2" />
              <span className="text-sm font-medium">Trusted Since 2004</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Universal
                </span>
                <br />
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  Traders
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-blue-200 font-light">
                Al Aziz Pipe Store
              </h2>
            </div>

            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-2xl">
              Pakistan&apos;s premier pipeline solutions provider, delivering
              excellence in
              <span className="text-orange-400 font-semibold">
                {" "}
                fire safety
              </span>
              ,
              <span className="text-orange-400 font-semibold">
                {" "}
                water supply
              </span>
              , and
              <span className="text-orange-400 font-semibold">
                {" "}
                gas pipeline systems
              </span>
              for over two decades.
            </p>

            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">20+</div>
                <div className="text-sm text-blue-200">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">500+</div>
                <div className="text-sm text-blue-200">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">50+</div>
                <div className="text-sm text-blue-200">Happy Clients</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white border-0 shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Get Instant Quote
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group text-white border-white/30 hover:bg-white/10 backdrop-blur-sm bg-white/5 hover:border-white transition-all duration-300"
              >
                Explore Products
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="relative z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-orange-600/20 rounded-3xl blur-3xl transform rotate-6"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <Image
                  src="/industrial-warehouse.png"
                  alt="Professional Pipeline Solutions"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-2xl animate-float">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        Quality Assured
                      </div>
                      <div className="text-sm text-gray-600">ISO Certified</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-2xl animate-float-delayed">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        24/7 Support
                      </div>
                      <div className="text-sm text-gray-600">
                        Always Available
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
