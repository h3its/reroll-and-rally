import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'
import daisyui from 'daisyui'

export default {
  content: ['./src/**/*.{html,js,svelte}'],
  theme: {
    extend: {},
  },
  plugins: [forms, typography, daisyui],
  daisyui: {}
}