import {
  useLayoutEffect, useEffect, useState, useRef,
} from 'react';
import { setThemeCookie, parseCookies } from './utils';

/**
 *
 * @param {function} callback Funcion llamada cuando se hace scroll
 */
const useScroll = (callback) => {
  const onScroll = () => {
    // Cross browser support.
    const scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName('html')[0].scrollTop;
    window.requestAnimationFrame(() => callback(scrollPos));
  };

  useEffect(() => {
    document.addEventListener('scroll', onScroll);
    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  });
};

// TODO Permitir que se pase una lista de temas
const useTheme = (theme1, theme2) => {
  const [theme, setTheme] = useState(theme1); // Number 1 default theme

  const toggleTheme = () => {
    const newTheme = theme === theme1 ? theme2 : theme1;
    // FIXME Cambiar el guardado en cookies por local storage
    setThemeCookie(newTheme.name);
    setTheme(newTheme);
  };

  useLayoutEffect(() => {
    const cookies = parseCookies();
    if (cookies.modo === theme2.name) {
      setTheme(theme2);
    }
  }, [setTheme]);

  return [theme, toggleTheme];
};

const useToggleShowOn = (pixels, initialShow) => {
  const [show, setShow] = useState(initialShow);
  useScroll((scrollPos) => {
    if (scrollPos > pixels && !show) {
      setShow(true);
    }

    if (scrollPos < pixels && show) {
      setShow(false);
    }
  });
  return show;
};

const useIntersectionObserver = (options) => {
  const [elements, setElements] = useState([]);
  const [entries, setEntries] = useState();

  const callback = (_entries) => {
    setEntries(_entries);
  };

  const observer = useRef(new IntersectionObserver(callback, options));

  useEffect(() => {
    elements.forEach((element) => observer.current.observe(element));
    return () => observer.current.disconnect();
  }, [elements]);

  return [setElements, entries];
};

export {
  useScroll,
  useTheme,
  useToggleShowOn,
  useIntersectionObserver,
};
