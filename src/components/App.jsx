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

import { useOtherIntersection } from "../hooks";

import { useTheme } from '../hooks';

import {light, dark} from '../theme.js'


function App({ className }) {
  const [theme, toggleTheme] = useTheme(dark, light)

    return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <Pagina className={className} onChangeMode={toggleTheme}>
          <Portada  id="portada" name="Portada" show={false}/>
          <Proyectos id='proyectos' name="Proyectos" show={true}/>
          <SobreMi  id='sobremi' name="Sobre Mi" show={true}/>
          <Contacto  id='contacto' name="Contacto" show={true}/>
        </Pagina>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default styled(App)`
`;
