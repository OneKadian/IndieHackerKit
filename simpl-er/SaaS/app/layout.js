import "./globals.css";
// import { ClerkProvider, UserProfile } from "@clerk/nextjs";
import { ClerkProvider } from "@clerk/nextjs";

import { Montserrat } from "next/font/google";
import Navbar from "./components/Navigation/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "SaaS Template",
  description: "This is the software you need",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={montserrat.className}>
          <Navbar />
          {children}
          <SpeedInsights />
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
