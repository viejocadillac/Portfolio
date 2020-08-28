/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Container from './Container';
import ScrollButton from './ScrollButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useScroll, useResize, useToggleShowOn } from '../hooks.js'


const Portada = ({ id, referencia, className, show }) => {

  const imagen = React.useRef()

  // Parallax effect
  useScroll((scrollPos) => {
    imagen.current.style.transform = `translate( -50%, calc(-50% + ${scrollPos * 0.5}px))`
  })

  
  return (
    <section ref={referencia} id="portada" className={className}>
      <div className="overlay"></div>
      <div ref={imagen} className="imagen"></div>
  
      <div className="links-container">
        <h2>Hola, soy <i>Mathias</i>,</h2>
        <p>te invito a recorrer mi portfolio!</p>
      </div>
      <FontAwesomeIcon className="icon" icon="chevron-down" size="2x"/>
    </section>
  )
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


  .icon {
    position: absolute;
    display: block;
    color: ${({theme}) => theme.colors.accent};
    z-index: 3;
    top: 100vh;
    animation: jump 0.5s ease infinite;
    animation-direction: alternate;
  }

  @keyframes jump {
    0%{
      top: calc(90% + 25px);
    }
    100%{
      top: calc(90% + 20px);
    }
  }
  

  .imagen {
    position: absolute;
    overflow: hidden;
    top:50%;
    left: 50%;
    
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background-image: url('./fondo_portada1.jpg');
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
     
    
    background-color: ${({theme})=> theme.colors.overlay};
  }

  .links-container {
    position: relative;
    text-align: center;
    font-size: 2rem;
    padding: 1em;
    line-height: 1.5em;
    z-index: 3;
    color: ${({theme})=> theme.colors.claro};

    p{
      font-size: 1.2rem;
    }


  }

  .bottom-circle {
    background-color: ${({theme})=> theme.colors.accent};
    position:absolute;
    bottom: -50px;
    border-radius: 50%;
    width: 100px;
    height: 100px;

  }

  .scroll-button {
    position: absolute;
    right: 0;
    bottom: 0;
  }

  h2 {
    animation-delay: 1s;
    animation: olas 1s ease-in-out;
  }


  @keyframes olas {
    0% {
 
    opacity: 0;
  }
 
  100% {
  
    opacity: 1;
  }
  }
`;
