import React from 'react';
import styled from 'styled-components';
import Section from '../components/Section';
import Container from '../components/Container'

const Contacto = ({ className }) => {
    return (
        <Section className={className}>
            <Section.Title text={['Con', 'tacto.']} />
            <Container>
                <Section.Body className="proyectos-container" >

                    <div className="grid">

                        <div>
                            <p>Descripcion</p>



                        </div>

                    <form className="">
                        <label for="nombre">Tu nombre</label>
                        <input id="nombre" name="nombre" type="text"></input>

                        <label for="email">Tu email</label>
                        <input id="email" name="email" type="email"></input>

                        <label for="email">Mensaje</label>
                        <input id="mensaje" name="mensaje" type="textarea"></input>
                        <button type="submit" >Enviar</button>
                    </form>


                    </div>
                    
                </Section.Body>
            </Container>
        </Section>

    )
}

export default styled(Contacto)`

    form {
        display: flex;
        flex-direction: column;
    }

    .grid {
        dislay: grid;
    }




`;