import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Proyecto = ({className, nombre, descripcion, link}) => {
    return (
        <article className={className}>
            <img  ></img>

            <header>
                <h1>{nombre}</h1>
                <h2>{descripcion}</h2>
            </header>
            
         

        </article>
    )
}

export default styled(Proyecto)`
    min-height: 200px;
    width: 100%;
    text-align: center;
    font-family: 'Raleway', sans-serif;
    font-size: 2.5em;
    color: grey;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    align-items: center;
    position:relative;
    grid-auto-flow: dense;
   

    &:nth-child(2n) {
        img {
            grid-column: 2;
        }
    }

    h1 {
        font-weight: 300;
        margin: 0;
    }

    h2 {
        font-size: 0.5em;
        margin: 0;
        color: #ef6408;
        font-weight: 600;
    }

    @media screen and (max-width: 650px ){
        header {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            text-align:center;


            h1 {
               
                color: white;
            }
          
        }
    }
 
    img {
        object-fit: cover;
        width: 100%;
        min-height: 200px;
        height: 100%;
        background-color: #303030;

    }

 



`