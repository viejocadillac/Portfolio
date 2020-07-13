import { useLayoutEffect, useEffect, useState } from 'react';

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
}

const useResize = (cb) => {
  const handleResize = (event) => {
    cb(document.documentElement.clientWidth, document.documentElement.clientHeight);
  };

  useLayoutEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
};

const useViewportHeight = () => {
  const [viewportHeight, setViewportHeight] = useState(document.documentElement.clientHeight);
  const handleResize = (event) => {
    const h = document.documentElement.clientHeight;
    setViewportHeight(h);
  };

  useLayoutEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  return viewportHeight;
};

const useViewportWidth = () => {
  const [viewportWidth, setViewportWidth] = useState(document.documentElement.clientWidth);
  const handleResize = (event) => {
    const w = document.documentElement.clientWidth;
    setViewportWidth(w);
  };

  useLayoutEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  return viewportWidth;
};


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
  useScroll, useViewportHeight, useViewportWidth, useResize, useToggleShowOn
};
