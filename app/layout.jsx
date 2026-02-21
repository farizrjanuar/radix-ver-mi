import "@/styles/globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Radix Consulting | Layanan Psikologi & Well-Being Profesional",
    template: "%s | Radix Consulting",
  },
  description:
    "Radix Consulting menyediakan layanan psikologi dan well-being profesional untuk membantu Anda menemukan ketenangan, keseimbangan, dan kesehatan mental yang optimal.",
  keywords: [
    "psikologi",
    "well-being",
    "kesehatan mental",
    "konseling",
    "terapi",
    "psikolog",
    "layanan psikologi",
    "kesejahteraan",
    "radix consulting",
  ],
  authors: [{ name: "Radix Consulting" }],
  openGraph: {
    title: "Radix Consulting | Layanan Psikologi & Well-Being Profesional",
    description:
      "Layanan psikologi dan well-being profesional untuk ketenangan dan keseimbangan hidup Anda.",
    type: "website",
    locale: "id_ID",
    siteName: "Radix Consulting",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
