import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";

// Load local fonts
const pricedown = localFont({
  src: [
    {
      path: '../../public/fonts/Pricedown.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Pricedown.woff',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-pricedown'
});

const diploma = localFont({
  src: [
    {
      path: '../../public/fonts/Diploma.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-diploma'
});

const pacifico = localFont({
  src: [
    {
      path: '../../public/fonts/Pacifico.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-pacifico'
});

export const metadata: Metadata = {
  title: "woldeCode - by Nahome Wolde-Giorgis",
  description: "A detailed collection of my projects and experiences",
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ]
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    title: "woldeCode",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pricedown.variable} ${diploma.variable} ${pacifico.variable}`}>
        {children}
      </body>
    </html>
  );
}
