import React from 'react';

import { Bod, StiloH2, Parrafo, LlamaImg, Body3, Gato, Jirafa, Conejo, Alerta, But, OtroBut, AlertaDos, OtroTres, ServiciosT, BotonServicios, TestimonioP, TijerasTres, Formulario, TituloF, TituloP, TyImput, UltimoButton, AboutS, FooterDos} from '../style/StyledAbout';

export const Education = () => {
    return (
        <Bod>
            <div>
                <StiloH2>¡Hola a todos!<br />Soy Victor Gelvis</StiloH2>
                <Parrafo>Developer que le encanta implementar diseños que<br /> inspiran y atraen a las personas.</Parrafo>
            </div>
            <div>
                <img src="https://res.cloudinary.com/ohtico/image/upload/v1630636628/Victor/perfil_eqziva.png" alt="" srcset="" />
            </div>
            <LlamaImg src="https://res.cloudinary.com/dpkaiokho/image/upload/v1630633110/Portafolio_Geek/flecha-hacia-abajo_y7xma0.png" alt="" srcset="" />
        </Bod>
    )
}

export const Reporte = () => {
    return (
        <Body3>
            <div>
                <Jirafa>Parece magia, funciona<br /> con código..</Jirafa>
            </div>
            <div>
                <Gato>A lo largo de mi carrera como Frontend, he<br /> tenido el privilegio de trabajar en proyectos<br /> retadores e increíbles.</Gato>
            </div>
        </Body3>
    )
}

export const Captura = () => {
    return (
        <Conejo>
            <img src="https://res.cloudinary.com/ohtico/image/upload/v1630781198/Victor/carritoloco_pjnb36.png" alt="" srcset="" />
            <Alerta>
                <Jirafa>NIKO</Jirafa>
                <Gato>Niko es una de las marcas y proveedores de equipamiento tecnologica más reconocidas y valiosas en todo el mundo.</Gato>
                <But>Ver proyecto completo</But>
                <OtroBut>Ver código</OtroBut>
            </Alerta>
        </Conejo>
    )
}

export const CapturaDos = () => {
    return (
        <Conejo>
            <div>
                <img src="https://res.cloudinary.com/dpkaiokho/image/upload/v1630635600/Portafolio_Geek/bg_1_foxwna.png" alt="" srcset="" />
            </div>
            <div>
                <img src="https://res.cloudinary.com/dpkaiokho/image/upload/v1630635601/Portafolio_Geek/bg_vziird.png" alt="" srcset="" />
            </div>
            <Alerta>
                <Jirafa>Príncipe fresco</Jirafa>
                <Gato>La serie está protagonizada por Will Smith como una versión ficticia de sí...</Gato>
                <But>Ver proyecto completo</But>
                <OtroBut>Ver código</OtroBut>
            </Alerta>
            <AlertaDos>
                <Jirafa>Amazonas</Jirafa>
                <Gato>Amazonas es la empresa en internet de venta al por menor más grande del...</Gato>
                <But>Ver proyecto completo</But>
                <OtroBut>Ver código</OtroBut>
            </AlertaDos>
            <div>
                <OtroTres>Ver más proyecto<i class="material-icons" id="car">arrow_forward</i></OtroTres>
            </div>
        </Conejo>
    )
}

export const Servicios = () => {
    return (
        <ServiciosT>
            <div>
                <Jirafa><strong>Servicio</strong></Jirafa>
                <Gato><strong>Diseño</strong><br /><br />Experiencia de usuarios<br /><br />Interfaz de usuario<br /><br />Aplicaciones web<br /><br />Prueba de concepto</Gato>
                <BotonServicios>Ver servicios de diseño<i class="material-icons" id="car">arrow_forward</i></BotonServicios>
            </div>
            <div>
                <Gato><br /><br /><br /><br /><strong>Desarrollo</strong><br /><br />Aplicaciones móviles<br /><br />Sitio web<br /><br />Aplicaciones web progresivas</Gato>
                <BotonServicios>Ver servicios de desarrollo<i class="material-icons" id="car">arrow_forward</i></BotonServicios>
            </div>
            <div>
                <Gato><br /><br /><br /><br /><strong>Marca</strong><br /><br />Identidad de la marca<br /><br />Estrategia de marca</Gato>
                <BotonServicios>Ver servicios de marca<i class="material-icons" id="car">arrow_forward</i></BotonServicios>
            </div>
        </ServiciosT>
    )
}
export const Testimonios = () => {
    return (
        <Bod>
            <div>
                <StiloH2><strong>Testimonio</strong></StiloH2>
                <Parrafo><img src="https://res.cloudinary.com/ohtico/image/upload/v1630792777/Victor/Ellipse_1_myse0s.png" alt="" /><strong> Juan Antonio</strong><br /><br />Tengo algunos años trabajando<br /> con Javascript y aún así aprendí<br /> varias cosas importantes de<br /> Victor y como utiliza Javascript<br /> en el día a día.</Parrafo>
            </div>
            <TestimonioP>
                <Parrafo><img src="https://res.cloudinary.com/ohtico/image/upload/v1630793139/Victor/Ellipse_1_hac5ky.png" alt="" /><strong> Albert Flores</strong><br /><br />Me gusto ver el porqué de las<br /> cosas del core de React, saber la<br /> magia que ocurre por detrás,<br /> excelente profesor Victor<br />
                    gran vocación.</Parrafo>
            </TestimonioP>
            <TestimonioP>
                <Parrafo><img src="https://res.cloudinary.com/ohtico/image/upload/v1630793171/Victor/Ellipse_1_1_e9hl0b.png" alt="" /><strong> Darlene Robertson</strong><br /><br />Ayuda a entender el porqué de las<br /> cosas, lo cual nos da el poder de<br /> aprovechar mejor el lenguaje y las<br /> herramientas que tenemos.</Parrafo>
            </TestimonioP>
        </Bod>
    )
}
export const TestimoniosDos = () => {
    return (
        <Bod>
            <TijerasTres>
                <Parrafo><img src="https://res.cloudinary.com/ohtico/image/upload/v1630799417/Victor/Ellipse_1_2_we6j4a.png" alt="" /><strong> Jane Cooper</strong><br /><br />La forma como explica y trabaja <br /> los temas Antonio, me ha ayudado <br /> a comprender y sacarle el mayor<br /> provecho a HTML y CSS.</Parrafo>
            </TijerasTres>
            <TijerasTres>
                <Parrafo><img src="https://res.cloudinary.com/ohtico/image/upload/v1630799468/Victor/Ellipse_1_3_jlv0wz.png" alt="" /><strong> Eleanor Pena</strong><br /><br />Antonio ha sido de gran ayuda <br /> para acelerar ciertos esfuerzos de <br /> desarrollo. Lo que nos hubiera <br /> llevado 6 meses solo les llevó 1,5 <br /> meses.</Parrafo>
            </TijerasTres>
            <TijerasTres>
                <Parrafo><img src="https://res.cloudinary.com/ohtico/image/upload/v1630799487/Victor/Ellipse_1_4_ygpxgr.png" alt="" /><strong> Guy Hawkins</strong><br /><br />Antonio ha superado mis <br /> expectativas desde el diseño hasta <br /> el desarrollo.</Parrafo>
            </TijerasTres>
        </Bod>
    )
}

export const Area = () => {
    return (
        <Conejo>
            <img src="https://res.cloudinary.com/ohtico/image/upload/v1630799788/Victor/img_ltzv1u.jpg" alt="" srcset="" />
        </Conejo>
    )
}
export const Contacto = () => {
    return (
        <ServiciosT>
            <Formulario>

                <div>
                    <TituloF>Contacto</TituloF>
                <TituloP>Si está interesado en trabajar conmigo<br/> en su próximo proyecto, no dude en ponerse en contacto.</TituloP>
                </div>
                <div>
                      <TyImput  placeholder="Nombre Completo" />
                      <TyImput  placeholder="Correo Electronico" />
                      <TyImput  placeholder="Mensaje" />
                      <UltimoButton>Enviar mensaje</UltimoButton>
                </div>
            </Formulario>
        </ServiciosT>
    )
}

export const Footer = () => {
    return (
        <AboutS>
            <div>
                <img src="https://res.cloudinary.com/ohtico/image/upload/c_scale,w_105/v1630805610/Logo/Firma_blanca_dvqstl.png"alt="" srcset="" />
            </div>
            <FooterDos>Hecho con <i class="material-icons" id="car">favorite</i> de Victor. Copyright 2021 - Todos los derechos reservados.</FooterDos>
            <div>
                <img src="https://res.cloudinary.com/ohtico/image/upload/v1630805481/Victor/social_y9ilnt.png" alt="" srcset="" />
            </div>
        </AboutS>
    )
}