import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				purple: 'rgb(var(--purple) / <alpha-value>)',
				'space-purple': 'rgb(var(--space-purple) / <alpha-value>)',
				'blue-grey': 'rgb(var(--blue-grey) / <alpha-value>)',
				'mid-grey': 'rgb(var(--mid-grey) / <alpha-value>)',
				'gold-yellow': 'rgb(var(--gold-yellow) / <alpha-value>)',
				'section-title': 'rgb(var(--section-title) / <alpha-value>)',
				'section-title-small': 'rgb(var(--section-title-small) / <alpha-value>)',
				'section-subtitle': 'rgb(var(--section-subtitle) / <alpha-value>)',
			},
			fontFamily: {
				industry: ['industry-inc-base', 'sans-serif'],
				roboto: ['roboto', 'sans-serif'],
				'roboto-condensed': ['roboto-condensed', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
export default config
