const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
    color: {
      
    }
  },
  variants: {
    fontSize: ['responsive', 'hover', 'focus'],
  },
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
    './public/index.html',
  ],
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/ui'),
    require('tailwindcss'),
    require('@tailwindcss/custom-forms'),
    require('autoprefixer'),
  ],
};
