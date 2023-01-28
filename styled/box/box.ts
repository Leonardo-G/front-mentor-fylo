//Archivos de estilos
import styled from "styled-components";

//ESTILO "BOX": 
//Estilo para definir el color de fondo, padding, margin, heigth and width;
export const Box = styled.div`
    background: ${ ({ background }: { background?: string, padding?: string, height?: string, width?: string }) => background ? background : "transparent" };
    padding: ${ ({ padding }) => padding ? padding : "0px" };
    height: ${ ({ height }) => height ? height : "fit-content" };
    width: ${ ({ width }) => width ? width : "fit-content"};
`

//ESTILO FLEX;
// ESTILO PARA UTILIZAR LAS PROPIEDADES DE FLEX;
export const Flex = styled.div`
    display: flex;
    flex-direction: ${ ({ direction }: { 
        direction?: "column" | "row"; 
        rowGap?: number; 
        columnGap?: number;
        gap?: number;
        justifyContent?: "space-between" | "space-around";
        alignItems?: "center";
        width?: string;
    }) => direction ? "column" : "row" };
    row-gap: ${ ({ rowGap, gap }) => gap ? `${ gap }px` : rowGap ? `${ rowGap }px` : "0px" };
    column-gap: ${ ({ columnGap, gap }) => gap ? `${ gap }px` : columnGap ? `${ columnGap }px` : "0px" };
    justify-content: ${ ({ justifyContent }) => justifyContent ? justifyContent : "none" };
    align-items: ${ ({ alignItems }) => alignItems ? alignItems : "none" };
    width: ${ ({ width }) => width ? width : "fit-content" };
    height: 100%;
`