//Archivos de estilos
import styled from "styled-components";

//ESTILO "BOX": 
//Estilo para definir el color de fondo, padding, margin, heigth and width;
export const Box = styled.div`
    background: ${ ({ background }: { 
        xm?: {};
        xs?: {};
        background?: string; 
        padding?: string; 
        height?: string;
        width?: string 
        mt?: number;               //MARGIN-TOP
        mx?: number;               
        center?: boolean; 
        widthResponsive?: boolean; 
        minWidth?: string;
        flexAuto?: boolean;
        flex?: number;
        transform?: string;
        shadow?: string;
        borderRadius?: string;
        border?: string;
    }) => background ? background : "transparent" };
    margin: ${ ({ mt, center }) => mt && center ? `${ mt }px auto 0 auto` : center ? "0 auto" : mt ? `${ mt }px 0 0 0` : "0px" };
    padding: ${ ({ padding }) => padding ? padding : "0px" };
    height: ${ ({ height }) => height ? height : "100%" };
    width: ${ ({ width }) => width ? `min(${width}, 100%)` : "fit-content" };
    min-width: ${ ({ minWidth }) => minWidth ? minWidth : "auto" };
    flex: ${ ({ flexAuto, flex }) => flexAuto ? 1 : flex ? flex : "none" };
    transform: ${ ({ transform }) => transform ? transform : "none" };
    border-radius: ${ ({ borderRadius }) => borderRadius ? borderRadius : "none" };
    border: ${ ({ border }) => border ? border : "none" };

    @media (max-width: 720px){
        ${ ({ xm }) => xm ? xm : "" };
    }
    
    @media (max-width: 480px){
        ${ ({ xs }) => xs ? xs : "" };
        width: ${ ({ widthResponsive, width }) => widthResponsive ? "100%" : width ? `min(${width}, 100%)` : "fit-content" };
    }
`

//ESTILO FLEX;
// ESTILO PARA UTILIZAR LAS PROPIEDADES DE FLEX;
export const Flex = styled.div`
    display: flex;
    flex-direction: ${ ({ direction }: { 
        direction?: "column" | "row"; 
        directionResponsive?: boolean;
        rowGap?: number; 
        rowGapXM?: number;
        columnGap?: number;
        columnGapXM?: number;
        columnGapXS?: number;
        gap?: number;
        justifyContent?: "space-between" | "space-around" | "center";
        alignItems?: "center";
        width?: string;
        wrap?: boolean;
        xs?: {};
    }) => direction ? "column" : "row" };
    row-gap: ${ ({ rowGap, gap }) => gap ? `${ gap }px` : rowGap ? `${ rowGap }px` : "0px" };
    column-gap: ${ ({ columnGap, gap }) => gap ? `${ gap }px` : columnGap ? `${ columnGap }px` : "0px" };
    justify-content: ${ ({ justifyContent }) => justifyContent ? justifyContent : "none" };
    align-items: ${ ({ alignItems }) => alignItems ? alignItems : "none" };
    width: ${ ({ width }) => width ? width : "fit-content" };
    height: 100%;
    flex-wrap: ${ ({ wrap }) => wrap ? "wrap" : "auto" };

    @media (max-width: 720px){
        row-gap: ${ ({ rowGapXM, rowGap, gap }) => rowGapXM ? `${ rowGapXM }px` : gap ? `${ gap }px` : rowGap ? `${ rowGap }px` : "0px" };
        column-gap: ${ ({ columnGapXM, columnGap, gap }) => columnGapXM ? `${ columnGapXM }px` : gap ? `${ gap }px` : columnGap ? `${ columnGap }px` : "0px" };
    }

    @media (max-width: 480px){
        ${ ({ xs }) => xs ? xs : "" };
        flex-direction: ${ ({ directionResponsive, direction }) => directionResponsive ? "column" : direction ? direction : "row" };
        column-gap: ${ ({ columnGapXS, columnGapXM, columnGap, gap }) => columnGapXS ? `${ columnGapXS }px` : columnGapXM ? `${ columnGapXM }px` : gap ? `${ gap }px` : columnGap ? `${ columnGap }px` : "0px" };
    }
`