import React from 'react'

import { Box, Flex } from '@/styled/box/box'
import { Section } from '@/styled/globals/globals'
import { Text, Title } from '@/styled/text/text'
import { Button } from '@/styled/button/buttons'
import { Input } from '@/styled/input/input'

export const Access = () => {
    return (
        <Box background='hsl(218, 28%, 13%)' width='100%'>
            <Box className='container'>
                <Box 
                    center 
                    width='900px' 
                    padding='50px 60px 30px 60px' 
                    background='hsl(217, 28%, 15%)'
                    transform='translateY(40%)'
                    borderRadius='15px'
                >
                    <Title size={ 40 } sizeXS={ 25 } center>Get early access today</Title>
                    <Text 
                        center 
                        padding='30px 0'
                    >It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</Text>
                    <Flex width='100%' columnGap={ 40 } directionResponsive rowGap={ 30 }>
                        <Input type="email" placeholder="email@example.com"/>
                        <Button flex={ 1 } width={ 900 } background='hsl(176, 68%, 64%)'>Get Started For Free</Button>
                    </Flex>
                </Box>
            </Box>
        </Box>
    )
}
