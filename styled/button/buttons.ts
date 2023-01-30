import styled from "styled-components";

//ESTILO para botones. Se puede modificar:
//    Color de fondo
//    Ancho... Recordando que una vez superado su anchura, ocupara el 95% del ancho del dispositivo;
export const Button = styled.button`
    background: ${ ({ background }: {
        background?: string;
        width?: number;
    }) => background ? background : "transparent" };
    color: #fff;
    z-index: 1;
    border: none;
    width: ${ ({ width }) => width ? `min(${ width }px, 95%)` : "fit-content" };
    cursor: pointer;
    font-weight: 700;
    font-size: 16px;
    padding: 20px 0;
    border-radius: 40px;
`