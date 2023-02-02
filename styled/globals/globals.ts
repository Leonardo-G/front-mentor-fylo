import styled from "styled-components";

//Estilo global que se coloca en LAYOUT PAGE.tsx. 
//Se puede utilizar las clases en cualquier nodo hijo
export const StyleGlobals = styled.div`
    .container {
        width: min( 95%, 1240px );
        margin: 0 auto;
    }
`

//Estilo SECTION: Solamente para separar el contenido
export const Section = styled.section`
    position: relative;
    background: ${ ({ background }: { background?: string, height?: string }) => background ? background : "transparent" };
    padding: 100px 0;
    height: ${ ({ height }) => height ? height : "auto" };


    @media (max-width: 480px){
        padding: 50px 0;
    }
`