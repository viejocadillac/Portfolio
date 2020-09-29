/* eslint-disable react/prop-types */
import React from 'react';
import Section from '../components/Section';
import styled from 'styled-components';
import Container from '../components/Container';
import ProyectosContainer from '../components/ProyectosContainer';

const Proyectos = ({ id, referencia, backgroundColor }) => (
  <Section ref={referencia} id={id} backgroundColor={backgroundColor} style={{top: '-10rem'}}>
    <Container>
      <Section.Body>
        <ProyectosContainer />
      </Section.Body>
    </Container>
  </Section>
);

export default styled(Proyectos)`
position: relative;

  margin-top: -500px; 
 
 
`;
