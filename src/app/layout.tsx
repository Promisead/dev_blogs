import { Metadata } from "next";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import Script from 'next/script';


export const metadata: Metadata = {
  title: "Dev Champions IT | My Blog",
  description: "Stay informed with product updates, company news, and insights on how to sell smarter at your company.",
  metadataBase: new URL('https://blogs.dev-champions.tech'),
  alternates: {
    canonical: '/',
  },
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
           
               {/* Schema Markup - Organization & Website */}

        <Script
  id="structured-data"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Blog",
      "url": "https://blogs.dev-champions.tech",
      "name": "Dev Champions IT | My Blog",
      "description": "Stay informed with product updates, company news, and insights on how to sell smarter at your company.",
      "publisher": {
        "@type": "Organization",
        "name": "Dev Champions IT",
      },
      "author": {
        "@type": "Person",
        "name": "Promise Champion",
      },
      "mainEntity": [
        {
          "@type": "BlogPosting",
          "headline": "The Future of Web3",
          "author": {
            "@type": "Person",
            "name": "Promise Champion",
          },
          "url": "https://blogs.dev-champions.tech/future-of-web3",
        },
        {
          "@type": "BlogPosting",
          "headline": "The Rise of AI",
          "author": {
            "@type": "Person",
            "name": "Promise Champion",
          },
          "url": "https://blogs.dev-champions.tech/rise-of-ai",
        },
      ],
    }),
  }}
/>

      </head>
      <body className="antialiased overflow-x-hidden">
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  ); 
}
