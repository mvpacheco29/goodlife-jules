import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    // Adicionaremos ./components/ aqui se movermos para a raiz
    // Por enquanto, os componentes estarão em ./app/components/
    './app/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a2a3a',
        secondary: '#2c3e50',
        accent: {
          DEFAULT: '#B87333',
          hover: '#a5622a',
        },
        backgroundBody: '#fdfdfd',
        textPrimary: '#2c3e50',
        textLight: '#e0e0e0',
        textFooter: '#AAAAAA',
        borderLight: '#f0f0f0',
        textMuted: '#555555',
        // Adicionando branco explicitamente se precisarmos referenciá-lo por um nome semântico
        // Embora 'white' já exista por padrão no Tailwind.
        // contentOnDark: '#FFFFFF',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
