import React from 'react';
import styled from 'styled-components';
import Zoom from 'react-reveal/Zoom';

const Section = styled(React.forwardRef((props, ref) => (
  <section id={props.id} ref={ref} className={props.className}>
    {props.children}
  </section>

)))`
    min-height: 100vh;
    background-color: ${({ backgroundColor }) => backgroundColor};
`;

Section.Title = styled(({ className, text }) => (
  <header className={className}>
    <Zoom><h1>{text}</h1></Zoom>
  </header>
))`
font-family: 'DM Serif Display', serif;
  color: ${({ theme }) => theme.colors.textoPortada};
  text-align: center;
  font-size: 2em;
  padding-top: 3rem;
`;

Section.Body = styled(({ className, children }) => (
  <div className={className}>
    {children}
  </div>
))`
  width: 100%;
`;
export default Section;
