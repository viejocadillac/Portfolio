/* eslint-disable react/prop-types */
import React from 'react';
import styled, { ThemeContext } from 'styled-components';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import Container from '../components/Container';

const SobreMi = ({
  id, className, referencia, show,
}) => {
  const theme = React.useContext(ThemeContext);

  return (
    <Section ref={referencia} id={id} className={className} backgroundColor={theme.colors.body} show={show}>
      <Section.Title text="Sobre mi." className="title" />
      <Section.Body className="sobre-mi">
        <Container>
          <div className="perfil">
            <div className="g-circle imagen-perfil" />
          </div>

          <div className="descripcion">
            <h3 className="descripcion--titulo">No soy un programador autodidacta mas.</h3>

            <div className="contenedor-flex">

              <div className="left">
                <Fade>
                  <p className="descripcion--texto">
                    Me recibí en 2019 de Técnico en Mantenimiento de Aeronaves. El último tiempo,
                    he desempeñado funciones relacionadas a la aviación dónde empecé a 
                    poner en práctica mis conocimientos.
                  </p>
                </Fade>
                <Fade>
                  <p className="descripcion--texto">
                    De igual forma, me encuentro
                    <b> muy motivado a desarrollar otra de mis pasiones; la programación. </b>
                    Para esto cuento con un gran desempeño 
                    <b> autodidacta. </b>
                    El último tiempo, decidí formalizar mis conocimientos siendo 
                    parte del programa de
                    <a href="https://jovenesaprogramar.edu.uy/"> Jóvenes a Programar</a>
                    .
                  </p>
                </Fade>
              </div>

              <div className="tecnologias">
                <p className="tecnologias--titulo">Algunas de las tecnologias que manejo son:</p>
                <ul className="tecnologias--list">
                  <li className="tecnologias--item">Sass</li>
                  <li className="tecnologias--item">React</li>
                  <li className="tecnologias--item">Git</li>
                  <li className="tecnologias--item">JavaScript</li>
                  <li className="tecnologias--item">Node</li>
                  <li className="tecnologias--item">Html</li>
                  <li className="tecnologias--item">Css</li>
                </ul>
              </div>

            </div>

            <p className="download-curriculum">
              Podes descargar mi curriculum, haciendo click
              <a href={`${process.env.PUBLIC_URL}/CV_Mathias Moreira.pdf`} target="_blank" rel="noreferrer"> acá</a>
            </p>
          </div>

        </Container>
      </Section.Body>
    </Section>
  );
};

export default styled(SobreMi)`

padding-bottom: 8rem;

.title {
  color: ${({ theme }) => theme.colors.textoPortada};
  font-family: 'DM Serif Display', serif;
}

.contenedor-flex {
  display: flex;
  flex-wrap: wrap;
  opacity: 0.8;
}

.left {
  flex-grow: 1;
  width: 66%;
  flex-shrink: 1;
}

.tecnologias {
  display: flex;
  flex-direction:column;
  width: 30%;
  min-width: 200px;
  flex-grow: 1;

  &--titulo {
      margin: 0;
      margin-top: 2rem;
      font-weight: 600;

      @media screen and (min-width: 670px) {
        margin-top: 0;
      }
  }

  &--list {
    padding: 0;
    margin-top: 1.5rem;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

  &--item {
    list-style: none;
    border: 2px solid ${({ theme }) => theme.colors.textoPortada};
    font-size: 0.9em;
    font-weight: 600;
    margin: 0.5em;
    margin-left: 0;
    margin-top: 0;
    padding: 0.3em 1em;
    text-align:center;
    color: ${({ theme }) => theme.colors.textoPortada};
  }
}

.download-curriculum {
  padding-top: 3rem;
  text-align: center;
  margin: 0;
  padding: 0;
}

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
      color: ${({ theme }) => theme.colors.textoPortada};
      
    }
    b{
      font-weight: 500;
     
    }

    .download-curriculum {
      margin-top: 4rem;
    }

    .imagen-perfil {
        margin: 0 auto;
        margin-top: 1rem;
        background-color: white;
        max-width: 100px;
        min-width: 100px;
        height: 100px;
        background-image: url('${process.env.PUBLIC_URL}/perfil.jpg');
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
        
        margin: 0;
        font-family: 'DM Serif Display', serif;
        

        &--titulo {
          font-size: 2em;
          width: min(100%, 23ch);
          margin-bottom: 8rem;
          text-align: center;
        }

        &--texto {
          line-height: 2em;
          margin: 0;
          padding-right: 2rem;
          margin-bottom: 1em;
        }

        a {
          font-weight: 700;
          color: ${({ theme }) => theme.colors.textoPortada};
        }
      }



   
  }

`;
