import React from 'react'

import { ImageContainer } from '../image/ImageContainer';

import { Box, Flex } from '../../styled/box/box';
import { Text } from '../../styled/text/text';

export const Nav = () => {
    return (
        <Box 
            className='container'
            padding='30px 0 0 0'
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
                    responsiveXS={{
                        width: "80px"
                    }}
                />
                <Flex>
                    <Text 
                        font='Raleway' 
                        padding='0 30px' 
                        pointer
                        xs={{
                            "padding": "0 12.5px"
                        }}
                    >Features</Text>
                    <Text 
                        font='Raleway' 
                        padding='0 30px' 
                        pointer
                        xs={{
                            "padding": "0 12.5px"
                        }}
                    >Team</Text>
                    <Text 
                        font='Raleway' 
                        padding='0 30px' 
                        pointer
                        xs={{
                            "padding": "0 12.5px"
                        }}
                    >Sign In</Text>
                </Flex>
            </Flex>
        </Box>
    )
}
