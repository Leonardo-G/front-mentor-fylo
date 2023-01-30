import styled from "styled-components";

//ESTILO PARA TEXTOS
export const Text = styled.p`
    font-size: ${ ({ size }: { xm?: {}, xs?: {}, size?: number, padding?: string, font?: "Raleway" | "Open Sans", pointer?: boolean }) => size ? `${ size }px` : "14px" };
    padding: ${ ({ padding }) => padding ? padding : "0px" };
    font-family: ${ ({ font }) => `${font ? font : "Open Sans"}, sans-serif` };
    cursor: ${ ({ pointer }) => pointer ? "pointer" : "text" };

    @media (max-width: 720px){
        ${ ({ xm }) => xm ? xm : "" };
    }

    @media (max-width: 480px){
        ${ ({ xs }) => xs ? xs : "" };
        font-size: ${ ({ size }) => size ? `${ size * 0.8 }px` : "12px" };
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
