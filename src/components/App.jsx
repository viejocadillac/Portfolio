/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Pagina from './Pagina';
import Section from './Section';
import Container from './Container';
import Portada from './Portada';
import Proyectos from '../sections/Proyectos';
import SobreMi from '../sections/SobreMi';

const Spacer = styled.div`
  height: calc(100vh - 4em);
  background-color: ${({theme})=>theme.colors.fondo};
`


function App({ className }) {

  return (
    <Pagina className={className}>
      <Portada />

      <Spacer />

      <Proyectos />

      <Spacer />

      <SobreMi />

      <Spacer />

      <Section>
        <Section.Title text={['Con', 'tacto.']} />
        <Container>
          <Section.Body className="proyectos-container" />
        </Container>
      </Section>


    </Pagina>
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
