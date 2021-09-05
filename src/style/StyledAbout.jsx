import styled from 'styled-components';

const AboutStyle = styled.nav`
    background: #0F0E17;
    display: flex ; 
    justify-content: space-between;
    padding: 10px ;
`;

const ContHijo = styled.a`
    color: #fff;
    text-decoration: none;
    padding: 5px;
    margin: 5px;
    font-size: 20px;
`;

const Button = styled.button`
    background-color: #FF8906;
    color: #fff;
    padding: 7px;
    margin-right: 15px;
    border: 2px solid #000;
    border-radius: 2px;
    cursor:pointer;
    overflow: hidden;
`;
const Trabajos = styled.div`
    display: flex ; 
    justify-content: space-around;
`;

const ContainerBody = styled.div`
    background: #0F0E17;
    height: 89.6vh;
    display: flex ; 
    justify-content: space-around;
    padding-top: 20px;
`;
const TitleH2 = styled.h1`
    font-size:65px ;
    color: #fff ;
    margin-left: 0;
    padding-left: 0;
    margin-top: 140px;
    font-family: 'Nunito', sans-serif;
`;
const Perro = styled.p`
    font-size: 25px;
    color: #fff ;
    font-family: 'Lora';
`;

const Llama = styled.img`
    position: absolute;
    bottom: 20px;
    left: 20px;
`;
const Reporte = styled.div`
    background: #fff;
    height: 50vh;
    display: flex ; 
    justify-content: space-around;
    padding-top: 20px;
`;

const Gatico = styled.p`
    font-size: 25px;
    color: #0F0E17 ;
    font-family: 'Lora';
`;
const Raton = styled.h1`
    font-family: 'Nunito', sans-serif;
    font-size:50px ;
    color: #0F0E17 ;
    margin-left: 0;
    padding-left: 0;
`;
const Pendiente = styled.div`
    position: absolute;
    background: #CA8450 ;
    left: 40px;
    width: 37vw;
    height: 47vh;
    margin-top: 130px;
    padding: 5px;
    border-radius: 10px;
`;
const terminido = styled.button`
    background-color: Transparent;
    border: 2px solid #000;
    cursor:pointer;
    overflow: hidden;
    padding: 7px;
`;
const PendienteDos = styled.div`
    position: absolute;
    background: #CA8450 ;
    right: 180px;
    width: 37vw;
    height: 47vh;
    margin-top: 100px;
    padding: 5px;
    border-radius: 10px;
`;
const Tres = styled.button`
    background-color: Transparent;
    border: 2px solid #000;
    cursor:pointer;
    overflow: hidden;
    padding: 8px;
    position: absolute; 
    left: 42vw;
    bottom: -1500px;
    width: 180px;
`;
const Servicios = styled.div`
    background: linear-gradient(#FEB692, #EA5455);
    display: flex ; 
    justify-content: space-around;
    margin-top: 50px;
    padding: 15px;
`;
const BottomServicio = styled.button`
    background-color: #000;
    border: 2px solid #000;
    cursor:pointer;
    overflow: hidden;
    padding: 10px;
    color:#FF8906;
    padding: 8px;
    display: flex;
`;
const Papel = styled.p`
    font-size: 25px;
    color: #fff ;
    font-family: 'Lora';
    margin-top: 40vh;
`; 
const Tijeras = styled.p`
    font-size: 25px;
    color: #fff ;
    font-family: 'Lora';
`;

export const AboutS = AboutStyle
export const Enlace = ContHijo
export const But = Button
export const Bod = ContainerBody
export const StiloH2 = TitleH2
export const Parrafo = Perro
export const LlamaImg = Llama
export const Body3 = Reporte
export const Gato = Gatico
export const Jirafa = Raton
export const Conejo = Trabajos
export const Alerta = Pendiente
export const OtroBut = terminido
export const AlertaDos = PendienteDos
export const OtroTres = Tres
export const ServiciosT = Servicios
export const BotonServicios = BottomServicio
export const TestimonioP = Papel
export const TijerasTres = Tijeras