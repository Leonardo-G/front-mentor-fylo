import { Box, Flex } from '@/styled/box/box'
import { Section } from '@/styled/globals/globals'
import { Text, Title } from '@/styled/text/text'
import React from 'react'
import { ImageContainer } from '../image/ImageContainer'

export const Comments = () => {
    return (
        <Section background='hsl(218, 28%, 13%)'>
            <Box className='container'>
                <Flex columnGap={ 40 } wrap rowGap={ 40 }>
                    <Box 
                        background='hsl(219, 30%, 18%)'
                        padding="35px"
                        minWidth='240px'
                        flexAuto
                    >
                        <Text padding='10px 0 35px 0'>
                            Fylo has improved our team productivity by an order of magnitude. Since making the 
                            switch our team has become a well-oiled collaboration machine.
                        </Text>
                        <Flex alignItems='center' columnGap={ 15 }>
                            <Box>
                                <ImageContainer 
                                    src='/img/profile-1.jpg'
                                    height='40px'
                                    width='40px'
                                    circle
                                    cover
                                />
                            </Box>
                            <Box height='100%'>
                                <Title size={ 14 }>Satish Patel</Title>
                                <Text size={ 12 }>Founder & CEO, Huddle</Text>
                            </Box>
                        </Flex>
                    </Box>
                    <Box 
                        background='hsl(219, 30%, 18%)'
                        padding="35px"
                        minWidth='240px'
                        flexAuto
                    >
                        <Text padding='10px 0 35px 0'>
                            Fylo has improved our team productivity by an order of magnitude. Since making the 
                            switch our team has become a well-oiled collaboration machine.
                        </Text>
                        <Flex alignItems='center' columnGap={ 15 }>
                            <Box>
                                <ImageContainer 
                                    src='/img/profile-2.jpg'
                                    height='40px'
                                    width='40px'
                                    circle
                                    cover
                                />
                            </Box>
                            <Box height='100%'>
                                <Title size={ 14 }>Bruce McKenzie</Title>
                                <Text size={ 12 }>Founder & CEO, Huddle</Text>
                            </Box>
                        </Flex>
                    </Box>
                    <Box 
                        background='hsl(219, 30%, 18%)'
                        padding="35px"
                        minWidth='240px'
                        flexAuto
                    >
                        <Text padding='10px 0 35px 0'>
                            Fylo has improved our team productivity by an order of magnitude. Since making the 
                            switch our team has become a well-oiled collaboration machine.
                        </Text>
                        <Flex alignItems='center' columnGap={ 15 }>
                            <Box>
                                <ImageContainer 
                                    src='/img/profile-3.jpg'
                                    height='40px'
                                    width='40px'
                                    circle
                                    cover
                                />
                            </Box>
                            <Box height='100%'>
                                <Title size={ 14 }>Iva Boyd</Title>
                                <Text size={ 12 }>Founder & CEO, Huddle</Text>
                            </Box>
                        </Flex>
                    </Box>
                    
                </Flex>
            </Box>
        </Section>
    )
}
