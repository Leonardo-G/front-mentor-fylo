import React from 'react'
import { NextPage } from 'next'
import LayoutPage from '@/components/layout/LayoutPage'
import { ImageContainer } from '@/components/image/ImageContainer'
import { Box } from '@/styled/box/box'
import { TextMain } from '@/styled/text/text'


const HomePage: NextPage = () => {
    return (
        <LayoutPage>
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
                        style={{ width: "100%" }}
                    >
                        <TextMain 
                            center
                            size={ 45 }
                            sizeXM={ 30 }
                            sizeXS={ 25 }
                        >
                            All your files in one secure location, accessible anywhere
                        </TextMain>
                    </Box>
                </Box>
            </Box>
        </LayoutPage>
    )
}

export default HomePage