import React, { FC } from 'react'
import Image from 'next/image';

import styled from 'styled-components';

interface Props {
    height?: string;
    width?: string;
    src: string;
    alt?: string;
    responsiveXS?: {};
    cover?: boolean;
    zIndex?: number;
    circle?: boolean;
}

const BoxContainer = styled.div`
    position: relative;
    height: ${ ({ height }: { 
        height?: string;
        width?: string;
        zIndex?: number; 
        xs?: {};
        circle?: boolean;
    }) => height ? height : "auto" };
    width: ${ ({ width }) => width ? width : "100%" };
    z-index: ${ ({ zIndex }) => zIndex && zIndex };
    border-radius: ${ ({ circle }) => circle ? "50%" : "auto" };
    overflow: hidden;

    @media (max-width: 480px){
        ${ ({ xs }) => xs ? xs : "" };
    }
`

export const ImageContainer: FC<Props> = ({ height, width, src, alt, responsiveXS, cover, zIndex, circle }) => {
    return (
        <BoxContainer 
            height={ height } 
            width={ width } 
            xs={ responsiveXS }
            zIndex={ zIndex } 
            circle={ circle } 
        >
            <Image 
                src={ src }
                alt={ alt || "Imagen" }
                fill
                style={{
                    objectFit: cover ? "cover" : "contain",
                }}
            />
        </BoxContainer>
    )
}
