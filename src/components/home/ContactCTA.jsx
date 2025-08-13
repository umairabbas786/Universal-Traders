import { Button } from "@/components/ui/button";
import { Phone, Mail, ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-white/5 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-white/10 rounded-full animate-float-slow"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h2 className="text-5xl font-bold text-white mb-6">
            Ready to Start Your{" "}
            <span className="text-yellow-300"> Project?</span>
          </h2>
          <p className="text-xl text-orange-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Get professional consultation and competitive quotes for your
            pipeline requirements. Our experts are ready to help you succeed.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <Phone className="h-5 w-5 text-white" />
              <span className="text-white font-medium">0300-9750265</span>{" "}
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <Mail className="h-5 w-5 text-white" />
              <span className="text-white font-medium">
                ansarusman405@gmail.com
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="group bg-white text-orange-600 hover:bg-gray-100 shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105 border-0"
            >
              <Phone className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              Call Now for Free Consultation
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group text-white border-white/30 hover:bg-white/10 backdrop-blur-sm bg-white/5 hover:border-white transition-all duration-300"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Us Today
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
