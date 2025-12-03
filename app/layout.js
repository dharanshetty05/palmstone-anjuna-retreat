import { Inter, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Palmstone Anjuna Retreat – Premium Stay Near Anjuna Beach",
  description:
    "Stay surrounded by nature with cozy rooms, balcony views, pool access and quick WhatsApp booking. Perfect for couples, families and travelers.",
  keywords: [
    "Anjuna stay",
    "Goa retreat",
    "homestay near beach",
    "balcony room Goa",
    "nature stay Goa",
  ],
  openGraph: {
    title: "Palmstone Anjuna Retreat",
    description:
      "A peaceful stay surrounded by nature with quick WhatsApp booking.",
    url: "https://palmstone-anjuna.vercel.app/", // update after deploy
    siteName: "Palmstone Anjuna Retreat",
    images: [
      {
        url: "/og-image.jpg", // we'll add this later
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Palmstone Anjuna Retreat",
    description: "A peaceful stay surrounded by nature.",
    images: ["/og-image.jpg"],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-inter">{children}</body>
    </html>
  );
}