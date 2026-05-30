import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apex VR Tours | Matterport Virtual Tours for Hotels, Venues & Retail",
  description:
    "Apex VR Tours creates immersive Matterport 3D virtual tours for hotels, venues, restaurants, retail and commercial spaces across the UK. Win more bookings and reduce wasted viewings.",
  keywords: [
    "matterport virtual tours",
    "3d virtual tour uk",
    "hotel virtual tours",
    "venue virtual tours",
    "retail virtual tours",
    "digital twin",
    "360 virtual tour",
    "matterport scanning uk",
    "virtual tour photographer",
    "commercial property tours",
  ].join(", "),
  icons: {
    icon: "/logo/apexvrtours.ico",
    shortcut: "/logo/apexvrtours.ico",
    apple: "/logo/apexvrtours.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
