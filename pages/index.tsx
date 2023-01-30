import React from 'react'
import { NextPage } from 'next'

import LayoutPage from '@/components/layout/LayoutPage'
import { ImageContainer } from '@/components/image/ImageContainer'

import { Box, Flex } from '@/styled/box/box'
import { TextMain } from '@/styled/text/text'
import { Text } from '@/styled/text/text';
import { Button } from '@/styled/button/buttons'
import { Features } from '@/components/features/Features'
import { Section } from '@/styled/globals/globals'
import { Position } from '@/styled/position/position'


const HomePage: NextPage = () => {
    return (
        <LayoutPage>
            <Section>
                <Box className="container">
                    <Box mt={ 50 } xm={{ margin: "0" }}>
                        <ImageContainer 
                            src="/img/illustration-intro.png"
                            height="600px"
                            width="100%"
                            responsiveXS={{ "height": "350px" }}
                        />
                        <Box 
                            width='70%' 
                            center 
                            mt={ 30 }
                            xm={{ width: "90%" }}
                            xs={{ width: "100%" }}
                        >
                            <Flex direction='column' alignItems='center'>
                                <TextMain 
                                    center
                                    size={ 45 }
                                    sizeXM={ 30 }
                                    sizeXS={ 25 }
                                >
                                    All your files in one secure location, accessible anywhere
                                </TextMain>
                                <Text 
                                    center 
                                    padding='30px 100px' 
                                    size={ 18 }
                                    sizeXM={ 14 }
                                    xs={{ padding: "30px 0" }}
                                >
                                    Fylo stores all your most important files in one secure location.
                                    Access them wherever you need, share and collaborate with friends family, and co-workers. 
                                </Text>
                                <Button 
                                    width={ 290 } 
                                    background='hsl(198, 60%, 50%)'
                                >Get Started</Button>
                            </Flex>
                        </Box>
                    </Box>
                </Box>
                <Position>
                    <ImageContainer 
                        src='./img/bg-curvy-desktop.svg'
                        height='200px'
                        width='100%'
                        cover
                    />
                </Position>
            </Section>
            <Box>
                <Features />
            </Box>
        </LayoutPage>
    )
}

export default HomePage