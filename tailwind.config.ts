import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				purple: 'rgb(var(--purple) / <alpha-value>)',
				'space-purple': 'rgb(var(--space-purple) / <alpha-value>)',
				'blue-grey': 'rgb(var(--blue-grey) / <alpha-value>)',
			},
			fontFamily: {
				'roboto-condensed': ['roboto-condensed', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
export default config
