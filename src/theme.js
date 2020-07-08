let LIGHT = true;
let MODE = LIGHT ? 'light' : 'dark'


const common = {
    breakpoints:{

    },
}

const lightTheme = {
    name: 'light',
    colors: {
        // Azul
        primario: '#ef6408',
        // Blanco
        fondo: 'White',
        // Gris claro
        claro: '#707070',
        fondoNav: 'White',
        texto: '#707070',

    }
}

const darkTheme = {
    name: 'dark',
    colors:{
        // Naranja
        primario: '#ef6408',
        // Casi Negro
        fondo: '#303035',
        // Gris claro
        claro: '#707070',
        fondoNav: '#101010',
        texto: 'White',

    },


}

export const light = {
    ...common,
    ...lightTheme,
    colors: {...lightTheme.colors, otherThemeBackground:darkTheme.colors.fondo}
}

export const dark = {
    ...common,
    ...darkTheme,
    colors: {...darkTheme.colors, otherThemeBackground:lightTheme.colors.fondo}
}


