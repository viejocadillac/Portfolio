import React from 'react';
import styled from 'styled-components';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Fade from 'react-reveal/Fade';

import Container from './Container'

import { useToggleShowOn } from '../hooks.js'


const Nombre = styled.h1`
    position: relative;
    margin: 0;
    font-size: 1.5em;
    line-height: 1em;
    color: ${({theme})=> theme.colors.accent};
`






const NavBar = ({ className, toggleTheme, links }) => {

  const SCROLL_DELAY = 150
  const showNombre = useToggleShowOn(SCROLL_DELAY, false)



  return (
    <header className={className}>
      <Container className="content">
          <div >
            <Nombre >Mathias Moreira</Nombre>
            <p>Desarrollador</p>
          </div>

        <div className="flex">
          <Fade when={showNombre}>
            <nav>
              <ul className="links">

                {
                  links.filter((link) => link.show).map((link) => (
                    <li><NavLink ref={link.ref} to={`#${link.id}`}>{link.text}</NavLink></li>

                  ))
                }
          
              </ul>
            </nav>
          </Fade>
          <button className="modo" onClick={toggleTheme}>Modo<div className="circle" ></div></button>
        </div>
      </Container>
    </header>
  )
}

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
    padding: 1rem 0;
    justify-content: space-between;
    align-items: center;

    .flex {
      display:flex;
    }

    nav {
      display: flex;
    }

    p {
      margin: 0;
      color: ${({theme})=> theme.colors.navBarText}
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
      margin-right: 1em;
      font-weight: 500;
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.otherThemeBackground};

      &:last-child {
        margin-right: 0em;
      }
    }
  }



  .modo{
    display:flex;
    align-items: center;
    margin-left:1em;
    font-family: 'Raleway', sans-serif;
    font-size: 1rem;
    background: none;
    border: none;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.navBarText};

    &:hover {
      cursor: pointer;
    }

    .circle {
      background-color: ${({ theme }) => theme.colors.navBarText};
      border: 2px solid ${({theme})=> theme.colors.claro};
      width: 1em;
      height: 1em;
      border-radius: 50%;
      margin-left: 0.4em;
     }
    
  }


  @media screen and (max-width: ${({theme})=>theme.breakpoints.md}){
    nav {
      display: none;
    }
  }




`;