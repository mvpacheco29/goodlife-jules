import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Seguro Viagem - GoodLife Seguros',
  description: 'Viaje com tranquilidade e segurança. Conheça os planos de Seguro Viagem da GoodLife Seguros para destinos nacionais e internacionais.',
};

// Exemplo de ícone para benefício
const CheckIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-green-500 mr-2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;

const SeguroViagemPage: React.FC = () => {
  const coberturasComuns = [
    "Despesas Médicas, Hospitalares e Odontológicas (DMHO) em viagem.",
    "Cobertura para extravio, roubo ou furto de bagagem.",
    "Cancelamento ou interrupção de viagem (reembolso de despesas).",
    "Repatriação médica e funerária.",
    "Assistência jurídica em caso de acidentes.",
    "Cobertura para prática de esportes (opcional, verificar condições).",
    "Indenização por morte acidental ou invalidez permanente em viagem.",
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Seguro Viagem</h1>
        <p className="text-lg md:text-xl text-textMuted max-w-3xl mx-auto">
          Explore o mundo com a certeza de estar protegido. O Seguro Viagem é seu passaporte para uma jornada tranquila e sem preocupações.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center mb-16">
        <div className="bg-white p-8 rounded-lg shadow-lg border border-borderLight">
          <h2 className="text-3xl font-semibold text-secondary mb-6">Por que o Seguro Viagem é Essencial?</h2>
          <p className="text-textMuted leading-relaxed mb-4">
            Imprevistos podem acontecer em qualquer lugar, e durante uma viagem, eles podem se tornar grandes transtornos e gerar custos elevados. O Seguro Viagem oferece a assistência necessária para lidar com emergências médicas, problemas com bagagem, cancelamentos e muito mais.
          </p>
          <p className="text-textMuted leading-relaxed mb-4">
            Para destinos internacionais, a assistência médica pode ser extremamente cara. Alguns países, inclusive, exigem a contratação de um seguro viagem com cobertura mínima para permitir a entrada de turistas (como os países do Tratado de Schengen na Europa).
          </p>
          <p className="text-textMuted leading-relaxed">
            Com a GoodLife Seguros, você viaja seguro, sabendo que terá suporte 24 horas por dia, em português, onde quer que esteja.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-md h-80 bg-gray-200 rounded-lg shadow-md flex items-center justify-center text-gray-500">
            Imagem representativa do Seguro Viagem
            {/* <Image src="/placeholder-viagem.jpg" alt="Pessoa viajando com tranquilidade" width={500} height={400} className="rounded-lg object-cover" /> */}
          </div>
        </div>
      </div>

      <section className="mb-16 bg-gray-50 p-8 md:p-12 rounded-lg">
        <h2 className="text-3xl font-semibold text-secondary mb-8 text-center">Principais Coberturas do Seguro Viagem</h2>
        <ul className="space-y-4">
          {coberturasComuns.map((cobertura, index) => (
            <li key={index} className="flex items-start text-textMuted leading-relaxed">
              <CheckIcon />
              <span>{cobertura}</span>
            </li>
          ))}
        </ul>
         <p className="text-sm text-textMuted mt-6 text-center">
          *As coberturas podem variar conforme o plano e o destino. Consulte nossos especialistas.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-secondary mb-8 text-center">Tipos de Seguro Viagem</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg border border-borderLight text-center">
            <h3 className="text-xl font-bold text-accent mb-3">Viagem Nacional</h3>
            <p className="text-textMuted text-sm">Cobertura para suas viagens dentro do Brasil.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border border-borderLight text-center">
            <h3 className="text-xl font-bold text-accent mb-3">Viagem Internacional</h3>
            <p className="text-textMuted text-sm">Proteção completa para suas aventuras pelo mundo.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border border-borderLight text-center">
            <h3 className="text-xl font-bold text-accent mb-3">Intercâmbio / Longa Duração</h3>
            <p className="text-textMuted text-sm">Planos específicos para estudantes e viajantes de longa permanência.</p>
          </div>
        </div>
      </section>

      <section className="text-center bg-primary text-white p-10 md:p-16 rounded-lg shadow-xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Sua Próxima Aventura Começa Segura!</h2>
        <p className="text-lg md:text-xl text-textLight mb-10 max-w-2xl mx-auto">
          Não deixe que imprevistos atrapalhem seus planos. Cote seu Seguro Viagem conosco.
        </p>
        <Link
          href="/contato?assunto=CotacaoSeguroViagem"
          className="bg-accent hover:bg-accent-hover text-white font-bold py-4 px-10 rounded-full text-lg transition duration-300 inline-block"
        >
          Cotar Seguro Viagem
        </Link>
      </section>
    </div>
  );
};

export default SeguroViagemPage;
