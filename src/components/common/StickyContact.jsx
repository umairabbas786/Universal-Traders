"use client";

import { useState } from "react";
import { Phone, MessageCircle, X, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function StickyContact() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 lg:hidden">
      {isExpanded ? (
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200/50 p-6 w-72 animate-fade-in-up">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-gray-900 text-lg">Get In Touch</h3>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-all duration-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="space-y-4">
            <a
              href="tel:03009750265"
              className="flex items-center w-full p-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 group"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                <Phone className="h-6 w-6 group-hover:animate-pulse" />
              </div>
              <div className="text-left">
                <p className="font-semibold">Call Now</p>
                <p className="text-sm opacity-90">0300-9750265</p>
              </div>
            </a>

            <a
              href="https://wa.me/923009750265"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center w-full p-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25 group"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                <MessageCircle className="h-6 w-6 group-hover:animate-pulse" />
              </div>
              <div className="text-left">
                <p className="font-semibold">WhatsApp</p>
                <p className="text-sm opacity-90">Quick Response</p>
              </div>
            </a>

            <a
              href="mailto:ansarusman405@gmail.com"
              className="flex items-center w-full p-4 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-xl hover:from-orange-700 hover:to-orange-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 group"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                <Mail className="h-6 w-6 group-hover:animate-pulse" />
              </div>
              <div className="text-left">
                <p className="font-semibold">Email Us</p>
                <p className="text-sm opacity-90">Get Quote</p>
              </div>
            </a>
          </div>
        </div>
      ) : (
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-orange-600 rounded-full blur-lg opacity-75 animate-pulse"></div>
          <Button
            onClick={() => setIsExpanded(true)}
            className="relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-full w-16 h-16 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-110 group border-2 border-white/20"
          >
            <Phone className="h-7 w-7 text-white group-hover:animate-pulse" />
          </Button>
        </div>
      )}
    </div>
  );
}
