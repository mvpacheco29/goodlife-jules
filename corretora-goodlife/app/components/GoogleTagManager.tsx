"use client"; // next/script é client-side

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX'; // Prioriza variável de ambiente

declare global {
  interface Window {
    dataLayer?: Record<string, any>[];
  }
}

const GoogleTagManager: React.FC = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (!GTM_ID || GTM_ID === 'GTM-XXXXXXX') {
      console.warn('Google Tag Manager ID não configurado ou usando placeholder.');
      return;
    }
    // Enviar um evento 'pageview' para o dataLayer em cada mudança de rota
    // Isso é útil se você configurar o GA4 ou outras tags de pageview via GTM
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'pageview',
      'page_path': pathname,
      // Você pode adicionar mais dados aqui, como page_title, etc.
      // 'page_title': document.title // Exemplo
    });
     console.log(`GTM Pageview Event: ${pathname}`);
  }, [pathname]);


  if (!GTM_ID || GTM_ID === 'GTM-XXXXXXX') {
    return null; // Não renderiza nada se o ID não estiver configurado ou for o placeholder
  }

  return (
    <>
      {/* Google Tag Manager - Snippet <head> */}
      <Script
        id="gtm-script-head"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `,
        }}
      />
      {/* Google Tag Manager (noscript) - Snippet <body> é mais difícil de injetar corretamente com next/script
          Normalmente, o GTM instrui a colocar um iframe logo após a abertura da tag <body>.
          O next/script não é ideal para isso. No entanto, o script principal no <head> é o mais crucial.
          Para a parte <noscript>, pode ser necessário usar dangerouslySetInnerHTML diretamente no layout se for estritamente necessário,
          ou aceitar que usuários sem JS não terão o GTM (o que é comum).
          A Vercel/Next.js tem um exemplo oficial que foca no script do head:
          https://github.com/vercel/next.js/tree/canary/examples/with-google-tag-manager
          Vou focar no script do <head> que é o padrão e o mais importante.
      */}
    </>
  );
};

export default GoogleTagManager;

// Opcional: Componente para o GTM <noscript> se precisar ser injetado no body
export const GoogleTagManagerNoScript: React.FC = () => {
  if (!GTM_ID || GTM_ID === 'GTM-XXXXXXX') {
    return null;
  }
  return (
    <noscript
      dangerouslySetInnerHTML={{
        __html: `
          <iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>
        `,
      }}
    />
  );
};
