import React from 'react';
import styled from 'styled-components';
import Zoom from 'react-reveal/Zoom';
import {useIntersectionObserver, useOtherIntersection} from '../hooks'


const Section = styled(React.forwardRef( (props, ref) => {
    return (
        <section id={props.id} ref={ref} className={props.className} >
            {props.children}
        </section>

    )

}))`
    min-height: 100vh;
    background-color: ${({backgroundColor}) => backgroundColor};
    padding-top: 7rem;
    
`


Section.Title = styled(({className, text})=>{
    return (
        <header className={className}>
            <Zoom><h1>{text}</h1></Zoom>
        </header>
    )
})`
   
    color: ${({theme}) => theme.colors.primario};
    text-align: center;
    font-size: 2em;
  padding-top: 7rem;

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




