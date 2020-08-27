/* eslint-disable react/prop-types */
import React from 'react';
import NavBar from './NavBar';
import ToTop from './ToTop';
import {useIntersectionObserver} from '../hooks'

const Pagina = ({ sections, children, onChangeMode }) => {

  const [activeSection, setActiveSection] = React.useState()

  const [setElements, entries] = useIntersectionObserver()

  React.useEffect(() => {
    setElements(sections.map(section => section.ref.current))
  }, [sections, setElements])

  React.useEffect(()=>{
    if(entries) entries.forEach(entry => {
      if(entry.isIntersecting){
     
        setActiveSection(entry.target)
      } 
    })
  }, [entries])

  let activeSectionId = activeSection ? activeSection.id : ''


  return (
  <>
    <NavBar links={sections} activeSection={activeSectionId} toggleTheme={onChangeMode}/>
      {children}
    <ToTop />
  </>
)};

export default Pagina;
