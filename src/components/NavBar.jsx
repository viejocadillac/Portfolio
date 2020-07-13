import React from 'react';
import styled, { ThemeContext } from 'styled-components';
import Fade from 'react-reveal/Fade';

import Container from './Container'

import { useToggleShowOn } from '../hooks.js'


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

  const SCROLL_DELAY = 150
  const showNombre = useToggleShowOn(SCROLL_DELAY, false)

  return (
    <header className={className}>
      <Container className="content">
        <Fade delay={0} duration={500} left big collapse when={showNombre}>
          <div >
            <Nombre >Mathias Moreira</Nombre>
            <p>Desarrollador</p>
          </div>

        </Fade>

        <div className="flex">
          <Fade when={showNombre}>
            <nav>
              <ul className="links">
                <li >Proyectos</li>
                <li >Sobre mi</li>
                <li >Contacto</li>
              </ul>
            </nav>
          </Fade>
          <button className="modo" onClick={toggleTheme}>Modo<div className="circle" ></div></button>
        </div>
      </Container>
    </header>
  )
}

export default styled(NavBar)`
    font-family: 'Raleway', sans-serif;
    color: ${({ theme }) => theme.colors.primario};
    background-color: ${({ theme }) => theme.colors.fondo};
    position: fixed;
    width: 100vw;
    z-index:2;
    top: 0;
    left: 0;
    justify-content: space-between;
    align-items: center;

    .flex {
      display:flex;
    }

    nav {
      display: flex;
    }

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


  ul.links {
    list-style: none;
    display:flex;

    & > li {
      margin-right: 1em;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.texto};

      &:last-child {
        margin-right: 0em;
      }
    }
  }


  .link {
      margin-right: 1em;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.texto};
  }

  .modo{
    display:flex;
    align-items: center;
    margin-left:1em;
    float: right;
    
    background: none;
    border: none;

    &:hover {
      cursor: pointer;
    }
    
  }




`;