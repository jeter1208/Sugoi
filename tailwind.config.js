module.exports = {
  purge: [
    './app/**/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.{js, jsx}',
    './app/views/**/*.html.erb',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
