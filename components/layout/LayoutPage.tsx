import { StyleGlobals } from '@/styled/globals/globals';
import React, { FC, ReactNode } from 'react'
import styled from 'styled-components';

import { Box } from '../../styled/box/box';
import { Nav } from '../nav/Nav';
import { Footer } from '../sections/Footer';

interface Props {
    children: ReactNode;
}


const LayoutPage: FC<Props> = ({ children }) => {
    return (
        <StyleGlobals>
            <Box background='hsl(217, 28%, 15%)' width='100%'>
                <header>
                    <Nav />
                </header>
                <main>
                    { children }
                </main>
                <footer>
                    <Footer />
                </footer>
            </Box>
        </StyleGlobals>
    )
}

export default LayoutPage