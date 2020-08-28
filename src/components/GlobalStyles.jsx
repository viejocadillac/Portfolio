import {createGlobalStyle} from 'styled-components';

/**
 * Cada nombre de clase debe comenzar por g- para 
 * indicar al momento de utilizarla que proviene
 * de los estilos globales.
 */
const GlobalStyles = createGlobalStyle`

/* Layout */

.g-grid {
  display:grid;
}



/* Estilos */

body {
  background-color: ${({theme})=>theme.colors.body};
}

a {
    text-decoration: none;
    color: rgba(0,0,0,0.7);
}

.g-circle {
    border-radius: 50%;
}



`

export default GlobalStyles;