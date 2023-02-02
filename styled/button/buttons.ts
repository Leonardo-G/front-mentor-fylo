import styled from "styled-components";

//ESTILO para botones. Se puede modificar:
//    Color de fondo
//    Ancho... Recordando que una vez superado su anchura, ocupara el 95% del ancho del dispositivo;
export const Button = styled.button`
    background: ${ ({ background }: {
        background?: string;
        width?: number;
        flex?: number;
        hover?: string;
    }) => background ? background : "transparent" };
    flex: ${ ({ flex }) => flex ? flex : "none" };
    color: #fff;
    z-index: 1;
    border: none;
    width: ${ ({ width }) => width ? `min(${ width }px, 100%)` : "fit-content" };
    cursor: pointer;
    font-weight: 700;
    font-size: 16px;
    padding: 20px 0;
    border-radius: 40px;
    transition: ease all .2s;
    
    &:hover{
        background: ${ ({ hover, background }) => hover ? hover : background };
        transition: ease all .2s;
    }
`

export const ButtonSecondary = styled.button`
    background: transparent;
    border: none; 
    padding: 0;
    color: ${ ({ color }: { color?: string }) => color ? color : "#fff" };
    transition: all ease 0.2s;
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    margin-top: 25px;
    cursor: pointer;
    transition: all ease 0.2s;
    padding-bottom: 6px;
    border-bottom: 1px solid ${ ({ color }) => color ? color : "#fff" };

    &:hover {
        color: #fff;
        transition: all ease 0.2s;
        border-bottom: 1px solid #fff;
    }
`