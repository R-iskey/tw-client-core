const TailwindAnimate = require('tailwindcss-animate');

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
          inactive: {
            DEFAULT: 'var(--primary-inactive)',
            foreground: 'var(--primary-inactive-foreground)',
          },
          hover: {
            DEFAULT: 'var(--primary-hover)',
            bright: 'var(--primary-hover-bright)',
          },
        },
        border: 'var(--border)',
        input: {
          DEFAULT: 'var(--input)',
          background: 'var(--input-background)',
          hover: 'var(--input-hover)',
        },
        switch: {
          DEFAULT: 'var(--switch-background)',
          foreground: 'var(--switch-foreground)',
        },
        select: {
          DEFAULT: 'var(--select-background)',
          foreground: 'var(--select-foreground)',
        },
        ring: 'var(--ring)',
        background: 'var(--background)',
        foreground: {
          DEFAULT: 'var(--foreground)',
          reversed: 'var(--foreground-reversed)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
          inactive: {
            DEFAULT: 'var(--secondary-inactive)',
            foreground: 'var(--secondary-inactive-foreground)',
          },
          hover: {
            DEFAULT: 'var(--secondary-hover)',
            bright: 'var(--secondary-hover-bright)',
          },
        },
        'secondary-muted': {
          DEFAULT: 'var(--secondary-muted)',
          hover: {
            DEFAULT: 'var(--secondary-muted-hover)',
            bright: 'var(--secondary-muted-hover-bright)',
          },
        },
        passive: {
          hover: {
            DEFAULT: 'var(--passive-hover)',
          },
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        hover: {
          DEFAULT: 'var(--hover)',
          bright: 'var(--hover-bright)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        // Customs
        badge: {
          yellow: {
            DEFAULT: 'var(--badge-yellow)',
            foreground: 'var(--badge-yellow-foreground)',
          },
          red: {
            DEFAULT: 'var(--badge-red)',
            foreground: 'var(--badge-red-foreground)',
          },
        },
        menuItem: {
          expended: 'var(---menu-expended)',
          selected: 'var(--selected)',
        },
        userIcon: 'var(--bg-user-icon)',
        gradient: {
          DEFAULT: 'var(--gradient-default)',
          foreground: 'var(--gradient-foreground)',
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)',
        popover: '48px',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        rotate: {
          '100%': { transform: 'rotate(360deg)' },
        },
        prixClipFix: {
          '0%': {
            'clip-path': 'polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0)',
          },
          '25%': {
            'clip-path': 'polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0)',
          },
          '50%': {
            'clip-path': 'polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%)',
          },
          '75%': {
            'clip-path': 'polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%)',
          },
          '100%': {
            'clip-path': 'polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        rotate: 'rotate 1s linear infinite',
        prixClipFix: 'prixClipFix 2s linear infinite',
      },
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1260px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [TailwindAnimate],
  darkMode: ['class'],
};
