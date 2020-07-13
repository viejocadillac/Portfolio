/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Container from './Container';
import ScrollButton from './ScrollButton';

import { useScroll, useResize, useToggleShowOn } from '../hooks.js'


const Rectangulo = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  margin: 0 auto;
  display:flex;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - 14em);
  max-width: 960px;
  width: calc(100vw - 20rem);
  transform: translate(-50%, -50%);

  h2 {
    text-align: center;
    font-weight: 800;
    font-size: 5em;
    margin: 0;
    text-transform: uppercase;
    position: relative;
    z-index: 2;
    color: ${({ theme }) => theme.colors.primario};
    transition: transform 0.5s ease-in-out;
    &:hover {
      transform: scale(1.1) translateZ(0);
    }
  }
 


`;

const Portada = ({ className }) => {

  const SCROLL_DELAY = 200

  const showTitulares = useToggleShowOn(SCROLL_DELAY, false)



  const scrollButtonHandler = () => {

  };

  const refRectBlanco = React.useRef()
  const refImagen = React.useRef()


  useScroll((scrollPos) => {
    window.requestAnimationFrame(()=>{
     
      refImagen.current.style.opacity = 1 / (scrollPos * 0.01)
      if(scrollPos > 400) {
        refImagen.current.style.opacity = 0
        refRectBlanco.current.style.opacity = 0
      }else {
        refRectBlanco.current.style.opacity = 1
      }
    })
    
  })

  return (
    <main className={className}>
      <Container className="container-portada">
        <Rectangulo className="rectangulo">
          <div ref={refImagen} className="imagen"></div>
          <div ref={refRectBlanco} className="rectangulo-blanco"></div>
          <Fade duration={2000} left big collapse cascade when={!showTitulares}>
            <h2>Proyectos.</h2>
          </Fade>

          <Fade duration={2000} big collapse cascade when={!showTitulares}>
            <h2>Sobre mi.</h2>
          </Fade>

          <Fade duration={2000} right big collapse cascade when={!showTitulares}>
            <h2>Contacto.</h2>
          </Fade>
        </Rectangulo>
        <ScrollButton className="scroll-button" onClick={scrollButtonHandler} />
      </Container>
    </main>
  )
};

export default styled(Portada)`
  background-color: ${({ theme }) => theme.colors.fondo};
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .imagen {
    position: absolute;
    z-index: 1;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background-image: url('./fondo_portada1.jpg');
    background-size: cover;
    background-position: center;
    transition: opacity 1s ease;
    opacity: 0.5;

  }

  .rectangulo-blanco {
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    width: calc(100% / 3);
    height: calc(100% + 4em);
    border: 15px solid white;
    transition: opacity 1s ease;
  }

  .caracter {
    opacity: 0.1;
  }

  .container-portada{
    width: 100%;
    position:relative;
    margin: 0 auto;
  }

  .scroll-button {
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;
