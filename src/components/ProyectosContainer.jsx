import React from 'react';
import styled from 'styled-components';
import Proyecto from './Proyecto'



const ProyectosContainer = ({className})=>{

    const [proyectos, setProyectos] = React.useState([])

    React.useEffect(() => {
        // Fetch projects from my Github account
        fetch('https://api.github.com/users/viejocadillac/repos')
        .then((response) => {
           
            return response.json()
        })
        .then( (res) => {
            setProyectos(res)
        }).catch((err) => {

        })
        
    }, [])


    return (
        <div className={className}>
            {
                proyectos.map((proyecto) => {
                    return (
                        <Proyecto 
                            key={proyecto.name} 
                            nombre={proyecto.name} 
                            descripcion={proyecto.description} 
                            githubLink={proyecto.html_url}
                            liveUrl={proyecto.homepage}
                        />
                    )
                })
            }
 
        </div>
    )
}

export default styled(ProyectosContainer)`
    margin-bottom: 4rem;
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(300px, 1fr) );
    gap: 1rem;      
`