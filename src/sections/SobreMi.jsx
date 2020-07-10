/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Section from '../components/Section';
import Container from '../components/Container';



const SobreMi = ({ className }) => (
    <Section className={className}>
    <Section.Title text={['Sobre', 'mi.']} />
    <Section.Body className="sobre-mi">
      <Container className="sobremi-container">
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
            <b>autodidacta</b>
            , manejando Javascript, HTML, CSS, React, Node, Webpack, Git, etc.
            El último tiempo, decidí formalizar mis conocimientos siendo parte del programa de
            {' '}
            <a href="#">Jóvenes a Programar</a>
            .
          </p>
        </div>

        <div className="g-grid tecnologias">
            {
                [
                    'React',
                    'Node',
                    'Css',
                    'Html',
                    'Javascript',
                    'Scss',
                ].map((tecnologia) => <span className="tecnologia">{tecnologia}</span>)
            }
        </div>
      </Container>
    </Section.Body>

  </Section>

);

export default styled(SobreMi)`

.sobre-mi {
    padding-top: 4em;
    background-color:#303030;
}

.sobremi-container {
    display: flex;
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
        color: white;
        flex-direction: column;
        align-items: start;
        padding: 0 1em;

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
        }
      }

      .tecnologias {
        border-left: 3px solid #ef6408;
        grid-template-columns: repeat(auto-fit, minmax(7em, 1fr));
        min-width: 200px;
        flex-grow: 1;

   
        .tecnologia {
   
          color: white;
          font-weight: 600;
          margin: 0.5em;
          text-align:center;
          

        }
      }
  }

`;
