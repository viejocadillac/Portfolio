/* eslint-disable react/prop-types */
import React from 'react';
import Section from '../components/Section';
import Container from '../components/Container';
import ProyectosContainer from '../components/ProyectosContainer';


const Proyectos = ({ children }) => (
    <Section>
    <Section.Title text={['Pro', 'yectos.']} />
    <Container>
      <Section.Body>
        <ProyectosContainer />
      </Section.Body>
    </Container>
  </Section>

);

export default Proyectos;
