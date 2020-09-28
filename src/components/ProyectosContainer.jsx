import React from 'react';
import styled from 'styled-components';
import Proyecto from './Proyecto';

const ProyectosContainer = ({ className }) => {

  return (
    <div className={className}>

      <Proyecto
        key="proyecto-1"
        nombre="eMercado"
        imgSrc="/obligatorio-jap-2020.jpg"
        githubLink="https://github.com/viejocadillac/obligatorio-jap-2020"
        liveUrl="https://viejocadillac.github.io/obligatorio-jap-2020/"
        area="a"
      />

      <Proyecto
        key="proyecto-2"
        nombre="Medio Trato"
        imgSrc="/Medio-Trato.jpg"
        githubLink="https://github.com/viejocadillac/Medio-Trato"
        liveUrl="https://viejocadillac.github.io/Medio-Trato/"
        area="b"
      />

      <Proyecto
        key="proyecto-3"
        nombre="React Sort"
        imgSrc="/React-Sort.jpg"
        githubLink="https://github.com/viejocadillac/React-Sort"
        liveUrl="https://viejocadillac.github.io/React-Sort/"
        area="c"
      />

      <Proyecto
        key="proyecto-3"
        nombre="Portfolio"
        imgSrc="/Portfolio.jpg"
        githubLink="https://github.com/viejocadillac/Portfolio"
        liveUrl="/"
        area="d"
      />

      <Proyecto
        key="proyecto-3"
        nombre="Node File Server"
        imgSrc="/Node-File-Server.jpg"
        githubLink="https://github.com/viejocadillac/Node-File-Server"
        area="e"
      />

    </div>
  );
};

export default styled(ProyectosContainer)`
  margin: 0 1rem;
  margin-bottom: 4rem;
  position: relative;
  top: -6rem;
  display: grid;
  grid-template-areas:  "a a b"
                        "a a c"
                        "d e e"
                        "d e e";
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 200px);
  gap: 1rem;
  animation: appearBottom 1s ease-in;

  @keyframes appearBottom {
    from {
      top: 0;
    } to {
      top: -6rem;
    }
  }
`;
