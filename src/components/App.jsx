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


  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <Pagina className={className} onChangeMode={toggleTheme}>
          <Portada referencia={portada} id="portada" name="Portada" show={false}/>
          <Proyectos referencia={proyectos} id='proyectos' name="Proyectos" show={true}/>
          <SobreMi referencia={sobreMi} id='sobremi' name="Sobre Mi" show={true}/>
          <Contacto referencia={contacto} id='contacto' name="Contacto" show={true}/>
        </Pagina>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default styled(App)`
`;
