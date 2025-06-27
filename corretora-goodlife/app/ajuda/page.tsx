import React from 'react';
import type { Metadata } from 'next';

const pageTitle = 'Ajuda e FAQ';
const pageDescription = 'Encontre respostas para as perguntas mais frequentes sobre seguros de vida, viagem, planos odontológicos e nossos serviços na GoodLife Seguros.';
const pagePath = '/ajuda';

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
  },
  twitter: {
    title: pageTitle,
    description: pageDescription,
  },
};

interface FAQItemProps {
  question: string;
  answer: React.ReactNode; // Permite HTML na resposta
}

const FaqItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  // Para um accordion interativo, você usaria React.useState aqui para controlar a visibilidade da resposta.
  // Por enquanto, a resposta está sempre visível.
  return (
    <div className="mb-6 pb-4 border-b border-borderLight">
      <h3 className="text-xl font-semibold text-secondary mb-2">{question}</h3>
      <div className="text-textMuted leading-relaxed">
        {answer}
      </div>
    </div>
  );
};

const AjudaPage: React.FC = () => {
  const faqData: FAQItemProps[] = [
    {
      question: 'O que é um seguro de vida?',
      answer: (
        <p>
          O seguro de vida é um contrato que garante proteção financeira para seus beneficiários em caso de falecimento do titular, ou para o próprio titular em casos de invalidez ou doenças graves, dependendo da cobertura contratada. Ele oferece segurança e amparo para sua família em momentos difíceis.
        </p>
      ),
    },
    {
      question: 'Por que preciso de um seguro viagem?',
      answer: (
        <p>
          O seguro viagem é essencial para cobrir despesas médicas inesperadas, cancelamento de voos, extravio de bagagem e outras emergências que podem ocorrer durante uma viagem, seja nacional ou internacional. Ele garante que você tenha assistência e não precise arcar com custos elevados em imprevistos.
        </p>
      ),
    },
    {
      question: 'Como funciona um plano odontológico?',
      answer: (
        <p>
          Um plano odontológico oferece acesso a uma rede de dentistas e clínicas para diversos procedimentos, desde consultas de rotina e limpezas até tratamentos mais complexos como canais e ortodontia, dependendo do plano. Você paga uma mensalidade e tem cobertura para os serviços inclusos, ajudando a manter a saúde bucal em dia com custos previsíveis.
        </p>
      ),
    },
    {
      question: 'Como faço para contratar um seguro com a GoodLife Seguros?',
      answer: (
        <>
          <p className="mb-2">
            É muito simples! Você pode entrar em contato conosco através do nosso <a href="/contato" className="text-accent hover:underline">formulário de contato</a>, pelo telefone (XX) XXXXX-XXXX ou diretamente pelo WhatsApp.
          </p>
          <p>
            Nossos consultores especializados irão entender suas necessidades e apresentar as melhores opções de seguro para você.
          </p>
        </>
      ),
    },
    {
      question: 'Quais documentos são necessários para contratar um seguro?',
      answer: (
        <p>
          Geralmente, são necessários documentos básicos de identificação (RG, CPF), comprovante de residência e, dependendo do tipo de seguro (especialmente vida ou saúde), pode ser solicitado um questionário de perfil de saúde (Declaração Pessoal de Saúde - DPS). Nossos consultores informarão a documentação exata para cada caso.
        </p>
      ),
    },
     {
      question: 'Posso cancelar meu seguro a qualquer momento?',
      answer: (
        <p>
          Sim, a maioria dos seguros pode ser cancelada a qualquer momento. No entanto, é importante verificar as condições contratuais, pois podem existir regras sobre devolução de prêmios (valor pago) ou carências. Recomendamos conversar com seu corretor para entender os detalhes antes de cancelar.
        </p>
      ),
    }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Central de Ajuda e FAQ</h1>
        <p className="text-lg md:text-xl text-textMuted max-w-2xl mx-auto">
          Tire suas dúvidas sobre nossos seguros e serviços.
        </p>
      </header>

      <section className="bg-white p-8 rounded-lg shadow-lg border border-borderLight">
        {faqData.length > 0 ? (
          faqData.map((item, index) => (
            <FaqItem key={index} question={item.question} answer={item.answer} />
          ))
        ) : (
          <p className="text-textMuted">Nenhuma pergunta frequente cadastrada no momento.</p>
        )}
      </section>

      <section className="mt-16 text-center bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold text-secondary mb-4">Ainda tem dúvidas?</h2>
        <p className="text-textMuted mb-6">
          Se não encontrou a resposta que procurava, nossa equipe está pronta para ajudar!
        </p>
        <a
          href="/contato"
          className="bg-accent hover:bg-accent-hover text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300"
        >
          Entre em Contato
        </a>
      </section>
    </div>
  );
};

export default AjudaPage;
