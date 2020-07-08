/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Container from './Container';
import ScrollButton from './ScrollButton';
import BigName from './BigName';
import NavBar from './NavBar';
import ToTop from './ToTop';

const Rectangulo = styled.div`
  background-color: #303030;
  height: calc(100vh - 5em);
  width: calc(100% - 4em);
  position: relative;

  background-color: #303030;
    height: calc(100vh - 2em);
    margin: 0 auto;
    width: calc(100% - 4em );
    display:flex;
    justify-content: space-between;
`;

const Portada = ({ className }) => {

  const scrollButtonHandler = () => {

  };

  return (
  <main className={className}>
    <Rectangulo className="rectangulo">
      <Container className="flex-container">
        <BigName />

        <div className="wrapper">
          <Fade>
            <h1>A un paso de que tus ideas se hagan realidad.</h1>
            <p>O de contratarme.</p>

            <button type="button" className="button-dale">Dale!</button>
          </Fade>
        </div>

        <ScrollButton onClick={scrollButtonHandler} />
      </Container>
    </Rectangulo>
  </main>
)};

export default styled(Portada)`
background-color: ${({theme})=> theme.colors.fondo};
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

`;
