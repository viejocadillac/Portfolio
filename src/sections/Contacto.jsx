import React from 'react';
import styled from 'styled-components';
import Section from '../components/Section';
import Container from '../components/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contacto = ({ className }) => {

    const formulario = React.useRef()

    const sendForm = (event)=> {
        event.preventDefault();
        const data = new FormData(formulario.current);
     

        fetch("https://usebasin.com/f/8cbe29ba9b2a", {
            method: 'POST',
            body: data,
        }).then((response)=>{
            console.log(response)
        })
    }




    return (
        <Section className={className}>
            <Section.Title text={['Con', 'tacto.']} />
            <Container>
                <Section.Body className="proyectos-container" >

                    <div className="g-flex">

                        <div>
                            <p>Enviame un mensaje, o contactame por las redes!</p>
                            <div className="icons-container">
                                <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
                                <FontAwesomeIcon icon={['fab', 'linkedIn']} size="2x" />
                                <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />
                            </div>

                        </div>

                        <form ref={formulario} className="" onSubmit={sendForm}>
                            <label for="nombre">Tu nombre</label>
                            <input id="nombre" name="nombre" type="text"></input>

                            <label for="email">Tu email</label>
                            <input id="email" name="email" type="email"></input>

                            <label for="email">Mensaje</label>
                            <textarea id="mensaje" name="mensaje" ></textarea>
                            <button type="submit" >Enviar</button>
                        </form>


                    </div>

                </Section.Body>
            </Container>
        </Section>

    )
}

export default styled(Contacto)`
display:flex;
flex-direction:column;
p{
    text-align:center;
}

.icons-container{
  
   
    border: 1px solid red;

    * {
        margin: 0.5rem;
    }
}

    form {
        display: flex;
        flex-direction: column;
        max-width: 400px;
        margin: 0 auto;
    }

    input, textarea {
        box-sizing: border-box;
        border: 1px solid ${({ theme }) => theme.colors.otherThemeBackground};
        height: 2em;
        border-radius: 1em;
        margin-bottom: 1.5rem;
        padding: 0.8em;
        &:focus {
          
            outline: none;
            border: 2px solid ${({ theme }) => theme.colors.otherThemeBackground};


        }
    }
    textarea {
        height: auto;
    }

    button {
        max-width: 7em;
        padding: 0.6em 1.2em;
        align-self: flex-end;
        border-radius: 3.8em;
        border:none;
        color: ${({ theme }) => theme.colors.claro};

        background-color: ${({ theme }) => theme.colors.accent};

    }

  




`;