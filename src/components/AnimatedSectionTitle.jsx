import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade'
import Container from './Container'


const AnimatedSectionTitle = ({className, children}) => {
    return (
        <header className={className}>
            <Fade left>
                {children}
            </Fade>
        </header>
    )
}

export default styled(AnimatedSectionTitle)`
    font-weight: 800;
    font-size: 4em;
    color: #ef6408; 
    font-family: 'Raleway', sans-serif;
    position: sticky;
    text-transform: uppercase;
    top: 0.8em;
    background-color: white;
    width: 100vw;
    z-index: 1;

    * {
      display:block;
      line-height: 0.8em;
      margin: 0;
    }


`;