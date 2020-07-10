import React from 'react';
import styled from 'styled-components';


const BigName = ({className, children}) => {
    return (
        <div className={className}>
          <span className="nombre-grande">Mathias Moreira</span>
          {/**<span className="apellido-grande">Moreira</span>**/}
        </div>
    )
}

export default styled(BigName)`
  font-weight: 900;
  font-size: 4em;
  color: #ef6408;


.nombre-grande, .apellido-grande {
  display: block;
  line-height: 0.9em;
}


`;