"use client"; // next/script e window manipulations são client-side

import Script from 'next/script';
import { usePathname } from 'next/navigation'; // Para rastrear pageviews
import { useEffect } from 'react';

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'; // Prioriza variável de ambiente

declare global {
  interface Window {
    gtag?: (command: string, action: string, params?: Record<string, any>) => void;
  }
}

const GoogleAnalytics: React.FC = () => {
  const pathname = usePathname();

  // Rastrear pageviews quando o pathname muda
  useEffect(() => {
    if (!GA_TRACKING_ID || GA_TRACKING_ID === 'G-XXXXXXXXXX') {
      console.warn('Google Analytics ID não configurado ou usando placeholder.');
      return;
    }
    if (window.gtag) {
      window.gtag('config', GA_TRACKING_ID, {
        page_path: pathname,
      });
      console.log(`GA Pageview: ${pathname}`);
    }
  }, [pathname]);

  if (!GA_TRACKING_ID || GA_TRACKING_ID === 'G-XXXXXXXXXX') {
    return null; // Não renderiza nada se o ID não estiver configurado ou for o placeholder
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="ga-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;
