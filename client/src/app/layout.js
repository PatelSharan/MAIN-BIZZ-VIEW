import { Poppins, Space_Grotesk, Inter, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import { GeneralProvider } from "@/contexts/generalContext";

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

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-spaceGrotesk",
});

export const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-oswald",
});


export const metadata = {
  title: "BizzView",
  description: "",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} ${spaceGrotesk.variable} ${oswald.variable} font-spaceGrotesk`}
      >
        <GeneralProvider>
          <Navbar />
          <div className="max-w-screen">
            {children}
          </div>
          <Footer />
        </GeneralProvider>
      </body>
    </html>
  );
}
