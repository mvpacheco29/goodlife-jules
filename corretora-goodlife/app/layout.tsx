import type { Metadata } from "next";
import "./globals.css"; // Mantém a importação dos estilos globais (que agora usa Lato)
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton";
import GoogleAnalytics from "./components/GoogleAnalytics";
import GoogleTagManager, { GoogleTagManagerNoScript } from "./components/GoogleTagManager"; // Importar GTM

const siteName = "GoodLife Seguros";
const defaultDescription = "Corretora de Seguros especializada em Seguro de Vida, Seguro Viagem e Planos Odontológicos. Encontre a melhor proteção para você e sua família.";
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'; // Assumindo que você configurará NEXT_PUBLIC_SITE_URL em produção

export const metadata: Metadata = {
  // Template de título: %s será substituído pelo título da página específica
  title: {
    default: `${siteName} - Protegendo o seu futuro`, // Título padrão para a home
    template: `%s | ${siteName}`, // Título para outras páginas
  },
  description: defaultDescription,
  metadataBase: new URL(baseUrl), // Essencial para Open Graph URLs relativas
  alternates: {
    canonical: '/', // Página inicial como canônica base
  },
  openGraph: {
    title: {
        default: `${siteName} - Protegendo o seu futuro`,
        template: `%s | ${siteName}`,
    },
    description: defaultDescription,
    url: '/', // URL base canônica
    siteName: siteName,
    images: [
      {
        url: '/og-image.png', // Caminho para sua imagem Open Graph padrão
        width: 1200,
        height: 630,
        alt: `Logo da ${siteName}`,
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image', // Tipo de card do Twitter
    title: {
        default: `${siteName} - Protegendo o seu futuro`,
        template: `%s | ${siteName}`,
    },
    description: defaultDescription,
    // siteId: '@seuTwitterHandle', // Se tiver um handle de site
    // creator: '@seuTwitterHandlePessoal', // Se tiver um criador
    images: ['/og-image.png'], // Deve ser a mesma imagem do Open Graph
  },
  robots: { // Configuração básica de robôs, pode ser mais detalhada no robots.txt
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Outras meta tags importantes
  // icons: { // Exemplo para favicons
  //   icon: '/favicon.ico',
  //   apple: '/apple-touch-icon.png',
  // },
  // manifest: '/site.webmanifest', // Se tiver um PWA
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full">
      {/*
        A classe `font-lato` é aplicada globalmente via `globals.css` no `html` ou `body`.
        A classe `antialiased` também é aplicada no `globals.css`.
        Portanto, não precisamos mais das classes de fonte Geist aqui.
      */}
      <body className="flex flex-col min-h-screen bg-backgroundBody text-textPrimary">
        <GoogleTagManagerNoScript /> {/* Snippet GTM <noscript> logo após <body> */}
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingWhatsAppButton />
        <GoogleAnalytics /> {/* GA4 direto, pode ser removido se GA4 for via GTM */}
        <GoogleTagManager /> {/* Snippet GTM <head> (via next/script) */}
      </body>
    </html>
  );
}
