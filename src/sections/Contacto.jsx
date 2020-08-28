import React from 'react';
import styled from 'styled-components';
import Section from '../components/Section';
import Container from '../components/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contacto = ({ id, className, referencia, show }) => {

    const formulario = React.useRef()

    const sendForm = (event)=> {
        event.preventDefault();
        const data = new FormData(formulario.current);
     

        fetch("https://usebasin.com/f/8cbe29ba9b2a", {
            method: 'POST',
            body: data,
        }).then((response) => {
            console.log(response)
        })
    }




    return (
        <Section ref={referencia} id={id} className={className}>
            <Section.Title text={['Con', 'tacto.']} />
            <Container>
                <Section.Body className="proyectos-container" >

                    <div className="g-flex">

                        <div>
                            <p>Enviame un mensaje, o contactame por las redes!</p>
                            <div className="icons-container">
                                <a href="https://github.com/viejocadillac"><FontAwesomeIcon icon={['fab', 'github']} size="2x" /></a>
                                <a href="https://www.linkedin.com/in/mathias-moreira-b77290195/"><FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" /></a>
                             
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
margin-bottom: 6rem;
flex-direction:column;
a {
    color: inherit;
}
p {
    text-align:center;
}

.icons-container{
    display: flex;
    justify-content: center;
    margin-bottom: 3rem;
    color: ${({theme})=> theme.colors.accent};

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