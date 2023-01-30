import React from 'react'

import { ImageContainer } from '../image/ImageContainer'

import { Box, Flex } from '@/styled/box/box'
import { Text, Title } from '@/styled/text/text'
import { Section } from '@/styled/globals/globals'

export const Features = () => {
    return (
        <Section background='hsl(218, 28%, 13%)'>
            <Box width="75%" center>
                <Flex 
                    justifyContent='center' 
                    columnGap={ 200 } 
                    columnGapXM={ 50 }
                    rowGap={ 100 }
                    directionResponsive
                >
                    <Flex direction='column' alignItems='center' rowGap={ 20 }>
                        <ImageContainer 
                            src="./img/icon-access-anywhere.svg"
                            width='150px'
                            height='150px'
                            zIndex={ 1 }
                        />
                        <Title center>Access your files, anywhere</Title>
                        <Text center>The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.</Text>
                    </Flex>
                    <Flex direction='column' alignItems='center' rowGap={ 20 }>
                        <ImageContainer 
                            src="./img/icon-security.svg"
                            width='150px'
                            height='150px'
                            zIndex={ 1 }
                        />
                        <Title center>Security you can trust</Title>
                        <Text center>2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.</Text>
                    </Flex>
                </Flex>
            </Box>
            <Box mt={ 100 } width="70%" center>
                <Flex 
                    justifyContent='center' 
                    columnGap={ 200 } 
                    columnGapXM={ 50 } 
                    directionResponsive
                    rowGap={ 100 }
                >
                    <Flex direction='column' alignItems='center' rowGap={ 20 }>
                        <ImageContainer 
                            src="./img/icon-collaboration.svg"
                            width='150px'
                            height='150px'
                        />
                        <Title center>Real-time collaboration</Title>
                        <Text center>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</Text>
                    </Flex>
                    <Flex direction='column' alignItems='center' rowGap={ 20 }>
                        <ImageContainer 
                            src="./img/icon-any-file.svg"
                            width='150px'
                            height='150px'
                        />
                        <Title center>Store any type of file</Title>
                        <Text center>Wheter you are sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.</Text>
                    </Flex>
                </Flex>
            </Box>
        </Section>
    )
}
