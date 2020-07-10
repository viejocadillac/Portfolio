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

.g-center-positioned {

}


/* Estilos */
a {
    text-decoration: none;
}

.g-circle {
    border-radius: 50%;
}

`

export default GlobalStyles;