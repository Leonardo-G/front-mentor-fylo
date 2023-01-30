import React, { FC } from 'react'
import Image from 'next/image';

import styled from 'styled-components';

interface Props {
    height?: string;
    width?: string;
    src: string;
    alt?: string;
    responsiveXS?: {};
}

const BoxContainer = styled.div`
    position: relative;
    height: ${ ({ height }: { height?: string, width?: string, xs?: {} }) => height ? height : "auto" };
    width: ${ ({ width }) => width ? width : "fit-content" };

    @media (max-width: 480px){
        ${ ({ xs }) => xs ? xs : "" };
    }
`

export const ImageContainer: FC<Props> = ({ height, width, src, alt, responsiveXS }) => {
    return (
        <BoxContainer height={ height } width={ width } xs={ responsiveXS }>
            <Image 
                src={ src }
                alt={ alt || "Imagen" }
                fill
                style={{
                    objectFit: "contain"
                }}
            />
        </BoxContainer>
    )
}
