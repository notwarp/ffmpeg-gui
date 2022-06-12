/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./src/**/*.{html,js,css,scss}"
    ],
    theme: {
        extend: {},
    },
    variants: {
        extend: {
            height: ['group-hover'],
            width: ['group-hover'],
            fontSize: ['group-hover'],
            margin: ['group-hover'],
            opacity: ['group-hover', 'hover'],
            ringColor: ['hover'],
            textDecoration: ['hover', 'active'],
            ringWidth: ['hover'],
            ringOffsetColor: ['hover'],

            transitionProperty: ['hover'],

        }
    },
    plugins: [],
}
