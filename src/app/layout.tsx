import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import { Metadata } from "next";

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
            <main className="flex-1">
                {children}
            </main>
        </div>
      </body>
    </html>
  );
}
