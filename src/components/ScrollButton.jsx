import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ScrollButton = ({className, onClick}) => {
    return (
        <button className={className} onClick={onClick}><FontAwesomeIcon icon="chevron-left" size="2x"/>Scroll</button>
    )
}

export default styled(ScrollButton)`
  
    height: 30px;
    position:absolute;
    top:100%;
    right: 0;
    transform:translate(1.3em,-140%) rotate(-90deg);
    background: none;
    border:none;
    color: White;
    font-weight: 600;
    line-height: 3em;
    animation: saltar 1s infinite;

    &:hover {
      cursor: pointer;
    }

    @keyframes saltar{
      0% {
        transform:translate(1.3em,-140%) translateZ(0) rotate(-90deg);
      }
      50%{
        transform:translate(1.3em,-160%) translateZ(0) rotate(-90deg);
      }
      100%{
        transform:translate(1.3em,-140%) translateZ(0) rotate(-90deg);
      }
    }
    
  

`
