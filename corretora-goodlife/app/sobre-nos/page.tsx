import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre Nós - GoodLife Seguros',
  description: 'Conheça a história, missão e valores da GoodLife Seguros, sua parceira em proteção e tranquilidade.',
};

const SobreNosPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Sobre a GoodLife Seguros</h1>
        <p className="text-lg md:text-xl text-textMuted max-w-2xl mx-auto">
          Nossa jornada é dedicada a oferecer segurança e tranquilidade para você, sua família e seus negócios.
        </p>
      </header>

      <section className="mb-16 bg-white p-8 rounded-lg shadow-lg border border-borderLight">
        <h2 className="text-3xl font-semibold text-secondary mb-6">Nossa História</h2>
        <p className="text-textMuted leading-relaxed mb-4">
          Fundada em [Ano de Fundação Placeholder] por [Nome do Fundador Placeholder], a GoodLife Seguros nasceu com o propósito de transformar a maneira como as pessoas encaram o seguro: não como uma despesa, mas como um investimento essencial na proteção do que é mais valioso.
        </p>
        <p className="text-textMuted leading-relaxed mb-4">
          Ao longo dos anos, construímos uma reputação sólida baseada na confiança, transparência e na excelência do nosso atendimento. Crescemos ouvindo nossos clientes e adaptando nossos serviços para atender às suas necessidades em constante evolução.
        </p>
        <p className="text-textMuted leading-relaxed">
          Hoje, somos referência em [Mencionar especialidades, ex: seguros de vida e saúde] na região de [Mencionar região, se aplicável], orgulhosos de cada apólice emitida, pois sabemos que ela representa a segurança de um futuro mais tranquilo para alguém.
        </p>
      </section>

      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg border border-borderLight">
            <h2 className="text-3xl font-semibold text-secondary mb-6">Nossa Missão</h2>
            <p className="text-textMuted leading-relaxed">
              Oferecer soluções de seguros personalizadas e acessíveis, com consultoria especializada e atendimento humanizado, garantindo a proteção e a tranquilidade de nossos clientes em todas as fases de suas vidas e negócios.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg border border-borderLight">
            <h2 className="text-3xl font-semibold text-secondary mb-6">Nossa Visão</h2>
            <p className="text-textMuted leading-relaxed">
              Ser reconhecida como a corretora de seguros líder em inovação e satisfação do cliente, expandindo nossa atuação e impacto positivo na comunidade, tornando a proteção securitária uma realidade para todos.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-primary text-white p-8 md:p-12 rounded-lg shadow-lg">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">Nossos Valores</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-bold text-accent mb-2">Confiança</h3>
            <p className="text-sm leading-relaxed">Construímos relações duradouras baseadas na honestidade e transparência em cada interação.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-accent mb-2">Compromisso</h3>
            <p className="text-sm leading-relaxed">Estamos dedicados a encontrar a melhor solução para cada cliente, superando expectativas.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-accent mb-2">Inovação</h3>
            <p className="text-sm leading-relaxed">Buscamos constantemente novas formas de aprimorar nossos serviços e facilitar a vida de nossos segurados.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-accent mb-2">Empatia</h3>
            <p className="text-sm leading-relaxed">Colocamo-nos no lugar do cliente para entender suas reais necessidades e oferecer o suporte adequado.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-accent mb-2">Excelência</h3>
            <p className="text-sm leading-relaxed">Primamos pela qualidade em todos os aspectos do nosso trabalho, desde a consultoria até o pós-venda.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-accent mb-2">Ética</h3>
            <p className="text-sm leading-relaxed">Agimos com integridade, respeitando os princípios morais e legais em todas as nossas operações.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SobreNosPage;
