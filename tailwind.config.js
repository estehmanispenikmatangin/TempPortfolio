/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        container:{
          center: true,
          padding: '16px',

        },
        extend: {
            colors: {
                clifford: "#da373d",
                primary: " #14b8a6",
                dark: '#0f172a',
                secondary : '#64748b',
            },
            fontFamily: {
                lora: "Lora, serif",
            },
            screens:{
              '2xl' : '1320px',
            },
        },
    },
    plugins: [],
};
