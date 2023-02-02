import React from 'react'

import { ImageContainer } from '../image/ImageContainer'

import { Box, Flex } from '@/styled/box/box'
import { Text } from '@/styled/text/text'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
    return (
        <Box background='hsl(216, 53%, 9%)' width='100%'>
            <Box className='container' padding='200px 0 30px 0'>
                <ImageContainer 
                    src='./img/logo.svg'
                    width='150px'
                    height='40px'
                    responsiveXS={{
                        width: "80px"
                    }}
                />
                <Box padding='40px 0'>
                    <Flex columnGap={ 60 } rowGap={ 50 } wrap justifyContent='center'>
                        <Box flex={ 1.7 }>
                            <Flex columnGap={ 20 }>
                                <ImageContainer 
                                    src='./img/icon-location.svg'
                                    width='30px'
                                    height='30px'
                                    responsiveXS={{
                                        width: "30px"
                                    }}
                                />
                                <Text>
                                    Lorem ipsum dolor sit amet consectetur 
                                    adipisicing elit. Ullam sunt harum earum 
                                    placeat voluptatum neque velit? Error minus
                                </Text>
                            </Flex>
                        </Box>
                        <Box flexAuto>
                            <Flex columnGap={ 20 }>
                                <ImageContainer 
                                    src='./img/icon-phone.svg'
                                    width='30px'
                                    height='30px'
                                    responsiveXS={{
                                        width: "30px"
                                    }}
                                />
                                <Text padding='0 0 20px 0'>+1-543-23-45677</Text>
                            </Flex>
                            <Flex columnGap={ 20 }>
                                <ImageContainer 
                                    src='./img/icon-email.svg'
                                    width='30px'
                                    height='30px'
                                    responsiveXS={{
                                        width: "30px"
                                    }}
                                />
                                <Text>example@fylo.com</Text>
                            </Flex>
                        </Box>
                        <Box flexAuto>
                            <Flex columnGap={ 60 }>
                                <Flex direction='column'>
                                    <Text>About Us</Text>
                                    <Text>Jobs</Text>
                                    <Text>Press</Text>
                                    <Text>Blog</Text>
                                </Flex>
                                <Flex direction='column'>
                                    <Text>Contact Us</Text>
                                    <Text>Terms</Text>
                                    <Text>Privacy</Text>
                                </Flex>
                            </Flex>
                        </Box>
                        <Box flexAuto center>
                            <Flex columnGap={ 20 } width='100%' justifyContent='center'>
                                <Box borderRadius='50%' border='1px solid #fff' padding='10px'>
                                    <FontAwesomeIcon icon={ faFacebookF } color="#fff" size='xl'/>
                                </Box>
                                <Box borderRadius='50%' border='1px solid #fff' padding='10px'>
                                    <FontAwesomeIcon icon={ faTwitter } color="#fff" size='xl'/>
                                </Box>
                                <Box borderRadius='50%' border='1px solid #fff' padding='10px'>
                                    <FontAwesomeIcon icon={ faInstagram } color="#fff" size='xl'/>
                                </Box>
                            </Flex>
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </Box>
    )
}
