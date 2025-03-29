import { Metadata } from "next";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import Script from 'next/script';


export const metadata: Metadata = {
  title: "Dev Champions IT | My Blog",
  description:
    "Stay informed with product updates, company news, and insights on how to sell smarter at your company.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
          {/* Google Analytics setup */}
          <Script async src="https://www.googletagmanager.com/gtag/js?id=G-82J51F6LMX" />
        <Script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-82J51F6LMX');
            `,
          }}
        />

        {/* Fonts and metadata */}
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&amp;display=swap"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&amp;display=swap"
        />
        {/* <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} /> */}
        <title>Dev Champions IT | My Blog</title>
        <meta name="description" content="Stay informed with product updates, company news, and insights on how to sell smarter at your company." />
      </head>
      <body className="antialiased overflow-x-hidden">
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  ); 
}
