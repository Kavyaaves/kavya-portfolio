module.exports = {
    content: [
        './public/index.html',
        './src/**/*.{js,jsx,ts,tsx}',
    ],

    theme: {
        colors: {
            light: "#f5f5f4",
            medium: "#6b7280",
            dark: "#000000",
        },
        extend: {
            backgroundColor: (theme) => theme('colors'),
            textColor: (theme) => theme('colors'),
            backgroundImage: (theme) => ({
                kavya: "url('/images/kavya.jpeg')",
            }),
        },
        fontFamily: {
            'sans': ['ui-sans-serif', 'system-ui'],
            'serif': ['ui-serif', 'Georgia'],
            'mono': ['Fira Code', 'ui-monospace', 'SFMono-Regular'],
            'display': ['Oswald'],
            'body': ['"Open Sans"'],
            'dancing': ['Dancing Script'],
            'elite': ['Special Elite'],
            'recursive': [
                'Recursive',
                'ui-monospace',
                'SFMono-Regular',
                'ui-serif',
                'Georgia',
            ],
            // mono: ['ui-monospace', 'SFMono-Regular', 'ui-sans-serif', 'system-ui'],
        },
    },
    darkMode: 'media',
    plugins: [],
};
