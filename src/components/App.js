import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade'
import Section from './Section'
import Container from './Container'
import NavBar from './NavBar'
import BigName from './BigName'
import ToTop from './ToTop'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//import {useScrollRef, useViewportHeight, useResize} from '../hooks.js'

const Rectangulo = styled.div`
  background-color: #303030;
  height: calc(100vh - 5em);
  width: calc(100% - 4em);
  position: relative;
`
function App({className}) {

  const saludar = ()=>{
    window.scrollTo({ top: 4000, behavior: 'smooth' });
  }




  return (
    <div className={className}>
      <NavBar />

      <Rectangulo className="rectangulo">
        <Container className="flex-container" >
          <BigName/>
          
          <div className="wrapper">
            <Fade>
              <h1>A un paso de que tus ideas se hagan realidad.</h1>
              <p>O de contratarme.</p>

              <button onClick={saludar} className="button-dale">Dale!</button>
            </Fade>
          </div>
          
          <button className="scroll-button"><FontAwesomeIcon icon="chevron-left" size="2x"/>Scroll</button>
        </Container>
      </Rectangulo>

      <div className="relleno"></div>

      
        <Section>
          <Section.Title text={['Pro', 'yectos.']} />
          <Container>
    
            <Section.Body className="proyectos-container">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </Section.Body>
          </Container>
        </Section>

        <div className="relleno"></div>

        <Section >

            <Section.Title text={['Sobre', 'mi.']} />
       
       
          <Section.Body className="sobre-mi">
            <Container className="sobremi-container">
              <div className="perfil">
                <div className="imagen-perfil"></div>
              </div>

              <div className="descripcion">
                <h3 className="titulo">No soy un programador autodidacta mas.</h3>
                <p>
                  Me recibí en 2019 de Técnico en Mantenimiento de Aeronaves. El último tiempo,
                  he desempeñado funciones relacionadas a la aviación dónde empecé a poner en practica mis conocimientos.
                </p>
                <p>
                  De igual forma, me encuentro <b>muy motivado a desarrollar otra de mis pasiones; la  programación.</b>
                  Para esto cuento con un gran desempeño <b>autodidacta</b>, manejando Javascript, HTML, CSS, React, Node, Webpack, Git, etc.
                  El último tiempo, decidí formalizar mis conocimientos siendo parte del programa de <a href="#">Jóvenes a Programar</a>. 
                </p>
              </div>

              <div className="tecnologias">
                <span className="tecnologia">React</span>
                <span className="tecnologia">Node</span>
                <span className="tecnologia">Css</span>
                <span className="tecnologia">Html</span>
                <span className="tecnologia">Javascript</span>
                <span className="tecnologia">Scss</span>
                
              </div>
            </Container>

            </Section.Body>
         
          </Section>

        <div className="relleno"></div>

        <Section>
          <Section.Title text={['Con', 'tacto.']} />
          <Container>
            <Section.Body className="proyectos-container">
            </Section.Body>
          </Container>
        </Section>
        <ToTop />
   
    </div>
  );
}

export default styled(App)`
  .rectangulo {
    background-color: #303030;
    height: calc(100vh - 2em);
    margin: 0 auto;
    margin-bottom: 1em;
    width: calc(100% - 4em );
    display:flex;
    justify-content: space-between;
  }

  .title-container{
    position: sticky;
    top:3rem;
  }

  .scroll-button{
    height: 30px;
    position:absolute;
    top:100%;
    right: 0;
    transform:translate(1.3em,-140%) rotate(-90deg);
    background: none;
    border:none;
    color: White;
    font-weight: 600;
    line-height: 3em;
    //animation: saltar 1s infinite;

    &:hover {
      cursor: pointer;
    }

    @keyframes saltar{
      0% {
        transform:translate(1.3em,-140%) translateZ(0) rotate(-90deg);
      }
      50%{
        transform:translate(1.3em,-160%) translateZ(0) rotate(-90deg);
      }
      100%{
        transform:translate(1.3em,-140%) translateZ(0) rotate(-90deg);
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

  .flex-container{
    width: 100%;
    display:flex;
    position:relative;
    justify-content:space-between;
    align-items: center;
    text-align: right;

    .wrapper {
      color: white;
      font-family: 'Raleway', sans-serif;
      width: 100%;
      h1 {
        margin: 0;
      }

      p {
        color: #ef6408;
        font-weight: 600;
      }
    }
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

  .relleno {
    height: calc(100vh - 4em);
  }

  .sobre-mi {
    padding-top: 4em;
  }

  .proyectos {
    min-height: 100vh;
  }

  .proyectos-container {
      margin-top: 2em;
      display: grid;
      grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
      gap: 1em;

      div {

        height: 200px;
        min-width: 200px;
        background-color:grey;
      }

    }

    .sobre-mi{
      background-color:#303030;
    }



  .sobremi-container {
    display: flex;
    align-items: center;
    gap: 2em;
    min-height: calc(100vh - 6.5rem - 4em);
    
    .perfil, .descripcion, .tecnologias {
      font-weight: 'Raleway', sans-serif;
      display: flex;
      align-items: center;
      flex-grow: 1;
    }

    .imagen-perfil {
        margin: 0 auto;
        background-color: white;
        max-width: 100px;
        min-width: 100px;
        height: 100px;
        background-image: url('./perfil.jpg');
        background-size: cover;
        border-radius: 50%;
        border: 4px solid white;
      }


    .perfil {
        flex-grow: unset;
        padding: 0 1em;
      }

      .descripcion {
        color: white;
        flex-direction: column;
        align-items: start;
        padding: 0 1em;
        font-family: 'Raleway', sans-serif;

        .titulo {
          font-size: 2em;
        }

        p {
          color: white;
          line-height: 1.5em;
        }

        a {
          color: white;
          font-weight: 700;
          text-decoration: none;
        }
      }

      .tecnologias {
        border-left: 3px solid #ef6408;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(7em, 1fr));
        min-width: 200px;
        flex-grow: 1;

   
        .tecnologia {
   
          font-family: 'Raleway', sans-serif;
          color: white;
          font-weight: 600;
          margin: 0.5em;
          text-align:center;
          

        }
      }
  }
`;
