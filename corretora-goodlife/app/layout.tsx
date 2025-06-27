import type { Metadata } from "next";
import "./globals.css"; // Mantém a importação dos estilos globais (que agora usa Lato)
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "GoodLife Seguros - Protegendo o seu futuro",
  description: "Corretora de Seguros especializada em Seguro de Vida, Seguro Viagem e Planos Odontológicos. Encontre a melhor proteção para você e sua família.",
  // Outras meta tags como keywords, viewport podem ser adicionadas aqui ou mais tarde
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
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
