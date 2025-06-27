import Link from 'next/link';
import Image from 'next/image'; // Para futuras imagens de herói ou ícones

// Ícones de exemplo para os cards de serviço (você pode substituí-los por SVGs mais elaborados ou imagens)
const LifeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-accent mx-auto mb-4"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.015h-.008v-.015zm0-9.75h.008v.015h-.008v-.015z" /></svg>;
const TravelIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-accent mx-auto mb-4"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A11.978 11.978 0 0112 16.5c-3.389 0-6.443-1.406-8.716-3.747M12 16.5c.604 0 1.187-.067 1.738-.185m0 0c.204.1.415.185.632.264m-.87 0c-.278.078-.562.141-.852.191" /></svg>;
const DentalIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-accent mx-auto mb-4"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 8.25c0-1.287-1.063-2.344-2.344-2.344H4.594A2.344 2.344 0 002.25 8.25v7.5c0 1.287 1.063 2.344 2.344 2.344h14.812a2.344 2.344 0 002.344-2.344v-7.5zm-17.25 0h14.812M4.5 15.75v-7.5m14.812 7.5v-7.5M8.25 12a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5z" /></svg>;


export default function Home() {
  const services = [
    {
      title: "Seguro de Vida",
      description: "Garanta a tranquilidade e segurança financeira da sua família, mesmo nos momentos mais difíceis. Coberturas personalizadas para suas necessidades.",
      ctaText: "Saiba Mais",
      ctaLink: "/seguros/vida",
      icon: <LifeIcon />,
    },
    {
      title: "Seguro Viagem",
      description: "Viaje pelo Brasil e pelo mundo com a certeza de estar protegido contra imprevistos. Assistência médica, extravio de bagagem e mais.",
      ctaText: "Descubra os Planos",
      ctaLink: "/seguros/viagem",
      icon: <TravelIcon />,
    },
    {
      title: "Plano Odontológico",
      description: "Cuide do seu sorriso e da sua saúde bucal com planos que cabem no seu bolso. Ampla rede credenciada e diversas coberturas.",
      ctaText: "Conheça as Opções",
      ctaLink: "/seguros/odontologico",
      icon: <DentalIcon />,
    },
  ];

  return (
    <>
      {/* Seção Hero */}
      <section className="bg-primary text-white py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            GoodLife Seguros: <span className="text-accent">Proteção Completa</span> para Você e Sua Família.
          </h1>
          <p className="text-lg md:text-xl text-textLight mb-10 max-w-3xl mx-auto">
            Encontre os melhores seguros de vida, viagem e planos odontológicos com quem entende do assunto.
            Simule agora e viva com mais tranquilidade!
          </p>
          <Link
            href="/contato" // Ou um link para uma página de cotação geral
            className="bg-accent hover:bg-accent-hover text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300"
          >
            Fale com um especialista
          </Link>
        </div>
      </section>

      {/* Seção de Serviços */}
      <section className="py-16 md:py-24 bg-backgroundBody">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Nossos Principais Seguros</h2>
            <p className="text-lg text-textMuted max-w-2xl mx-auto">
              Oferecemos soluções completas para garantir sua paz de espírito em todas as fases da vida.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center border border-borderLight"
              >
                {service.icon}
                <h3 className="text-2xl font-semibold text-secondary mb-3">{service.title}</h3>
                <p className="text-textMuted mb-6 flex-grow">{service.description}</p>
                <Link
                  href={service.ctaLink}
                  className="mt-auto bg-secondary hover:bg-primary text-white font-medium py-2 px-6 rounded-full transition duration-300"
                >
                  {service.ctaText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Diferenciais (Opcional - Exemplo) */}
      <section className="py-16 md:py-24 bg-gray-50"> {/* Usando um cinza levemente diferente para variar */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Por que escolher a GoodLife Seguros?</h2>
            <p className="text-lg text-textMuted max-w-2xl mx-auto">
              Nosso compromisso é com a sua segurança e satisfação.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Exemplo de diferencial 1 */}
            <div className="text-center p-6">
              {/* Ícone Placeholder */}
              <div className="bg-accent text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-2">Atendimento Ágil</h3>
              <p className="text-textMuted text-sm">Respostas rápidas e suporte dedicado sempre que você precisar.</p>
            </div>
            {/* Exemplo de diferencial 2 */}
            <div className="text-center p-6">
              <div className="bg-accent text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068M15.75 21H8.25A2.25 2.25 0 016 18.75V5.25A2.25 2.25 0 018.25 3h7.5A2.25 2.25 0 0118 5.25v8.313c0 .414-.102.814-.286 1.177L15.75 21z" /></svg>
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-2">Planos Flexíveis</h3>
              <p className="text-textMuted text-sm">Coberturas que se adaptam às suas necessidades e ao seu orçamento.</p>
            </div>
            {/* Exemplo de diferencial 3 */}
            <div className="text-center p-6">
              <div className="bg-accent text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.83-5.83M11.42 15.17L4.844 21.75M11.42 15.17l.75 .75M11.42 15.17l-1.5-1.5m4.5-4.5l.75 .75M11.42 15.17L15.17 11.42m0 0L21.75 4.844 17.25 21A2.652 2.652 0 0021 17.25l-5.83-5.83M15.17 11.42L4.844 21.75" /></svg>
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-2">Consultoria Expert</h3>
              <p className="text-textMuted text-sm">Especialistas prontos para te ajudar a tomar a melhor decisão.</p>
            </div>
             {/* Exemplo de diferencial 4 */}
            <div className="text-center p-6">
              <div className="bg-accent text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-2">Segurança Digital</h3>
              <p className="text-textMuted text-sm">Seus dados protegidos e processos online simplificados e seguros.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção CTA Final */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para Viver com Mais Segurança?</h2>
          <p className="text-lg md:text-xl text-textLight mb-10 max-w-2xl mx-auto">
            Não espere o inesperado acontecer. Fale conosco hoje mesmo e descubra como podemos proteger o seu amanhã.
          </p>
          <Link
            href="/contato"
            className="bg-accent hover:bg-accent-hover text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300"
          >
            Solicitar Cotação Gratuita
          </Link>
        </div>
      </section>
    </>
  );
}
