import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
