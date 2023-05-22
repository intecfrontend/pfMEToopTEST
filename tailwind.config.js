/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			primary: 'Orbitron',
			secondary: 'Rajdhani',
			tertiary: 'Aldrich',
			space: 'Space Mono, monospace',
		},
		container: {
			padding: {
				DEFAULT: '15px',
			},
		},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '960px',
			xl: '1200px',
		},
		extend: {
			backgroundImage: {
				about: "url(../images/Ara1.png)"
				// about: "url('./images/Ara1.jpg')",	
			},
			opacity: {
				'50': '0.5'
			}
		},
	},
	plugins: [],
}

