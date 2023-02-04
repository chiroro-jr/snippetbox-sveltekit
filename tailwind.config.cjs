/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			blue: '#34495e',
			green: '#62cb31',
			white: '#ffffff',
			red: '#c0392b',
			transparent: 'transparent',
			gray: {
				1: '#f7f9fa',
				2: '#f1f3f6',
				3: '#e4e5e7',
				4: '#6a6c6f'
			}
		},
		maxWidth: {
			container: '50rem'
		},
		fontFamily: {
			'ubuntu-mono': ['Ubuntu Mono', 'monospace', 'sans-serif']
		},
		extend: {}
	},
	plugins: []
}
