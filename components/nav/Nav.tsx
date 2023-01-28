import React from 'react'

import { Box, Flex } from '../../styled/box/box';
import { ImageContainer } from '../image/ImageContainer';
import { Text } from '../../styled/text/text';

export const Nav = () => {
    return (
        <Box 
            className='container'
            padding='30px 0'
        >
            <Flex
                alignItems='center'
                justifyContent='space-between'
                width='100%'
            >
                <ImageContainer 
                    src='./img/logo.svg'
                    width='190px'
                    height='40px'
                />
                <Flex>
                    <Text font='Raleway' padding='0 30px' pointer>Features</Text>
                    <Text font='Raleway' padding='0 30px' pointer>Team</Text>
                    <Text font='Raleway' padding='0 30px' pointer>Sign In</Text>
                </Flex>
            </Flex>
        </Box>
    )
}
