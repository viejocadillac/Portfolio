import React from 'react';
import styled from 'styled-components';
import Proyecto from './Proyecto'



const ProyectosContainer = ({className})=>{

    const [proyectos, setProyectos] = React.useState([])

    React.useEffect(()=>{
        // fetch proyectos
        const DOWNLOADED_PROYECTOS = [
            {
                nombre:'ReactSort',
                descripcion:'Demostración de algoritmos',
                link:'https://t4edesign.com/wp-content/uploads/2017/11/Material-design-300x169.jpg',
            },
            {
                nombre:'Ordenadito',
                descripcion:'Juego didáctico.',
                link:'https://t4edesign.com/wp-content/uploads/2017/11/02-pagekit-user-interface.jpg',
            },
            {
                nombre:'Medio Trato',
                descripcion:'Juego interactivo.',
                link:'https://noti-tec.webcindario.com/programacion_web/img/background_material_negro_rosa.jpg',
            },
            {
                nombre:'Germina',
                descripcion:'Diseño web.',
                link:'https://noti-tec.webcindario.com/programacion_web/img/background_material_negro_rosa.jpg',
            }
        ]

        setProyectos(DOWNLOADED_PROYECTOS)
    }, [])


    return (
        <div className={className}>
            {
                 proyectos.map((proyecto) => {
                    return <Proyecto key={proyecto.nombre} nombre={proyecto.nombre} descripcion={proyecto.descripcion} link={proyecto.link}/>
                })
            }
 
        </div>
    )
}

export default styled(ProyectosContainer)`
    margin-bottom: 4rem;
    display: grid;
    grid-template-columns: repeat( auto-fill, minmax(200px, 1fr) );
    gap: 1rem;      
`