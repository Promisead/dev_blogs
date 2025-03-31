import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/navbar";
import Container from "@/components/container";
import { GradientBackground } from "@/components/gradient";
import { Analytics } from "@vercel/analytics/react";

import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Dev - Blogs || Dev Champions",
  description:
    "Stay informed with product updates, company news, and insights on how to sell smarter at your company.",
}; 


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      {children}
      <Analytics />
      <Footer />
    </>
  );
}
