/* eslint-disable react/prop-types */
import React from 'react';
import styled, { ThemeContext } from 'styled-components';
import Section from '../components/Section';
import Container from '../components/Container';



const SobreMi = ({ id, className, referencia, show }) => { 
  const theme = React.useContext(ThemeContext)
  
  return (
    <Section ref={referencia} id={id} className={className} backgroundColor={theme.colors.primario} show={show}>
    <Section.Title text="Sobre mi." />
    <Section.Body className="sobre-mi">
      <Container >
        <div className="perfil">
          <div className="g-circle imagen-perfil" />
        </div>

        <div className="descripcion">
          <h3 className="titulo">No soy un programador autodidacta mas.</h3>
          <p>
            Me recibí en 2019 de Técnico en Mantenimiento de Aeronaves. El último tiempo,
            he desempeñado funciones relacionadas a la aviación dónde empecé a poner en practica mis conocimientos.
          </p>
          <p>
            De igual forma, me encuentro
            {' '}
            <b>muy motivado a desarrollar otra de mis pasiones; la  programación.</b>
            Para esto cuento con un gran desempeño
            {' '}
            <b>autodidacta.</b>
            
            El último tiempo, decidí formalizar mis conocimientos siendo parte del programa de
            {' '}
            <a href="#">Jóvenes a Programar</a>
            .
          </p>

          <div className="container-tecnologias">
            <p>Algunas de las tecnologias que manejo son:</p>
            <div className="tecnologias">
              <span className="tecnologia">Sass</span>
              <span className="tecnologia">React</span>
              <span className="tecnologia">Git</span>
              <span className="tecnologia">JavaScript</span>
              <span className="tecnologia">Node</span>
              <span className="tecnologia">Html</span>
              <span className="tecnologia">Css</span>
              <span className="tecnologia">Node</span>
            </div>
          </div>
        </div>

    
      </Container>
    </Section.Body>

  </Section>

)
};

export default styled(SobreMi)`
clip-path: polygon(100% 0, 100% 90%, 0 100%, 0 100px);
padding-bottom: 8rem;

   
  


.sobre-mi {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
    min-height: calc(100vh - 6.5rem - 4em);
    
    @media (max-width: 500px) {
      flex-direction: column;
    }
    .perfil, .descripcion, .tecnologias {
      display: flex;
      align-items: center;
      flex-grow: 1;
      color: ${({theme})=> theme.colors.oscuro};
    }

    .imagen-perfil {
        margin: 0 auto;
        background-color: white;
        max-width: 100px;
        min-width: 100px;
        height: 100px;
        background-image: url('./perfil.jpg');
        background-size: cover;
        border: 4px solid white;
      }


    .perfil {
        flex-grow: unset;
        padding: 0 1em;
      }

      .descripcion {
     
        flex-direction: column;
        align-items: center;
        padding: 0 1em;
        text-align: center;

        .titulo {
          font-size: 2em;
          width: min(100%, 23ch);
          margin-bottom: 8rem;
        }

        p {
          max-width: 50ch;
          line-height: 2em;
        }

        a {
        
          font-weight: 700;
        }
      }

      .container-tecnologias {
        display: flex;
        align-items:center;
        flex-direction:column;
        margin-top: 5rem;
        
        


         p {
           margin: 0;
           font-weight: 600;
         }

         div {
       
           display: flex;
           flex-wrap: wrap;

         }
      }

      .tecnologias {
        margin-top: 1.5rem;
        max-width: 300px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        text-align: center;
      
      

   
        .tecnologia {
          box-sizing: border-box;
          background-color: ${({theme})=> theme.colors.oscuro};
          font-size: 0.8em;
     
          font-weight: 500;
          margin: 0.5em;
          margin-top: 0;
          padding: 0.2em 1.5em;
          border-radius: 0.7em;
          text-align:center;
          color: ${({theme})=> theme.colors.claro};
          

        }
      }
  }

`;
