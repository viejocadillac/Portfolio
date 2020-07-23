import React from 'react';
import styled from 'styled-components';
import Pulse from 'react-reveal/Pulse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Proyecto = ({className, nombre, descripcion, githubLink, liveUrl}) => {
    return (
     
        <article className={className}>
            <header>
                <h1>{nombre.replace(/-/g, ' ')}</h1>
                <p>{descripcion}</p>
            </header>
            <footer>
                <a href={githubLink} className="github"><FontAwesomeIcon icon={['fab', 'github']} size="2x"/>Github</a>
                { liveUrl ? <a href={liveUrl} className="live">Live</a> : <span className="live">Live</span>}
            </footer>
        
        </article>




        
    )
}

export default styled(Proyecto)`
box-shadow: 2px 5px 7px -2px rgba(0,0,0,0.4);
text-align:center;
padding: 1rem ;
header {
    margin: 0;
    color: ${({theme})=> theme.colors.claro};
    padding: 2rem;
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

    a {
    color: inherit;
    text-decoration: none;

 
}

    .live {
        font-weight: 700;
     
        color: ${({theme, liveUrl}) => liveUrl ? theme.colors.accent : 'grey'};
        opacity: ${({liveUrl}) => !liveUrl && 0.5};




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