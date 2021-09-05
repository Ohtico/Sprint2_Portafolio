import React from 'react';

import { AboutS, Enlace, But } from '../style/StyledAbout';


const About = () => {
    return (
        <AboutS>
            <div>
                <Enlace href="#" ><img src="https://res.cloudinary.com/ohtico/image/upload/c_scale,w_58/v1630805610/Logo/Firma_blanca_dvqstl.png"alt="" srcset="" /></Enlace>
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
