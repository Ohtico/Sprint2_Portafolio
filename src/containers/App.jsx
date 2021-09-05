import React from 'react';
import About from '../components/About';
import {Education, Reporte, Captura, CapturaDos, Servicios, Testimonios, TestimoniosDos, Area, Contacto, Footer} from '../components/Cuerpo';


export const App = () => {
    return (
        <div>
            <About />
            <Education/>
            <Reporte/>
            <Captura/>
            <CapturaDos/>
            <Servicios/>
            <Testimonios/>
            <TestimoniosDos/>
            <Area/>
            <Contacto/>
            <Footer/>
        </div>
    )
}