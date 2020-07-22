import React from 'react';
import styled from 'styled-components';
import Pulse from 'react-reveal/Pulse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Proyecto = ({className, nombre, descripcion, link}) => {
    return (
     
        <article className={className}>
            <header>
                <h1>{nombre}</h1>
                <p>{descripcion}</p>
            </header>
            <footer>
                <a className="github"><FontAwesomeIcon icon={['fab', 'github']} size="2x"/>Github</a>
                <a className="live">Live</a>
            </footer>
        
        </article>




        
    )
}

export default styled(Proyecto)`
box-shadow: 2px 5px 7px -2px rgba(0,0,0,0.4);
text-align:center;
padding: 1rem;
header {
    margin: 0;
    color: ${({theme})=> theme.colors.claro};
    padding: 2rem 0;
    height: 150px;
    box-sizing: border-box;
    background-color: ${({theme})=>theme.colors.primario};

    
}

h1 {
    font-size: 1.5em;
}

 p {
     opacity: 0.6;
 }

footer {
    padding-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({theme})=> theme.colors.accent};

    .live {
        font-weight: 700;
    }

    .github {
        font-size: 0.8em;
        display: flex;
        align-items: center;
         * {
             margin: 0.2em;
         }

    }
}

h1 {
    margin: 0;

}
   
   
  


 
 
 



`