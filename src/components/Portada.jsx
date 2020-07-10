/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Container from './Container';
import ScrollButton from './ScrollButton';

const Rectangulo = styled.div`
  position: absolute;
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
    color: ${({theme})=>theme.colors.primario};
    transition: transform 0.5s ease-in-out;
    &:hover {
      transform: scale(1.1) translateZ(0);
    }
  }
 

  /* Rectangulo de borde blanco */
  &:after {
    content: "";
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    width: calc(100% / 3);
    height: calc(100% + 4em);
    border: 15px solid white;
  }

  /* Imagen de fondo */
  &:before {
    content: "";
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
    opacity: 0.5;
  }
  
  
`;

const Portada = ({ className }) => {

  const scrollButtonHandler = () => {

  };

  return (
    <main className={className}>



      <Container className="flex-container">
        <Rectangulo className="rectangulo">
          <h2>Proyectos.</h2>
          <h2>Sobre mi.</h2>
          <h2>Contacto.</h2>
        </Rectangulo>


      </Container>
      <ScrollButton onClick={scrollButtonHandler} />



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

.caracter {
  opacity: 0.1;
}
  .flex-container{
    
    width: 100%;
    display:flex;
    position:relative;
    justify-content:space-between;
    align-items: center;
    
    
    

    .wrapper {
      color: white;
      padding: 2em;
      background-color: #303030;
      position: relative;
      top: 100px;
      z-index: 4;
      font-family: 'Raleway', sans-serif;
      width: 80%;
      margin-left: 10em;
    
      h1 {
        margin: 0;
        font-size: 1.5em;
        font-weight: 300;
      }

      p {
        color: #ef6408;
        font-size: 0.9em;
        font-weight: 600;
      }


      
      }
    }
  }

  .button-dale {
    background: none;
    background-color: white;
    border: none;
    line-height: 2em;
    border-radius: 1.2em;
    font-size: 1.2em;
    padding: 0.2em 1em;
    color: #ef6408;
    font-weight: 700;
    font-family: 'Raleway', sans-serif;
    &:hover{
      cursor: pointer;
    }
  }

`;
