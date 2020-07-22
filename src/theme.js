let LIGHT = true;
let MODE = LIGHT ? 'light' : 'dark'


const common = {
    breakpoints:{
        md: '800px',

    },
}

const lightTheme = {
    name: 'light',
    colors: {
        primario: '#5ABFAD',
        sectionTitle: '#AADEDC',
        navLinks: '#7EADBF',
        accent: '#F27E63',
        fondo1: 'White',
        claro: '#FCFFE5',
        oscuro: '#233B4A',
        navBarBackground:'#FCFFE5',
        navBarText:'#233B4A',
        overlay: '#5ABFAD',
        sectionTitle: '#5ABFAD',
        body:'white',

    }
}

const darkTheme = {
    name: 'dark',
    colors:{
        primario: '#5ABFAD',
        accent: '#F27E63',
        fondo: '#233B4A',
        claro: '#FCFFE5',
        navBarBackground:'#233B4A',
        navBarText:'#FCFFE5',
        oscuro: '#233B4A',
        overlay: '#233B4A',
        sectionTitle: '#FCFFE5',
        body: '#233B4A',

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


