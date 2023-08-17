import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        colors: {
            white: '#ffffff',
            blue: {
                light: '#bfdee8',
                dark: '#00799f',
            },
            red: {
                light: '#ff9393',
                dark: '#910505',
            },
            green: {
                light: '#50f650',
                dark: '#028202',
            },
            grey: {
                light: '#cccccc',
                dark: '#707070',
            },
        },

        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            gridTemplateColumns: {
                'small-header': '50px 1fr 50px',
                'big-header': '80px 1fr 65px',
            },
        },
    },
    plugins: [],
}
export default config
