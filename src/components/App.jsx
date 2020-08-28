/* eslint-disable react/prop-types */
import React from 'react';
import styled, {ThemeProvider} from 'styled-components';

import Pagina from './Pagina';
import Portada from './Portada';
import Proyectos from '../sections/Proyectos';
import SobreMi from '../sections/SobreMi';
import Contacto from '../sections/Contacto';
import GlobalStyles from './GlobalStyles';
import {BrowserRouter} from 'react-router-dom'


import { useTheme } from '../hooks';

import {light, dark} from '../theme.js'


function App({ className }) {
  const [theme, toggleTheme] = useTheme(dark, light)

  const portada = React.useRef(null)
  const proyectos = React.useRef(null)
  const sobreMi = React.useRef(null)
  const contacto = React.useRef(null)

  // Se crea la lista de objectos que se pasaran al nav 
  const sections = [
    {
      ref: portada,
      id: 'portada',
      text: 'Portada',
      display: false,
    },
    {
      ref: proyectos,
      id: 'proyectos',
      text: 'Proyectos',
      display: true,
    },
    {
      ref: sobreMi,
      id: 'sobremi',
      text: 'Sobre Mi',
      display: true,
    },
    {
      ref: contacto,
      id: 'contacto',
      text: 'Contacto',
      display: true,
    }
  ]


  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <Pagina className={className} sections={sections} onChangeMode={toggleTheme}>
          <Portada referencia={portada} id="portada" name="Portada" />
          <Proyectos referencia={proyectos} id='proyectos' name="Proyectos" />
          <SobreMi referencia={sobreMi} id='sobremi' name="Sobre Mi"/>
          <Contacto referencia={contacto} id='contacto' name="Contacto"/>
        </Pagina>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default styled(App)`
`;
