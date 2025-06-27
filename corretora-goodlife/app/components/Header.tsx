import Link from 'next/link';
import React from 'react';

// Ícone de Menu (Hambúrguer) e Fechar para mobile
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Header: React.FC = () => {
  // Estado para controlar a visibilidade do menu mobile
  // Por enquanto, vamos simular com CSS, mas isso precisaria de JS para interatividade real.
  // Para uma implementação puramente com Tailwind, o menu mobile pode ser sempre visível e estilizado.
  // Ou podemos usar um checkbox hack (não ideal em React).
  // Para este passo, focarei na estrutura e estilos, assumindo que o JS virá depois ou será simples.
  // Para fins de demonstração inicial, o menu mobile estará sempre visível em telas pequenas.
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false); // Necessário para interatividade

  const navLinks = [
    { href: '/', label: 'Início' },
    {
      label: 'Seguros',
      subLinks: [
        { href: '/seguros/vida', label: 'Vida' },
        { href: '/seguros/viagem', label: 'Viagem' },
        { href: '/seguros/odontologico', label: 'Odontológico' },
      ],
    },
    { href: '/sobre-nos', label: 'Sobre Nós' },
    { href: '/ajuda', label: 'Ajuda' },
    { href: '/contato', label: 'Contato' },
  ];

  return (
    <header className="bg-primary text-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white">
          GoodLife Seguros
        </Link>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            link.subLinks ? (
              <div key={link.label} className="relative group">
                <button className="hover:text-gray-300 focus:outline-none">
                  {link.label}
                  {/* Ícone de dropdown (opcional) */}
                  <svg className="w-4 h-4 inline-block ml-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white text-secondary rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
                  {link.subLinks.map((subLink) => (
                    <Link key={subLink.href} href={subLink.href} className="block px-4 py-2 text-sm hover:bg-gray-100">
                      {subLink.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={link.href} href={link.href} className="hover:text-gray-300">
                {link.label}
              </Link>
            )
          ))}
          <Link href="https://wa.me/SEUNUMERO" target="_blank" rel="noopener noreferrer" className="bg-accent hover:bg-accent-hover text-white font-bold py-2 px-4 rounded-full transition duration-300">
            Fale no WhatsApp
          </Link>
        </nav>

        {/* Botão Menu Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
            aria-label="Abrir menu"
          >
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {/* A interatividade real (abrir/fechar) requer JavaScript.
          O estado `isMobileMenuOpen` controlará isso.
          A classe 'hidden' será removida ou adicionada com base nesse estado.
      */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} absolute top-20 left-0 right-0 bg-primary shadow-lg z-40`}>
        <nav className="flex flex-col items-center space-y-4 py-4">
          {navLinks.map((link) => (
            link.subLinks ? (
              <div key={link.label} className="w-full text-center">
                <span className="text-white py-2 block">{link.label}</span>
                {link.subLinks.map((subLink) => (
                  <Link key={subLink.href} href={subLink.href} className="block py-2 text-gray-300 hover:text-white w-full hover:bg-secondary" onClick={() => setIsMobileMenuOpen(false)}>
                    {subLink.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link key={link.href} href={link.href} className="py-2 text-white hover:bg-secondary w-full text-center" onClick={() => setIsMobileMenuOpen(false)}>
                {link.label}
              </Link>
            )
          ))}
          <Link href="https://wa.me/SEUNUMERO" target="_blank" rel="noopener noreferrer" className="bg-accent hover:bg-accent-hover text-white font-bold py-3 px-6 rounded-full transition duration-300 mt-4 inline-block">
            Fale no WhatsApp
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
