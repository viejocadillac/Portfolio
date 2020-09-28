/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

import { useScroll } from '../hooks';

const Portada = ({ referencia, className }) => {

  const imagen = React.useRef();

  // Parallax effect
  useScroll((scrollPos) => {
    imagen.current.style.transform = `translate( -50%, calc(-50% + ${scrollPos * 0.5}px))`;
    referencia.current.style.opacity = 1 - scrollPos / 400;
  });

  return (
    <section ref={referencia} id="portada" className={className}>
      <div className="overlay" />
      <div ref={imagen} className="imagen" />

      <div className="links-container">
        <Zoom left opposite cascade>
          <h2>Hola, soy Mathias,</h2>
        </Zoom>
        <Fade>
          <p>te invito a recorrer mi portfolio!</p>
        </Fade>
      </div>
    </section>
  );
};

export default styled(Portada)`
  background-color: ${({ theme }) => theme.colors.fondo};
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  .imagen {
    position: absolute;
    overflow: hidden;
    top:50%;
    left: 50%;
    
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background-image: url('${process.env.PUBLIC_URL}/fondo_portada1.jpg');
    background-size: cover;
    background-position: center;
    opacity: 0.2;
  }

  .overlay {
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.overlay};
  }

  .links-container {
    position: relative;
    text-align:center;
    font-size: 2rem;
    font-weight: 600;
    z-index: 3;
    font-family: 'DM Serif Display', serif;
    color: ${({ theme }) => theme.colors.claro};
  
    p {
      margin: 0;
      font-size: 0.5em;
      font-weight: 500;
    }
  }
`;
