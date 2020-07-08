import React from 'react';
import styled, { ThemeContext } from 'styled-components';
import Fade from 'react-reveal/Fade';

import Container from './Container'

import { useScrollRef, useResize } from '../hooks.js'


const Nombre = styled.h1`
    position: relative;
    margin: 0;
    font-size: 1.5em;
    line-height: 1em;

`

const BigNombre = ({ className }) => {
  return (
    <div className={className}>
      <span className="nombre-grande">Mathias</span>
      <span className="apellido-grande">Moreira</span>
    </div>
  )

}

const fromLeft = (from, progress, to, delay) => {
  return `transform: translate(${Math.min(from + (Math.max(-delay + progress, 0)), to)}px, 0)`
}


const NavBar = ({ className, toggleTheme }) => {


  const refNombre = React.useRef(null)

  let rect;
  let from;




  const SCROLL_DELAY = 150

  const [showNombre, setShowNombre] = React.useState(false)
  useScrollRef((scrollPos) => {
    if (scrollPos > SCROLL_DELAY && !showNombre) {
      setShowNombre(true)
    }

    if (scrollPos < SCROLL_DELAY && showNombre) {
      setShowNombre(false)
    }

  })




  return (
    <header className={className}>
      <Container className="content">
        <Fade delay={0} duration={500} left big collapse when={showNombre}>
          <div>
            <Nombre >Mathias Moreira</Nombre>
            <p>Desarrollador</p>
          </div>

        </Fade>



        <nav>
          <ul className="links">
            <li className="link">Proyectos</li>
            <li className="link">Sobre mi</li>
            <li className="link">Contacto</li>
            <li className="link modo" onClick={toggleTheme}>Modo<div className="circle" ></div></li>
          </ul>
        </nav>

      </Container>
    </header>
  )
}

export default styled(NavBar)`
    font-family: 'Raleway', sans-serif;
    color: ${({ theme }) => theme.colors.primario};
    background-color: ${({ theme }) => theme.colors.fondo};
    position: fixed;
    width: 100%;
    z-index:2;
    top: 0;
    left: 0;
    justify-content: space-between;
    align-items: center;

    p {
      margin: 0;
      color: ${({theme})=> theme.colors.texto}
    }

    .content {
      display: flex;
      justify-content: space-between;
      align-items: center;

    }

    .circle {
      background-color: ${({ theme }) => theme.colors.otherThemeBackground};
      width: 1em;
      height: 1em;
      border-radius: 50%;
      margin-left: 0.4em;

      
    }


  .links {
      list-style: none;
      display:flex;
  }

  .link {
      margin-right: 1em;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.texto};
  }
  .modo{
    display:flex;
    align-items: center;
    margin-left:1em;

    &:hover {
      cursor: pointer;
    }
    
  }

  .link:last-child {
      margin-right: 0em;
  }


`;