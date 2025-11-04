import { Poppins, Outfit, Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

const inter = Inter({
  subsets: ['latin'],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-inter",
})

export const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-outfit",
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-spaceGrotesk",
});

export const metadata = {
  title: "BizzView",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} ${spaceGrotesk.variable} ${outfit.variable} font-inter`}
      >
        <Navbar />
        <div className="max-w-screen">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
