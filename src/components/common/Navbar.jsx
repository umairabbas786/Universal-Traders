"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, ChevronDown } from "lucide-react";
import { Button } from "../ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50"
          : "bg-white/90 backdrop-blur-sm shadow-md"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-blue-500/25">
                <span className="text-white font-bold text-xl">UT</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
            </div>
            <div className="group-hover:translate-x-1 transition-transform duration-300">
              <h1 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                Universal Traders
              </h1>
              <p className="text-sm text-gray-600 group-hover:text-orange-600 transition-colors">
                Al Aziz Pipe Store
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="relative text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-orange-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/about"
              className="relative text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 group"
            >
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-orange-600 group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* Products Dropdown */}
            <div className="relative">
              <Button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 group"
              >
                Products
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                    isProductsOpen ? "rotate-180" : ""
                  }`}
                />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-orange-600 group-hover:w-full transition-all duration-300"></span>
              </Button>

              {isProductsOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200/50 z-50 animate-fade-in-up">
                  <div className="p-2">
                    <Link
                      href="/products"
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all duration-200 font-medium"
                    >
                      All Products
                    </Link>
                    <Link
                      href="/products#pipes"
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all duration-200"
                    >
                      Pipes
                    </Link>
                    <Link
                      href="/products#fittings"
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all duration-200"
                    >
                      Fittings
                    </Link>
                    <Link
                      href="/products#valves"
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all duration-200"
                    >
                      Valves
                    </Link>
                    <Link
                      href="/products#flanges"
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all duration-200"
                    >
                      Flanges
                    </Link>
                    <Link
                      href="/products#meters"
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all duration-200"
                    >
                      Meters & Gauges
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/clients"
              className="relative text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 group"
            >
              Our Clients
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-orange-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/contact"
              className="relative text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 group"
            >
              Contact Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-orange-600 group-hover:w-full transition-all duration-300"></span>
            </Link>

            <Button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white border-0 shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105 btn-hover-effect">
              <Phone className="mr-2 h-4 w-4 group-hover:animate-pulse" />
              Call Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors duration-200"
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute top-0 left-0 w-6 h-0.5 bg-gray-600 transform transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-2.5" : ""
                }`}
              ></span>
              <span
                className={`absolute top-2.5 left-0 w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`absolute top-5 left-0 w-6 h-0.5 bg-gray-600 transform transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2.5" : ""
                }`}
              ></span>
            </div>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <div className="border-t border-gray-200/50 pt-4">
            <div className="flex flex-col space-y-3">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 font-medium py-2 px-4 rounded-xl hover:bg-blue-50 transition-all duration-200"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 font-medium py-2 px-4 rounded-xl hover:bg-blue-50 transition-all duration-200"
              >
                About Us
              </Link>
              <Link
                href="/products"
                className="text-gray-700 hover:text-blue-600 font-medium py-2 px-4 rounded-xl hover:bg-blue-50 transition-all duration-200"
              >
                Products
              </Link>
              <Link
                href="/clients"
                className="text-gray-700 hover:text-blue-600 font-medium py-2 px-4 rounded-xl hover:bg-blue-50 transition-all duration-200"
              >
                Our Clients
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-600 font-medium py-2 px-4 rounded-xl hover:bg-blue-50 transition-all duration-200"
              >
                Contact Us
              </Link>
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white w-fit mx-4 mt-2 shadow-lg">
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
