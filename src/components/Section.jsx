import React from 'react';
import styled from 'styled-components';

const Section = styled(({className, children}) => {
    return (
        <section className={className}>
            {children}
        </section>
    )

})`
    min-height: 100vh;
    background-color: ${({backgroundColor}) => backgroundColor};
    padding-top: 7rem;
    
`


Section.Title = styled(({className, text})=>{
    return (
        <header className={className}>
            <h1>{text}</h1>
        </header>
    )
})`
   
    color: ${({theme}) => theme.colors.sectionTitle};
    text-align: center;
    font-size: 2em;
    margin-bottom: 7rem;
  
`

Section.Body = styled(({className, children})=>{
    return (
        <div className={className}>
            {children}
        </div>
    )
})`
width: 100%;

  
`
export default Section;




