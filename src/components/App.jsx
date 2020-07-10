/* eslint-disable react/prop-types */
import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';

import Fade from 'react-reveal/Fade';
import Pagina from './Pagina';
import Section from './Section';
import Container from './Container';
import Portada from './Portada';
import Proyectos from '../sections/Proyectos';
import SobreMi from '../sections/SobreMi';
import Contacto from '../sections/Contacto';
import GlobalStyles from './GlobalStyles';






const Spacer = styled.div`
  height: calc(100vh - 4em);
  background-color: ${({theme})=>theme.colors.fondo};
`


function App({ className }) {

  return (
    <>
      <GlobalStyles />
      <Pagina className={className}>
        <Portada />

        <Spacer />

        <Proyectos />

        <Spacer />

        <SobreMi />

        <Spacer />

        <Contacto />

      

      </Pagina>
    </>
  );
}

export default styled(App)`


  .title-container{
    position: sticky;
    top:3rem;
  }



  .rect-wrapper {
    height: calc(100vh - 2em);
    display: inline-flex;
    flex-direction: column;
    justify-content: space-between;


  }

  .rectangulo-chico{
    margin-top:1em;
    height: 400px;
    flex-grow: 1;
    background-color: #707070;
  }

 

 

  .proyectos {
    min-height: 100vh;
  }

  
`;
