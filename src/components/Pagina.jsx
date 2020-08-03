/* eslint-disable react/prop-types */
import React from 'react';
import NavBar from './NavBar';
import ToTop from './ToTop';

const Pagina = ({ children, onChangeMode }) => {


  
  // Se filtran los elementos que van a ser mostrados en la navegacion 
  const links = children.filter((child) => child.props.referencia).map((child) => {
    return {
      id: `nav-${child.props.id}`,
      text:child.props.name,
      show:child.props.show,
    }
  });

  

  return (
  <>
    <NavBar links={links} toggleTheme={onChangeMode}/>
      {children}
    <ToTop />
  </>
)};

export default Pagina;
