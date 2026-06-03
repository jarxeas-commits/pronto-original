import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'surface': '#131313',
        'surface-dim': '#131313',
        'surface-bright': '#393939',
        'surface-container-lowest': '#0e0e0e',
        'surface-container-low': '#1b1b1b',
        'surface-container': '#20201f',
        'surface-container-high': '#2a2a2a',
        'surface-container-highest': '#353535',
        'on-surface': '#e5e2e1',
        'on-surface-variant': '#cbc6bc',
        'inverse-surface': '#e5e2e1',
        'inverse-on-surface': '#313030',
        'outline': '#949088',
        'outline-variant': '#49473f',
        'primary': '#ffffff',
        'on-primary': '#32302b',
        'secondary': '#cbc5c1',
        'on-secondary': '#33302d',
        'tobacco-amber': '#B5813A',
        'faded-indigo': '#3A4D6B',
        'paper-white': '#F5F0E8',
        'charcoal-ink': '#0E0C0A',
        'background': '#131313',
        'on-background': '#e5e2e1',
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Merriweather', 'serif'],
        'mono': ['Courier Prime', 'monospace'],
      },
      fontSize: {
        'display-xl': ['72px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '900' }],
        'headline-lg': ['48px', { lineHeight: '1.2', fontWeight: '900' }],
        'headline-lg-mobile': ['32px', { lineHeight: '1.2', fontWeight: '900' }],
        'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'label-mono': ['13px', { lineHeight: '1', letterSpacing: '0.05em', fontWeight: '400' }],
        'label-tag': ['11px', { lineHeight: '1', letterSpacing: '0.1em', fontWeight: '700' }],
      },
      spacing: {
        'margin-page': '64px',
        'margin-mobile': '24px',
        'gutter': '32px',
        'editorial-offset': '120px',
      },
      backgroundImage: {
        'stripe-pattern': 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(245, 240, 232, 0.03) 10px, rgba(245, 240, 232, 0.03) 20px)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} as Config
