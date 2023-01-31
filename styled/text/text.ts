import styled from "styled-components";

//ESTILO PARA TEXTOS
export const Text = styled.p`
    font-size: ${ ({ size }: { 
        xm?: {}, xs?: {}, size?: number, padding?: string, font?: "Raleway" | "Open Sans", pointer?: boolean;
        center?: boolean;  
        sizeXM?: number;  
        sizeXS?: number;
    }) => size ? `${ size }px` : "16px" };
    padding: ${ ({ padding }) => padding ? padding : "0px" };
    font-family: ${ ({ font }) => `${font ? font : "Open Sans"}, sans-serif` };
    cursor: ${ ({ pointer }) => pointer ? "pointer" : "text" };
    text-align: ${ ({ center }) => center ? "center" : "none" };
    z-index: 1;
    @media (max-width: 720px){
        ${ ({ xm }) => xm ? xm : "" };
        font-size: ${ ({ sizeXM, size }) => sizeXM ? `${sizeXM}px` : size ? `${size}px` : "14px" };
    }

    @media (max-width: 480px){
        ${ ({ xs }) => xs ? xs : "" };
        font-size: ${ ({ sizeXS, size }) => sizeXS ? `${ sizeXS }px` : size ? `${ sizeXS }px` : "14px" };
    }
`

export const TextMain = styled.h1`
    font-size: ${ ({ size }: { 
        xm?: {};
        xs?: {};
        size?: number;
        sizeXM?: number;
        sizeXS?: number;
        padding?: string;
        font?: "Raleway" | "Open Sans";
        pointer?: boolean;
        center?: boolean;
    }) => size ? `${ size }px` : "14px" };
    text-align: ${ ({ center }) => center ? "center" : "none" };
    padding: ${ ({ padding }) => padding ? padding : "0px" };
    font-family: ${ ({ font }) => `${font ? font : "Open Sans"}, sans-serif` };
    cursor: ${ ({ pointer }) => pointer ? "pointer" : "text" };

    @media (max-width: 720px){
        ${ ({ xm }) => xm ? xm : "" };
        font-size: ${ ({ sizeXM, size }) => sizeXM ? `${sizeXM}px` : size ? `${size}px` : "14px" };
    }

    @media (max-width: 480px){
        ${ ({ xs }) => xs ? xs : "" };
        font-size: ${ ({ size }) => size ? `${ size * 0.8 }px` : "12px" };
        font-size: ${ ({ sizeXS, sizeXM, size }) => sizeXS ? `${sizeXS}px` : sizeXM ? `${sizeXM}px` : size ? `${size}px` : "14px" };
    }
`

//ESTILO para titulos
export const Title = styled.h3`
    font-size: ${ ({ size }: {
        size?: number;
        sizeXM?: number;
        sizeXS?: number;
        center?: boolean;
    }) => size ? `${size}px` : "20px" };
    font-weight: 700;
    text-align: ${ ({ center }) => center ? "center" : "auto" };
    font-family: "Raleway", sans-serif;

    @media (max-width: 720px){
        font-size: ${ ({ size, sizeXM }) => sizeXM ? `${sizeXM}px` : size ? `${size}px` : "20px" }
    }
`
