module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Futura', 'sans-serif'],
      body: ['aglet-mono', '"IBM Plex Mono"', 'monospace'],
    },

    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
