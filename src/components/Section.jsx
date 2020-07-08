import React from 'react';
import Fade from 'react-reveal/Fade'
import styled from 'styled-components';

import Container from './Container'

const Section = styled(({className, children}) => {
    return (
        <section className={className}>
            {children}
        </section>
    )

})`
    min-height: 100vh;
    background-color: ${({theme})=>theme.colors.fondo};
`


Section.Title = styled(({className, text})=>{
    return (
        <header className={className}>
            
            <Container className="title-container">
                <Fade left>
                    {
                        text.map((line)=> <span className="line">{line}</span> )
                    }
                </Fade>
            </Container>
        </header>
    )
})`

    font-weight: 800;
    font-size: 4em;
    color: #ef6408; 
    font-family: 'Raleway', sans-serif;
    position: sticky;
    text-transform: uppercase;
    top: 3rem;
    padding-top: 0.5rem;
    background-color: ${({theme})=>theme.colors.fondo};
    width: 100%;
    z-index: 1;

    .title-container {
        margin: 0 auto;
        padding-bottom: 1rem;
    }

    * {
        display:block;
        line-height: 0.8em;
        margin: 0;
    }

    
`

Section.Body = styled(({className, children})=>{
    return (
        <div className={className}>
            {children}
        </div>
    )
})`

  
`
export default Section;




