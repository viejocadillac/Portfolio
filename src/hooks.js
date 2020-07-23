import { useLayoutEffect, useEffect, useState } from 'react';
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

export {
  useScroll,
  useTheme,
  useToggleShowOn,
}