//Archivos de estilos
import styled from "styled-components";

//ESTILO "BOX": 
//Estilo para definir el color de fondo, padding, margin, heigth and width;
export const Box = styled.div`
    background: ${ ({ background }: { background?: string }) => background ? background : "transparent" };
    min-width: 100%;
    min-height: 100%;
`