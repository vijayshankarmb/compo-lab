import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import { Metadata } from "next";
import Footer from "@/components/common/Footer";
import AnimatedBackground from "@/components/common/AnimatedBackground";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Compo Lab",
  description: "Modern SaaS Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${poppins.variable} min-h-screen bg-background text-foreground antialiased`}>
        <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <AnimatedBackground>

            <main className="flex-1">
                {children}
            </main>
            </AnimatedBackground>
            <Footer />
        </div>
      </body>
    </html>
  );
}
