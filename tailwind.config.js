module.exports = {
    mode: 'jit',
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                "light": "#bae6fd",
                "medium": "#0891b2",
                "dark": "#0c4a6e",
            },
            backgroundColor: {
                "light": "#bae6fd",
                "medium": "#0891b2",
                "dark": "#0c4a6e",
            },
        },
    },
    darkMode: false,
    variants: {
        extend: {},
    },
    fontFamily: {
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
    plugins: [],
};
