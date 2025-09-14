/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(220 20% 15%)',
        foreground: 'hsl(220 10% 90%)',
        surface: 'hsl(220 20% 20%)',
        accent: 'hsl(170 80% 45%)',
        primary: 'hsl(240 90% 50%)',
        success: 'hsl(140 70% 50%)',
        danger: 'hsl(0 80% 60%)',
      },
      borderRadius: {
        'lg': '20px',
        'md': '12px',
        'sm': '8px',
      },
      spacing: {
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
      },
      boxShadow: {
        'card': '0 4px 12px hsla(0, 0%, 0%, 0.25)',
        'focus': '0 0 0 3px hsl(170 80% 45% / 0.7)',
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.2, 1) infinite',
      },
      transitionDuration: {
        '100': '100ms',
        '200': '200ms',
      },
      transitionTimingFunction: {
        'custom': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
