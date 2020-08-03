import React from 'react';
import styled from 'styled-components';
import {useIntersectionObserver, useOtherIntersection} from '../hooks'


const Section = styled(({id, referencia, className, children, show}) => {

    // Referencia de la seccion actual.
    // Cuando este entre en el viewport, se cambia el estilo del 
    // link de dicha seccion el la barra de navegacion
    const ref = React.useRef(null)

    //const [entries] = useIntersectionObserver(ref, referencia)

    useOtherIntersection(ref, referencia, (entries) => {
        const element = document.getElementById(`nav-${id}`);
        
        if(entries[0].isIntersecting && element) {
       
            element.style.color = 'Red'
                       
        } else {
          if(element) element.style.color = 'Red'
        }
    })




    return (
        <section id={id} ref={ref} className={className} show={show}>
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




