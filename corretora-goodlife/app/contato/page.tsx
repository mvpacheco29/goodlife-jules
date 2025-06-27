"use client"; // Necessário para usar hooks como useState e manipulação de eventos no cliente

import React, { useState, useEffect } from 'react';
import type { Metadata } from 'next';
import { useSearchParams } from 'next/navigation'; // Para ler o parâmetro 'assunto' da URL

// Metadata não pode ser exportada de um client component diretamente desta forma no App Router.
// Deve ser feito no page.tsx pai (se este fosse um sub-componente) ou via generateMetadata.
// Por simplicidade, vou manter aqui, mas em um cenário mais complexo, isso seria ajustado.
// No entanto, como este é o page.tsx principal da rota /contato, está OK.

const pageTitle = 'Contato';
const pageDescription = 'Entre em contato com a GoodLife Seguros. Estamos prontos para atender você e tirar todas as suas dúvidas sobre seguros.';
const pagePath = '/contato';

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

// Ícones simples para informações de contato
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3 text-accent"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>;
const EmailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3 text-accent"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>;
const MapPinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3 text-accent"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>;
const WhatsAppIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 mr-3 text-accent"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>;


interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  insuranceType: string;
  message: string;
}

const ContatoPage: React.FC = () => {
  const searchParams = useSearchParams();
  const initialSubject = searchParams.get('assunto') || '';
  const initialInsuranceType = searchParams.get('tipoSeguro') || '';


  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: initialSubject,
    insuranceType: initialInsuranceType,
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [formStatus, setFormStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  useEffect(() => {
    // Se o assunto da URL mapeia para um tipo de seguro, seleciona-o.
    // Ex: assunto "CotacaoSeguroVida" -> insuranceType "vida"
    if (initialSubject.toLowerCase().includes('vida')) {
      setFormData(prev => ({ ...prev, insuranceType: 'vida' }));
    } else if (initialSubject.toLowerCase().includes('viagem')) {
      setFormData(prev => ({ ...prev, insuranceType: 'viagem' }));
    } else if (initialSubject.toLowerCase().includes('odontologico')) {
      setFormData(prev => ({ ...prev, insuranceType: 'odontologico' }));
    }
  }, [initialSubject]);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setFormStatus(null);

    // Validação básica (exemplo)
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setFormStatus({ type: 'error', message: 'Por favor, preencha todos os campos obrigatórios.' });
      setIsLoading(false);
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
        setFormStatus({ type: 'error', message: 'Por favor, insira um email válido.' });
        setIsLoading(false);
        return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setFormStatus({ type: 'success', message: result.message || 'Mensagem enviada com sucesso!' });
        setFormData({ name: '', email: '', phone: '', subject: '', insuranceType: '', message: '' }); // Limpa o formulário
      } else {
        setFormStatus({ type: 'error', message: result.message || 'Ocorreu um erro ao enviar a mensagem.' });
      }
    } catch (error) {
      setFormStatus({ type: 'error', message: 'Ocorreu um erro de rede. Tente novamente.' });
    } finally {
      setIsLoading(false);
    }
  };

  const insuranceTypes = [
    { value: '', label: 'Selecione um tipo (opcional)' },
    { value: 'vida', label: 'Seguro de Vida' },
    { value: 'viagem', label: 'Seguro Viagem' },
    { value: 'odontologico', label: 'Plano Odontológico' },
    { value: 'outros', label: 'Outros Assuntos' },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Entre em Contato</h1>
        <p className="text-lg md:text-xl text-textMuted max-w-2xl mx-auto">
          Estamos aqui para ajudar! Envie sua mensagem, ligue ou visite-nos.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* Coluna de Informações de Contato e Mapa */}
        <div className="bg-white p-8 rounded-lg shadow-lg border border-borderLight">
          <h2 className="text-2xl font-semibold text-secondary mb-6">Nossas Informações</h2>

          <div className="space-y-6 text-textMuted">
            <div className="flex items-start">
              <MapPinIcon />
              <div>
                <h3 className="font-semibold text-secondary">Endereço</h3>
                <p>Rua Exemplo Fictício, 123 - Sala 45</p>
                <p>Bairro Imaginário, Cidade Exemplo - UF</p>
                <p>CEP: 00000-000</p>
              </div>
            </div>

            <div className="flex items-center">
              <PhoneIcon />
              <div>
                <h3 className="font-semibold text-secondary">Telefone</h3>
                <a href="tel:+55XXYYYYYZZZZ" className="hover:text-accent">(XX) XXXXX-ZZZZ</a> {/* Substituir pelo número real */}
              </div>
            </div>

            <div className="flex items-center">
              <WhatsAppIcon />
              <div>
                <h3 className="font-semibold text-secondary">WhatsApp</h3>
                <a href={`https://wa.me/5511999998888?text=${encodeURIComponent("Olá! Gostaria de mais informações sobre os seguros da GoodLife Seguros.")}`} target="_blank" rel="noopener noreferrer" className="hover:text-accent">(11) 99999-8888</a> {/* Atualizado com placeholder */}
              </div>
            </div>

            <div className="flex items-center">
              <EmailIcon />
              <div>
                <h3 className="font-semibold text-secondary">Email</h3>
                <a href="mailto:contato@goodlifeseguros.com.br" className="hover:text-accent">contato@goodlifeseguros.com.br</a> {/* Substituir pelo email real */}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-secondary mb-4">Localização</h3>
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-md flex items-center justify-center text-gray-500">
              <p>Mapa do Google Maps será incorporado aqui.</p>
            </div>
          </div>
        </div>

        {/* Coluna do Formulário de Contato */}
        <div className="bg-white p-8 rounded-lg shadow-lg border border-borderLight">
          <h2 className="text-2xl font-semibold text-secondary mb-6">Envie uma Mensagem</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-textMuted mb-1">Nome Completo <span className="text-red-500">*</span></label>
              <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-textMuted mb-1">Email <span className="text-red-500">*</span></label>
              <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-textMuted mb-1">Telefone</label>
              <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent" />
            </div>
             <div>
              <label htmlFor="insuranceType" className="block text-sm font-medium text-textMuted mb-1">Tipo de Seguro de Interesse</label>
              <select
                name="insuranceType"
                id="insuranceType"
                value={formData.insuranceType}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent bg-white"
              >
                {insuranceTypes.map(type => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-textMuted mb-1">Assunto <span className="text-red-500">*</span></label>
              <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-textMuted mb-1">Sua Mensagem <span className="text-red-500">*</span></label>
              <textarea name="message" id="message" value={formData.message} onChange={handleChange} rows={5} required className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent"></textarea>
            </div>

            {formStatus && (
              <div className={`p-3 rounded-md text-sm ${formStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {formStatus.message}
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-accent hover:bg-accent-hover text-white font-bold py-3 px-6 rounded-md transition duration-300 disabled:opacity-70 flex items-center justify-center"
              >
                {isLoading && (
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                )}
                {isLoading ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContatoPage;
