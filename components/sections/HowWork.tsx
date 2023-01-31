import { Box, Flex } from '@/styled/box/box'
import { ButtonSecondary } from '@/styled/button/buttons'
import { Section } from '@/styled/globals/globals'
import { Text, Title } from '@/styled/text/text'
import React from 'react'
import { ImageContainer } from '../image/ImageContainer'

export const HowWork = () => {
    return (
        <Section background='hsl(218, 28%, 13%)'>
            <Box className='container'>
                <Flex 
                    alignItems='center' 
                    columnGap={ 50 }
                    directionResponsive
                    width='100%'
                >
                    <ImageContainer 
                        src='/img/illustration-stay-productive.png'
                        height='700px'
                        width='50%'
                        responsiveXS={{ width: "100%", height: "400px" }}
                    />
                    <Box width='50%' widthResponsive>
                        <Box>
                            <Box>
                                <Title size={ 45 } sizeXM={ 26 }>Stay productive, wherever you are</Title>
                            </Box>
                            <Text padding='20px 0 15px 0'>
                                Never let location be an issue when accessing your files. 
                                Fylo has you covered for all of your file storage needs.
                            </Text>
                            <Text>
                                Securely share files folders with friends, 
                                family and colleagues for live collaboration. No email attachments required.
                            </Text>
                            <ButtonSecondary color='hsl(176, 68%, 64%)'>
                                See how Fylo works
                            </ButtonSecondary>
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </Section>
    )
}
