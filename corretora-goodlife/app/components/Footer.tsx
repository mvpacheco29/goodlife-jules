import Link from 'next/link';
import React from 'react';

// Ícone do Instagram (exemplo simples)
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> {/* Placeholder, um ícone real de Insta seria melhor */}
  </svg>
);
// Um ícone de Instagram mais próximo do real (simplificado)
const InstagramIconReal = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.059 1.689.073 4.948.073s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
);


const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-textFooter py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Seção Sobre/Empresa */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">GoodLife Seguros</h3>
            <p className="text-sm">
              Protegendo o que mais importa para você. Oferecemos consultoria especializada para encontrar o seguro ideal para suas necessidades.
            </p>
          </div>

          {/* Seção Links Úteis (opcional) */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/sobre-nos" className="hover:text-white">Sobre Nós</Link></li>
              <li><Link href="/seguros/vida" className="hover:text-white">Seguro de Vida</Link></li>
              <li><Link href="/seguros/viagem" className="hover:text-white">Seguro Viagem</Link></li>
              <li><Link href="/seguros/odontologico" className="hover:text-white">Plano Odontológico</Link></li>
              <li><Link href="/contato" className="hover:text-white">Contato</Link></li>
              <li><Link href="/ajuda" className="hover:text-white">FAQ</Link></li>
            </ul>
          </div>

          {/* Seção Contato e Social */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Entre em Contato</h3>
            <address className="not-italic text-sm space-y-2">
              <p>Rua Exemplo, 123 - Cidade, UF</p>
              <p>Telefone: (XX) XXXXX-XXXX</p>
              <p>Email: contato@goodlifeseguros.com.br</p>
            </address>
            <div className="mt-6">
              <h4 className="text-md font-semibold text-white mb-2">Siga-nos</h4>
              <div className="flex space-x-4">
                <Link href="https://instagram.com/goodlifeseguros_placeholder" target="_blank" rel="noopener noreferrer" aria-label="Instagram da GoodLife Seguros" title="Instagram da GoodLife Seguros" className="text-textFooter hover:text-white">
                  <InstagramIconReal />
                </Link>
                {/* Adicionar outros ícones sociais aqui, se necessário */}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; {currentYear} Corretora GoodLife Seguros. Todos os direitos reservados.</p>
          <p className="mt-1">CNPJ: XX.XXX.XXX/0001-XX - SUSEP: XXXXXX</p>
          <p className="mt-2">
            <Link href="/termos-de-uso" className="hover:text-white underline">Termos de Uso</Link> | <Link href="/politica-de-privacidade" className="hover:text-white underline">Política de Privacidade</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
