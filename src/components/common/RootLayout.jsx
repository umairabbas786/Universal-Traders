import { Inter } from "next/font/google";
import Navbar from "./Navbar";
import Footer from "./Footer";
import StickyContact from "./StickyContact";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Universal Traders - Al Aziz Pipe Store | Premium Pipeline Solutions Pakistan",
  description:
    "Pakistan's leading pipeline solutions provider since 2004. Complete fire safety, water supply & gas pipeline systems. Exclusive distributor of international brands like KITZ. Serving KRL, NUST, PAEC & 50+ major clients.",
  keywords:
    "pipeline solutions Pakistan, fire safety systems, water supply pipes, gas pipeline, industrial pipes, KITZ distributor, MS seamless pipes, stainless steel fittings, gate valves, flanges, Islamabad, Rawalpindi, Universal Traders, Al Aziz Pipe Store",
  authors: [{ name: "Universal Traders" }],
  creator: "Universal Traders - Al Aziz Pipe Store",
  publisher: "Universal Traders",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://universaltraders.com",
    title: "Universal Traders - Premium Pipeline Solutions Pakistan",
    description:
      "Pakistan's leading pipeline solutions provider since 2004. Complete fire safety, water supply & gas pipeline systems.",
    siteName: "Universal Traders - Al Aziz Pipe Store",
  },
  twitter: {
    card: "summary_large_image",
    title: "Universal Traders - Premium Pipeline Solutions Pakistan",
    description:
      "Pakistan's leading pipeline solutions provider since 2004. Complete fire safety, water supply & gas pipeline systems.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
        <StickyContact />
      </body>
    </html>
  );
}
