import React from 'react';
import styled from 'styled-components';
import Input from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Section from '../components/Section';
import Container from '../components/Container';

const Contacto = ({ id, className, referencia }) => {
  const formulario = React.useRef();
  const sendForm = (event) => {
    event.preventDefault();
    const data = new FormData(formulario.current);

    fetch('https://usebasin.com/f/8cbe29ba9b2a', {
      method: 'POST',
      body: data,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <Section ref={referencia} id={id} className={className}>
      <Section.Title text={['Con', 'tacto.']} />
      <Container>
        <Section.Body className="proyectos-container">

          <div className="g-flex">

            <div>
              <p>Enviame un mensaje, o contactame por las redes!</p>
              <div className="icons-container">
                <a href="https://github.com/viejocadillac">
                  <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
                </a>
                <a href="https://www.linkedin.com/in/mathias-moreira-b77290195/">
                  <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
                </a>
              </div>
            </div>

            <form ref={formulario} onSubmit={sendForm}>
              <Input
                id="nombre"
                margin="normal"
                name="nombre"
                size="small"
                variant="filled"
                label="Nombre"
                type="text"
                classes={{ root: 'input-root' }}
                required
              />
              <Input
                id="email"
                margin="normal"
                name="email"
                size="small"
                variant="filled"
                label="Email"
                type="email"
                classes={{ root: 'input-root' }}
                required
              />
              <Input
                id="mensaje"
                margin="normal"
                name="mensaje"
                size="small"
                variant="filled"
                label="Mensaje"
                multiline
                rows="4"
                classes={{ root: 'input-root' }}
                required
              />
              <Button type="submit" variant="contained" color="primary">Enviar</Button>
            </form>
          </div>
        </Section.Body>
      </Container>
    </Section>
  );
};

export default styled(Contacto)`
  display:flex;
  margin-bottom: 6rem;
  flex-direction:column;

  a {
      color: inherit;
  }

  p {
      text-align:center;
      color: ${({ theme }) => theme.colors.navBarText};
      font-family: 'DM Serif Display', serif;
  }

  .input-root {
    background-color: white;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }

  .icons-container{
    display: flex;
    justify-content: center;
    margin-bottom: 3rem;
    color: ${({ theme }) => theme.colors.accent};

    * {
        margin: 0.5rem;
    }
  }

  form {
      display: flex;
      flex-direction: column;
      max-width: 400px;
      margin: 0 auto;
      font-family: 'Raleway', sans-serif,Arial, Helvetica, sans-serif;
      color: ${({ theme }) => theme.colors.navBarText};
  }

  button {
    align-self: flex-end;
    border-radius: 0px;
    color: ${({ theme }) => theme.colors.claro};
    background-color: ${({ theme }) => theme.colors.accent};
    box-shadow: none;
  }
  `;
