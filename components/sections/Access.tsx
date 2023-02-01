import React from 'react'

import { Box, Flex } from '@/styled/box/box'
import { Section } from '@/styled/globals/globals'
import { Text, Title } from '@/styled/text/text'
import { Button } from '@/styled/button/buttons'

export const Access = () => {
    return (
        <Section background='hsl(218, 28%, 13%)'>
            <Box className='container'>
                <Box center width='900px' padding='30px 30px 10px 30px'>
                    <Title center>Get early access today</Title>
                    <Text center padding='20px 0'>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</Text>
                    <Flex>
                        <Button width={ 900 } background='hsl(176, 68%, 64%)'>Get Started For Free</Button>
                    </Flex>
                </Box>
            </Box>
        </Section>
    )
}
