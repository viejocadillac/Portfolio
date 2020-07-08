/* eslint-disable react/prop-types */
import React from 'react';
import {ThemeProvider} from 'styled-components';
import NavBar from './NavBar';
import ToTop from './ToTop';

import {light, dark} from '../theme.js'

const Pagina = ({ children }) => {

  const [lightThemeActive, setLightThemeActive] = React.useState(true)


  const toggleTheme = ()=>{
    setLightThemeActive((prev) => !prev)
  }
  
  return (
  <ThemeProvider theme={lightThemeActive ? light : dark}>
    <NavBar toggleTheme={toggleTheme}/>
    {children}
    <ToTop />
  </ThemeProvider>
)};

export default Pagina;
