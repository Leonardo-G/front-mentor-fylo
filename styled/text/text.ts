import styled from "styled-components";

export const Text = styled.p`
    size: ${ ({ size }: { size?: number, padding?: string, font?: "Raleway" | "Open Sans", pointer?: boolean }) => size ? `${ size }px` : "16px" };
    padding: ${ ({ padding }) => padding ? padding : "0px" };
    font-family: ${ ({ font }) => `${font ? font : "Open Sans"}, sans-serif` };
    cursor: ${ ({ pointer }) => pointer ? "pointer" : "text" };
`