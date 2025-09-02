import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const outfit = Outfit({ 
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit"
});

export const metadata: Metadata = {
  title: "CtrlLabs - Creative Portfolio",
  description: "A modern creative portfolio showcasing innovative design and development work",
  keywords: ["portfolio", "creative", "design", "development", "art"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className={`${inter.className} ${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
