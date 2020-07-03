import React from 'react';
import styled from 'styled-components';


const BigName = ({className, children}) => {
    return (
        <div className={className}>
          <span className="nombre-grande">Mathias</span>
          <span className="apellido-grande">Moreira</span>
        </div>
    )
}

export default styled(BigName)`
  font-family: 'Raleway', sans-serif;
  font-weight: 900;
  font-size: 4em;
  color: #ef6408;
  position: absolute;
  top: 10px;
  z-index: 99;

.nombre-grande, .apellido-grande {
  display: block;
  line-height: 0.9em;
}


`;