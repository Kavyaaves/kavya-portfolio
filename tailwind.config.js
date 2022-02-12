module.exports = {
    mode: 'jit',
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],

    theme: {
        colors: {
            light: "#bae6fd",
            medium: "#0891b2",
            dark: "#0c4a6e",
        },
        extend: {
            colors: {
                light: "#bae6fd",
                medium: "#0891b2",
                dark: "#0c4a6e",
            },
            backgroundColor: (theme) => theme('colors'),
            textColor: (theme) => theme('colors'),
        },
        fontFamily: {
            'sans': ['ui-sans-serif', 'system-ui'],
            'serif': ['ui-serif', 'Georgia'],
            'mono': ['ui-monospace', 'SFMono-Regular'],
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
    darkMode: false,
    variants: {
        extend: {},
    },

    plugins: [],
};
