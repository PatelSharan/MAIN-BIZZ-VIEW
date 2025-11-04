import { Poppins, Outfit, Space_Grotesk, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import localFont from "next/font/local"

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-poppins",
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

const clashDisplay = localFont({
  src: "./fonts/ClashDisplay-Variable.ttf",
  variable: "--font-clashDisplay",
})

export const metadata = {
  title: "BizzView",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${spaceGrotesk.variable} ${outfit.variable} ${clashDisplay.variable} font-spaceGrotesk`}
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
