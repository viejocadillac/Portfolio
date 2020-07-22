/* eslint-disable react/prop-types */
import React from 'react';
import styled, {ThemeProvider} from 'styled-components';

import Pagina from './Pagina';
import Portada from './Portada';
import Proyectos from '../sections/Proyectos';
import SobreMi from '../sections/SobreMi';
import Contacto from '../sections/Contacto';
import GlobalStyles from './GlobalStyles';

import {light, dark} from '../theme.js'



function App({ className }) {


  const [lightThemeActive, setLightThemeActive] = React.useState(true)


  const toggleTheme = ()=>{
    setLightThemeActive((prev) => !prev)
  }

  return (
    <ThemeProvider theme={lightThemeActive ? light : dark}>
      <GlobalStyles/>
      <Pagina className={className} onChangeMode={toggleTheme}>
        <Portada />
        <Proyectos />
        <SobreMi />
        <Contacto />
      </Pagina>
    </ThemeProvider>
  );
}

export default styled(App)`
`;
