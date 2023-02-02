import React, { useState } from 'react'

import { Box, Flex } from '@/styled/box/box'
import { Text, Title } from '@/styled/text/text'
import { Button } from '@/styled/button/buttons'
import { Input } from '@/styled/input/input'

export const Access = () => {

    const [emailValue, setEmailValue] = useState("");
    const [error, setError] = useState(false);

    const handleClickEmail = () => {
        const testEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    
        if ( !testEmail.test( emailValue ) ) {
            setError( true );
            return;
        }

        setError( false );
    }

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
                    xs={{ padding: "50px 20px 30px 20px" }}
                >
                    <Title size={ 40 } sizeXS={ 25 } center>Get early access today</Title>
                    <Text 
                        center 
                        padding='30px 0'
                    >It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</Text>
                    <Flex width='100%' columnGap={ 40 } directionResponsive rowGap={ 30 }>
                        <Input 
                            type="email" 
                            placeholder="email@example.com"
                            value={ emailValue } 
                            onChange={ (e) => setEmailValue( e.target.value ) }   
                        />
                        <Button 
                            flex={ 1 } 
                            width={ 900 } 
                            background='hsl(198, 60%, 50%)'
                            hover='hsl(176, 68%, 64%)'
                            onClick={ handleClickEmail }
                        >Get Started For Free</Button>
                    </Flex>
                    {
                        error ?
                            <Text 
                                colorText='hsl(0, 100%, 63%)'
                                padding='0 0 0 20px'
                            >Please enter a valid email address</Text>
                        :
                            <Text
                                colorText='hsl(134.9206349206349, 100%, 62.94117647058823%)'
                                padding='0 0 0 20px'
                            >Email sent</Text>
                    }
                </Box>
            </Box>
        </Box>
    )
}
