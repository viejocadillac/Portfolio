import React from 'react';
import styled from 'styled-components';

import Container from './Container'

import {useScrollRef, useResize} from '../hooks.js'


const Nombre = styled.h1`
    position: relative;
    margin: 0;
    font-size: 1.5em;
    line-height: 1em;

`

const BigNombre = ({className})=>{
    return (
        <div className={className}>
            <span className="nombre-grande">Mathias</span>
            <span className="apellido-grande">Moreira</span>
        </div>
    )

}

const fromLeft = (from, progress, to, delay) => {
  return `transform: translate(${Math.min(from + (Math.max(-delay + progress, 0)),to)}px, 0)`
}


const NavBar = ({className}) => {
  const refNombre = React.useRef(null)

  let rect;
  let from;

  

  React.useLayoutEffect(()=>{
    // Se ejecuta al montar para acomodar el componente fuera del borde
    rect = refNombre.current.getBoundingClientRect();
    from = -rect.left - refNombre.current.offsetWidth 
    refNombre.current.style = `transform: translateX(${from}px)`
  })

  useResize((width)=>{
    
    rect = refNombre.current.getBoundingClientRect();
    from = -rect.left - refNombre.current.offsetWidth

    console.log(from)
    refNombre.current.style = `transform: translateX(${from}px)`
  });

  const SCROLL_DELAY = 100
  useScrollRef((scrollPos) => {
    refNombre.current.style = fromLeft(from, scrollPos, 0, SCROLL_DELAY)
  })

 

    
  return (
      <header className={className}>
        <Container className="content">
          <Nombre  ref={refNombre}>Mathias Moreira</Nombre>



          <nav>
            <ul className="links">
                <li className="link">Proyectos</li>
                <li className="link">Sobre mi</li>
                <li className="link">Contacto</li>
            </ul>
          </nav>

        </Container>
    </header>
  )
}

  export default styled(NavBar)`
    font-family: 'Raleway', sans-serif;
    color: #707070;
    background-color: white;
    position: fixed;
    width: 100%;
    z-index:2;
    top: 0;
    left: 0;
    justify-content: space-between;
    align-items: center;

    .content {
      display: flex;
      justify-content: space-between;
      align-items: center;

    }


  .links {
      list-style: none;
      display:flex;
  }

  .link {
      margin-right: 1em;
      font-weight: 600;
  }

  .link:last-child {
      margin-right: 0em;
  }


`;