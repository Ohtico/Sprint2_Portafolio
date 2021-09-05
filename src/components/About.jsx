import React from 'react';

import { AboutS, Enlace, But } from '../style/StyledAbout';


const About = () => {
    return (
        <AboutS>
            <div>
                <Enlace href="#" >Logo</Enlace>
                <Enlace href="#">Hola</Enlace>
                <Enlace href="#">Proyectos</Enlace>
                <Enlace href="#">Testimonio</Enlace>
                <Enlace href="#">Contacto</Enlace>
            </div>
            <div>
                <But>Descargar curriculum</But>
            </div>
        </AboutS >
    )
}

export default About;
