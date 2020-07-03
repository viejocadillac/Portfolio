import {useLayoutEffect, useEffect, useState, useRef} from 'react'


const useScrollRef = (cb) => {


    const handleScroll = (event) => {
        cb(window.pageYOffset)
    }

    useLayoutEffect(() => {
        document.addEventListener('scroll', handleScroll)
        return ()=>{
            document.removeEventListener('scroll', handleScroll)
        }
    })

}



const useResize = (cb) => {


    const handleResize = (event) => {
        cb(document.documentElement.clientWidth, document.documentElement.clientHeight)
    }

    useLayoutEffect(() => {
        window.addEventListener('resize', handleResize)
        return ()=>{
            window.removeEventListener('resize', handleResize)
        }
    })

}


const useViewportHeight = () => {
    const [viewportHeight, setViewportHeight] = useState(document.documentElement.clientHeight)
    const handleResize = (event) => {
        const h = document.documentElement.clientHeight;
        setViewportHeight(h)
    }

    useLayoutEffect(() => {
        window.addEventListener('resize', handleResize)
               
        return ()=>{
            window.removeEventListener('resize', handleResize)
        }
    })
    return viewportHeight
}


const useViewportWidth = () => {
    const [viewportWidth, setViewportWidth] = useState(document.documentElement.clientWidth)
    const handleResize = (event) => {
        const w = document.documentElement.clientWidth;
        setViewportWidth(w)
    }

    useLayoutEffect(() => {
        window.addEventListener('resize', handleResize)
               
        return ()=>{
            window.removeEventListener('resize', handleResize)
        }
    })
    return viewportWidth
}

export { useScrollRef, useViewportHeight, useViewportWidth, useResize}