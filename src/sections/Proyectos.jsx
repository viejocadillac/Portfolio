/* eslint-disable react/prop-types */
import React from 'react';
import Section from '../components/Section';
import Container from '../components/Container';
import ProyectosContainer from '../components/ProyectosContainer';


const Proyectos = ({ id, referencia, backgroundColor}) => {

  return (
    <Section ref={referencia} id={id} backgroundColor={backgroundColor}>
      <Container>
        <Section.Body>
          <ProyectosContainer />
        </Section.Body>
      </Container>
    </Section>
  );
};

export default Proyectos;
