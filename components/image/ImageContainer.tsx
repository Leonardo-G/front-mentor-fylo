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
}

const BoxContainer = styled.div`
    position: relative;
    height: ${ ({ height }: { height?: string, width?: string, zIndex?: number; xs?: {} }) => height ? height : "auto" };
    width: ${ ({ width }) => width ? width : "100%" };
    z-index: ${ ({ zIndex }) => zIndex && zIndex };
    @media (max-width: 480px){
        ${ ({ xs }) => xs ? xs : "" };
    }
`

export const ImageContainer: FC<Props> = ({ height, width, src, alt, responsiveXS, cover, zIndex }) => {
    return (
        <BoxContainer 
            height={ height } 
            width={ width } 
            xs={ responsiveXS }
            zIndex={ zIndex }    
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
