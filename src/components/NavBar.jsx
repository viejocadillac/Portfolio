import React from 'react';
import styled from 'styled-components';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Fade from 'react-reveal/Fade';

import Container from './Container';

import { useToggleShowOn } from '../hooks';

const Nombre = styled.h1`
    position: relative;
    margin: 0;
    font-size: 1.2em;
    line-height: 1em;
    color: ${({ theme }) => theme.colors.primario};
`;

const NavBar = ({
  className, toggleTheme, links, activeSection,
}) => {
  const SCROLL_DELAY = 150;
  const showNombre = useToggleShowOn(SCROLL_DELAY, true);

  return (
    <Fade top>
    <header className={className}>
      <Container className="content">
        <div>
          <Nombre>Mathias Moreira</Nombre>
          <p>Desarrollador</p>
        </div>

        <div className="flex">
          
            <nav>
              <ul className="links">

                {
                  links.map((link) => {
                    let active;
                    if (link) active = activeSection === link.id;

                    return (
                      <li style={link.display ? {} : { display: 'none' }}>
                        <NavLink ref={link.ref} to={`#${link.id}`} className={active ? 'nav-link nav-link-active' : 'nav-link'}>
                          {link.text}
                        </NavLink>
                      </li>
                    );
                  })
                }
              </ul>
            </nav>
          
          <button type="button" className="modo" onClick={toggleTheme}>
        
            <div className="circle" />
          </button>
        </div>
      </Container>
    </header>
    </Fade>
  );
};

export default styled(NavBar)`
  box-sizing: border-box;
  font-family: 'Raleway', sans-serif;
  color: ${({ theme }) => theme.colors.navBarText};
  background-color: ${({ theme }) => theme.colors.navBarBackground};
  position: fixed;
  width: 100vw;
  z-index:4;
  top: 0;
  left: 0;
  padding: 0.8rem 0;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px 2px rgba(0,0,0,0.2);

  .flex {
    display:flex;
  }

  nav {
    display: flex;
  }

  p {
    margin: 0;
    font-size: 0.8em;
    font-weight: 600;
    color: grey;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ul.links {
    list-style: none;
    display:flex;

    & > li {
      margin-right: 0.9em;
      font-weight: 500;
      font-size: 0.9rem;
      opacity: 0.8;
      

      &:last-child {
        margin-right: 0em;
      }
    }
  }

  .nav-link {
    color: ${({ theme }) => theme.colors.textoPortada};
    text-transform: uppercase;
    font-family: 'DM Serif Display', serif;
    letter-spacing: 2px;
    transition: color 0.3s ease-in-out;
  }

  .nav-link-active {
    color: ${({ theme }) => theme.colors.accent};
  }

  .modo{
    display:flex;
    align-items: center;
    margin-left:1em;
    font-family: 'Raleway', sans-serif;
    font-size: 1rem;
    background: none;
    height: 1.5em;
    border: none;
    font-weight: 500;
    align-self:center;
    color: grey;

    &:hover {
      cursor: pointer;
    }

    .circle {
      background-color: ${({ theme }) => theme.colors.navBarText};
      
      width: 1em;
      height: 1em;
      border-radius: 50%;
      margin-left: 0.4em;
     }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}){
    nav {
      display: none;
    }

    .modo {
      margin-right: 1em;
    }
  }
`;
