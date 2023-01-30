import styled from "styled-components";

//Estilo global que se coloca en LAYOUT PAGE.tsx. 
//Se puede utilizar las clases en cualquier nodo hijo
export const StyleGlobals = styled.div`
    .container {
        width: min( 95%, 1440px );
        margin: 0 auto;
    }
`

//Estilo SECTION: Solamente para separar el contenido
export const Section = styled.section`
    position: relative;
    background: ${ ({ background }: { background?: string }) => background ? background : "transparent" };
    padding: 150px 0;

    @media (max-width: 480px){
        padding: 50px 0;
    }
`