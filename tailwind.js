module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: [
        './*.php',
        './templates/**/*.php',
        './build/js/**/*.js',
    ],
    theme: {
        container: {
            padding: '1.5rem',
        },
        extend: {
            colors: {
                link: {
                    'default': '#3182ce',
                    'hover': '#63b3ed',				
                },
                yellow: {
                    100: '#F5EE24',
                },
                green: {
                    100: '#AAD03F',
                },
            },
            fontSize: {
                xxs: '0.675rem',
            },
            lineHeight: {
                tighter: '1.125',
            },
			backgroundImage: {
			 'logo': "url('https://i.imgur.com/dIMSbrm.png')",
			 'header-texture': "url('https://i.imgur.com/0KoRwut.jpg')",	
			},		
        }
    },
    variants: {
        textColor: ['responsive', 'hover', 'focus', 'visited'],
    },
    plugins: [
        ({addUtilities}) => {
            const utils = {
                '.translate-x-half': {
                    transform: 'translateX(50%)',
                },
            };
            addUtilities(utils, ['responsive'])
        }
    ]
};
