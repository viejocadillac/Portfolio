import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Proyecto = ({
  className, nombre, imgSrc, githubLink, liveUrl, area,
}) => {
  const ref = React.useRef();

  return (

    <article className={className}>

      <img className="imagen" src={`${process.env.PUBLIC_URL}${imgSrc}`} alt="imagen de ejemplo" />
      <h3 ref={ref} name={nombre} className="nombre">{nombre}</h3>

      <footer>
        <a href={githubLink} className="github">
          <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
          Github
        </a>
        { liveUrl ? <a href={liveUrl} className="live">Live</a> : <span className="live">Live</span>}
      </footer>

    </article>
  );
};

export default styled(Proyecto)`
grid-area: ${({ area }) => area};
display: flex;
position: relative;

.imagen {
    width: 100%;
    object-fit: cover;
}

.nombre {
    position: absolute;
    margin: 0;
    top: 0;
    left: 0;
    color: white;
    font-size: 1.3em;
    font-weight: 600;
    padding: 1rem;
    opacity: 0.8;
    font-family: 'DM Serif Display', serif;
}

footer {
  position: absolute;
  width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: White;

  a {
    color: inherit;
    text-decoration: none;
  }

  .live {
    font-weight: 700;
    color: ${({ liveUrl }) => (liveUrl ? 'white' : 'grey')};
    opacity: ${({ liveUrl }) => !liveUrl && 0.5};
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
`;
