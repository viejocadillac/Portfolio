/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { NavHashLink as NavLink } from 'react-router-hash-link';


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

      <div className="presentacion">
        <Zoom opposite>
          <h2 className="presentacion--nombre">Hola, soy Mathias,</h2>
        </Zoom>
        <Fade>
          <p className="presentacion--descripcion">te invito a recorrer mi portfolio!</p>
        </Fade>
        <NavLink to="#contacto" className="presentacion--contactame">Contactame</NavLink>
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

  .presentacion {
    text-align:center;
    z-index: 3;
    font-family: 'DM Serif Display', serif;
    color: ${({ theme }) => theme.colors.textoPortada};
    margin: 0 1rem;

    &--nombre {
      font-size: 2.3rem;
      font-weight: 600;
      margin: 0;
    }
  
    &--descripcion {
      margin: 0;
      margin-bottom: 4rem;
      font-size: 1em;
      font-weight: 500;
    }

    &--contactame {
      font-size: 0.8em;
      padding: 0.5em 1em;
      background: none;
      font-family: 'DM Serif Display', serif;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.accent};
      letter-spacing: 2px;
      border: 2px solid ${({ theme }) => theme.colors.accent};
      transition: border 0.3s ease-in-out;

      &:hover {
        border: 2px solid white;
        cursor: pointer;
      }
    }
  }
`;
