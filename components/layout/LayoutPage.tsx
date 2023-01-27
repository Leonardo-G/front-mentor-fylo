import React, { FC, ReactNode } from 'react'
import styled from 'styled-components';

import { Box } from '../../styled/box/box';

interface Props {
    children: ReactNode;
}


const LayoutPage: FC<Props> = ({ children }) => {
    return (
        <Box background='hsl(217, 28%, 15%)'>
            <header>
                
            </header>
            <main>
                { children }
            </main>
            <footer>
            </footer>
        </Box>
    )
}

export default LayoutPage