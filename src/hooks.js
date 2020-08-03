import { useLayoutEffect, useEffect, useState, useRef } from 'react';
import { setThemeCookie, parseCookies } from './utils';


/**
 * 
 * @param {function} callback Funcion llamada cuando se hace scroll
 */
const useScroll = (callback) => {

  const onScroll = (event) => {
      // Cross browser support.
      const scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;
      callback(scrollPos);
  }

  useEffect(() => {
      document.addEventListener('scroll', onScroll);
      return () => {
          document.removeEventListener('scroll', onScroll);
      }
  })
};

const useTheme = (theme1, theme2 ) => {
  const [theme, setTheme] = useState(theme1) // Number 1 default theme

  const toggleTheme = () => {
    const newTheme = theme === theme1 ? theme2 : theme1;
    setThemeCookie(newTheme.name);
    setTheme(newTheme);
  }

  useLayoutEffect(() => {
    const cookies = parseCookies()
    if (cookies.modo === theme2.name) {
      setTheme(theme2);
    } 
  }, [setTheme]);

  return [theme, toggleTheme];
}

const useToggleShowOn = (pixels, initialShow) => {
  const [show, setShow] = useState(initialShow)
  
  useScroll((scrollPos) => {
    if (scrollPos > pixels && !show) {
      setShow(true)
    }

    if (scrollPos < pixels && show) {
      setShow(false)
    }

  })
  return show
}



const useIntersectionObserver = (toObserve, navRef, options) => {

    const [entries, setEntries] = useState()
    console.log(`navRef en useIntersectionObserver: ${navRef}`)

    const callback = (entries) => {
        if(entries[0].isIntersecting) {
            if (navRef.current) navRef.current.style.color = 'Red'
        } else {
          if (navRef.current) navRef.current.style.color = 'grey'
        }
    }

    const observer = useRef(new IntersectionObserver(callback, {threshold: 0.35}))


    useEffect(()=> {
        observer.current.observe(toObserve.current)
        return () => observer.current.disconnect()
    }, [toObserve])

    return [entries]
}

const useOtherIntersection = (toObserve, navRef, callback) => {

  const [entries, setEntries] = useState()
  console.log(`navRef en useIntersectionObserver: ${navRef}`)

  
  const observer = useRef(new IntersectionObserver(callback, {threshold: 0.35}))


  useEffect(()=> {
      observer.current.observe(toObserve.current)
      return () => observer.current.disconnect()
  }, [toObserve])

  return [entries]



}

export {
  useScroll,
  useTheme,
  useToggleShowOn,
  useIntersectionObserver,
  useOtherIntersection
}