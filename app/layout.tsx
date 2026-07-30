import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://valenteassociados.com.br";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Valente & Associados | Advocacia Boutique",
  description:
    "Escritório de advocacia boutique especializado em direito empresarial, patrimonial e proteção de interesses com atendimento estratégico e confidencial.",
  keywords: [
    "advocacia boutique",
    "direito empresarial",
    "proteção patrimonial",
    "consultoria jurídica",
    "executivos",
    "São Paulo",
  ],
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Valente & Associados" }],
  openGraph: {
    title: "Valente & Associados | Advocacia Boutique",
    description:
      "Atendimento jurídico estratégico para empresas, executivos e famílias com foco em proteção patrimonial e soluções empresariais.",
    url: siteUrl,
    type: "website",
    locale: "pt_BR",
    siteName: "Valente & Associados",
  },
  twitter: {
    card: "summary_large_image",
    title: "Valente & Associados | Advocacia Boutique",
    description:
      "Atendimento jurídico estratégico para empresas, executivos e famílias com foco em proteção patrimonial e soluções empresariais.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
