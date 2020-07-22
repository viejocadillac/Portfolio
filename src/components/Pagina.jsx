/* eslint-disable react/prop-types */
import React from 'react';
import NavBar from './NavBar';
import ToTop from './ToTop';


const Pagina = ({ children, onChangeMode }) => {


  
  return (
  <>
    <NavBar toggleTheme={onChangeMode}/>
    {children}
    <ToTop />
  </>
)};

export default Pagina;
