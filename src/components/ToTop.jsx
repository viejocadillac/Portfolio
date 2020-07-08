import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const ToTop = ({className}) => {
  const ref = React.useRef()

  React.useEffect(()=>{

    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    let scrollPos = 0;

    const scrollListener = () => {
      scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;
      if(scrollPos > vh) {
        console.log('scroll')
        ref.current.style = "right: 0px"
      }else {
        ref.current.style = "right: -50px"
      }
    }

    window.addEventListener('scroll', scrollListener)


    return ()=>{
      window.removeEventListener('scroll', scrollListener)
    }
  })

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


  return (
    <div ref={ref} className={className} onClick={toTop}>
      <FontAwesomeIcon icon="chevron-up" size="2x" />
    </div>
  )
}

export default styled(ToTop)`
  position: fixed;
  bottom: 50px;
  right: -50px;
  width: 50px;
  padding: 0.5em 0;
  background-color: ${({theme}) => theme.colorResalte} ;
  z-index: 10;
  transition: right 0.5s ease-in-out;
  text-align: center;
  color: ${({theme}) => theme.colors.primario };

  &:hover {
    cursor: pointer;
  }
`;
