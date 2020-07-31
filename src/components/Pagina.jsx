/* eslint-disable react/prop-types */
import React from 'react';
import NavBar from './NavBar';
import ToTop from './ToTop';

const Pagina = ({ children, onChangeMode }) => {


  
  // Se filtran los elementos que van a ser mostrados en la navegacion 
  const links = children.filter((child) => child.props.referencia).map((child) => {
    return {
      ref: child.props.referencia,
      id: child.props.id,
      text:child.props.name,
      show:child.props.show
    }
  });

  const newChild = children.map((child, i) => React.cloneElement(child, {ref:links[i].referencia}))
  
  return (
  <>
    <NavBar links={links} toggleTheme={onChangeMode}/>
      {newChild}
    <ToTop />
  </>
)};

export default Pagina;
