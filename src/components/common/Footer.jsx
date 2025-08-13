import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">UT</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Universal Traders</h3>
                <p className="text-gray-400">Al Aziz Pipe Store</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Complete fire and water supply, pipeline, and gas line solutions
              provider since 2004.
            </p>
            <div className="space-y-2">
              <p className="text-sm text-gray-400">
                General Manager: Abdul Aziz
              </p>
              <p className="text-sm text-gray-400">
                Order Supplier: Muhammad Usman Ansar
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <div className="space-y-3">
              <Link
                href="/"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/products"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Products
              </Link>
              <Link
                href="/clients"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Our Clients
              </Link>
              <Link
                href="/contact"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Products</h4>
            <div className="space-y-3">
              <Link
                href="/products#pipes"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Pipes
              </Link>
              <Link
                href="/products#fittings"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Fittings
              </Link>
              <Link
                href="/products#valves"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Valves
              </Link>
              <Link
                href="/products#flanges"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Flanges
              </Link>
              <Link
                href="/products#meters"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Meters & Gauges
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-blue-400 mt-1" />
                <div className="text-sm text-gray-400">
                  <p>0300-9750265</p>
                  <p>0300-5139050</p>
                  <p>0317-5247072</p>
                  <p>051-2748160</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-400 mt-1" />
                <div className="text-sm text-gray-400">
                  <p>ansarusman405@gmail.com</p>
                  <p>alazizpipes@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                <div className="text-sm text-gray-400">
                  <p>
                    Head Office: Office 63 Ismail g market city saddar road
                    Rawalpindi 46000
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-blue-400 mt-1" />
                <div className="text-sm text-gray-400">
                  <p>Mon-Sat: 9:00 AM - 6:00 PM</p>
                  <p>Sunday: By Appointment</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Universal Traders - Al Aziz Pipe Store. All rights
              reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
