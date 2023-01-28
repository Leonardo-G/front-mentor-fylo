import React, { FC } from 'react'
import Image from 'next/image';

import styled from 'styled-components';

interface Props {
    height?: string;
    width?: string;
    src: string;
    alt?: string;
}

const BoxContainer = styled.div`
    position: relative;
    height: ${ ({ height }: { height?: string, width?: string }) => height ? height : "auto" };
    width: ${ ({ width }) => width ? width : "fit-content" };
`

export const ImageContainer: FC<Props> = ({ height, width, src, alt }) => {
    return (
        <BoxContainer height={ height } width={ width }>
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
