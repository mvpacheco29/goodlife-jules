import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

const pageTitle = 'Plano Odontológico';
const pageDescription = 'Cuide do seu sorriso com os Planos Odontológicos da GoodLife Seguros. Ampla rede credenciada e coberturas para toda a família.';
const pagePath = '/seguros/odontologico';

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
    // images: ['/og-image-plano-odontologico.png'],
  },
  twitter: {
    title: pageTitle,
    description: pageDescription,
    // images: ['/og-image-plano-odontologico.png'],
  },
};

const CheckIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-green-500 mr-2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;

const PlanoOdontologicoPage: React.FC = () => {
  const coberturasEssenciais = [
    "Consultas de diagnóstico e urgência/emergência.",
    "Limpeza, profilaxia e aplicação de flúor.",
    "Restaurações (obturações) e tratamento de cáries.",
    "Tratamento de canal (endodontia) e gengiva (periodontia).",
    "Extrações simples (incluindo dente do siso, em alguns planos).",
    "Radiografias odontológicas.",
    "Cobertura para aparelho ortodôntico e documentação (em planos específicos).",
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Plano Odontológico</h1>
        <p className="text-lg md:text-xl text-textMuted max-w-3xl mx-auto">
          Um sorriso saudável é essencial para sua qualidade de vida. Invista na sua saúde bucal com planos acessíveis e completos.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center mb-16">
        <div className="bg-white p-8 rounded-lg shadow-lg border border-borderLight">
          <h2 className="text-3xl font-semibold text-secondary mb-6">Benefícios de um Plano Odontológico</h2>
          <p className="text-textMuted leading-relaxed mb-4">
            Ter um plano odontológico significa acesso facilitado a uma ampla gama de tratamentos preventivos e corretivos, ajudando a manter a saúde bucal em dia e evitando problemas futuros mais sérios e custosos.
          </p>
          <p className="text-textMuted leading-relaxed mb-4">
            Com mensalidades que cabem no seu orçamento, você pode realizar consultas regulares, limpezas, tratamentos de cáries, canal, gengiva e até mesmo procedimentos estéticos ou ortodônticos, dependendo da cobertura do seu plano.
          </p>
          <p className="text-textMuted leading-relaxed">
            A GoodLife Seguros oferece planos com ampla rede credenciada de dentistas e clínicas de qualidade, garantindo atendimento especializado perto de você.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-md h-80 bg-gray-200 rounded-lg shadow-md flex items-center justify-center text-gray-500">
            Imagem representativa do Plano Odontológico
            {/* <Image src="/placeholder-odonto.jpg" alt="Pessoa sorrindo com saúde bucal" width={500} height={400} className="rounded-lg object-cover" /> */}
          </div>
        </div>
      </div>

      <section className="mb-16 bg-gray-50 p-8 md:p-12 rounded-lg">
        <h2 className="text-3xl font-semibold text-secondary mb-8 text-center">Principais Coberturas Incluídas</h2>
        <ul className="space-y-4">
          {coberturasEssenciais.map((cobertura, index) => (
            <li key={index} className="flex items-start text-textMuted leading-relaxed">
              <CheckIcon />
              <span>{cobertura}</span>
            </li>
          ))}
        </ul>
        <p className="text-sm text-textMuted mt-6 text-center">
          *As coberturas podem variar conforme o plano contratado. Consulte nossos especialistas.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-secondary mb-8 text-center">Modalidades de Planos</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg border border-borderLight text-center">
            <h3 className="text-xl font-bold text-accent mb-3">Plano Individual / Familiar</h3>
            <p className="text-textMuted text-sm">Proteção para você e sua família com um único contrato.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border border-borderLight text-center">
            <h3 className="text-xl font-bold text-accent mb-3">Plano Empresarial (PME)</h3>
            <p className="text-textMuted text-sm">Benefício para seus colaboradores, com condições especiais.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border border-borderLight text-center">
            <h3 className="text-xl font-bold text-accent mb-3">Plano com Ortodontia</h3>
            <p className="text-textMuted text-sm">Cobertura completa para tratamentos ortodônticos.</p>
          </div>
        </div>
      </section>

      <section className="text-center bg-primary text-white p-10 md:p-16 rounded-lg shadow-xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Invista no Seu Sorriso e Bem-Estar!</h2>
        <p className="text-lg md:text-xl text-textLight mb-10 max-w-2xl mx-auto">
          Descubra o plano odontológico que melhor se encaixa nas suas necessidades e no seu bolso.
        </p>
        <Link
          href="/contato?assunto=CotacaoPlanoOdontologico"
          className="bg-accent hover:bg-accent-hover text-white font-bold py-4 px-10 rounded-full text-lg transition duration-300 inline-block"
        >
          Cotar Plano Odontológico
        </Link>
      </section>
    </div>
  );
};

export default PlanoOdontologicoPage;
