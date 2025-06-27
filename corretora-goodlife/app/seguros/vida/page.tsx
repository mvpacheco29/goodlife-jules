import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

const pageTitle = 'Seguro de Vida';
const pageDescription = 'Proteja o futuro de quem você ama com o Seguro de Vida da GoodLife Seguros. Coberturas personalizadas para sua tranquilidade e de sua família.';
const pagePath = '/seguros/vida';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pagePath,
    // images: ['/og-image-seguro-vida.png'], // Imagem OG específica
  },
  twitter: {
    title: pageTitle,
    description: pageDescription,
    // images: ['/og-image-seguro-vida.png'],
  },
};

// Exemplo de ícone para benefício
const CheckIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-green-500 mr-2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;

const SeguroVidaPage: React.FC = () => {
  const beneficios = [
    "Proteção financeira para sua família em caso de imprevistos.",
    "Cobertura para invalidez permanente ou total.",
    "Assistência funeral completa para titular e dependentes (opcional).",
    "Indenização em caso de diagnóstico de doenças graves.",
    "Possibilidade de resgate de parte do valor investido (em alguns planos).",
    "Flexibilidade para escolher o capital segurado e as coberturas.",
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Seguro de Vida</h1>
        <p className="text-lg md:text-xl text-textMuted max-w-3xl mx-auto">
          Garanta a segurança e o bem-estar de quem você mais ama, mesmo na sua ausência. O Seguro de Vida é um ato de cuidado e responsabilidade financeira.
        </p>
      </header>

      {/* Seção Principal */}
      <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center mb-16">
        <div className="bg-white p-8 rounded-lg shadow-lg border border-borderLight">
          <h2 className="text-3xl font-semibold text-secondary mb-6">Por que contratar um Seguro de Vida?</h2>
          <p className="text-textMuted leading-relaxed mb-4">
            O Seguro de Vida é fundamental para quem busca proteger financeiramente seus dependentes (cônjuge, filhos, pais) em caso de falecimento. Ele pode ajudar a cobrir despesas como educação dos filhos, quitação de dívidas, custos de inventário e manter o padrão de vida da família.
          </p>
          <p className="text-textMuted leading-relaxed mb-4">
            Além da cobertura por morte, muitos planos oferecem amparo em vida, como indenizações por invalidez, diagnóstico de doenças graves, diárias por incapacidade temporária e até mesmo assistência funeral, aliviando o peso financeiro e emocional em momentos delicados.
          </p>
          <p className="text-textMuted leading-relaxed">
            Com a GoodLife Seguros, você encontra planos flexíveis que se adaptam ao seu momento de vida e às suas necessidades específicas, garantindo que seus entes queridos estejam sempre amparados.
          </p>
        </div>
        {/* Imagem Placeholder */}
        <div className="flex justify-center">
          <div className="w-full max-w-md h-80 bg-gray-200 rounded-lg shadow-md flex items-center justify-center text-gray-500">
            Imagem representativa do Seguro de Vida
            {/* <Image src="/placeholder-vida.jpg" alt="Família feliz e protegida" width={500} height={400} className="rounded-lg object-cover" /> */}
          </div>
        </div>
      </div>

      {/* Seção de Benefícios */}
      <section className="mb-16 bg-gray-50 p-8 md:p-12 rounded-lg">
        <h2 className="text-3xl font-semibold text-secondary mb-8 text-center">Principais Benefícios e Coberturas</h2>
        <ul className="space-y-4">
          {beneficios.map((beneficio, index) => (
            <li key={index} className="flex items-start text-textMuted leading-relaxed">
              <CheckIcon />
              <span>{beneficio}</span>
            </li>
          ))}
        </ul>
        <p className="text-sm text-textMuted mt-6 text-center">
          *As coberturas podem variar conforme o plano contratado. Consulte nossos especialistas.
        </p>
      </section>

      {/* Seção de Tipos de Seguro de Vida (Exemplo) */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-secondary mb-8 text-center">Opções de Seguro de Vida</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg border border-borderLight text-center">
            <h3 className="text-xl font-bold text-accent mb-3">Vida Individual</h3>
            <p className="text-textMuted text-sm">Proteção personalizada para você e seus beneficiários.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border border-borderLight text-center">
            <h3 className="text-xl font-bold text-accent mb-3">Vida Resgatável</h3>
            <p className="text-textMuted text-sm">Seguro com possibilidade de resgate de parte do valor acumulado.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border border-borderLight text-center">
            <h3 className="text-xl font-bold text-accent mb-3">Vida em Grupo / Empresarial</h3>
            <p className="text-textMuted text-sm">Soluções para empresas protegerem seus colaboradores.</p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="text-center bg-primary text-white p-10 md:p-16 rounded-lg shadow-xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Proteja o Futuro de Quem Você Ama</h2>
        <p className="text-lg md:text-xl text-textLight mb-10 max-w-2xl mx-auto">
          Nossos consultores estão prontos para ajudar você a encontrar o Seguro de Vida ideal.
        </p>
        <Link
          href="/contato?assunto=CotacaoSeguroVida"
          className="bg-accent hover:bg-accent-hover text-white font-bold py-4 px-10 rounded-full text-lg transition duration-300 inline-block"
        >
          Solicitar Cotação de Seguro de Vida
        </Link>
      </section>
    </div>
  );
};

export default SeguroVidaPage;
