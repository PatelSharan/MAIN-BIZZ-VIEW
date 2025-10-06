import { Poppins, Libre_Baskerville, Lobster } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libreBaskerville",
});

export const metadata = {
  title: "Import & Export",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${libreBaskerville.variable} font-poppins`}
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
