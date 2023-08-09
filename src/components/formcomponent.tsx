"use client"

import { Box,
         Button, 
         HStack, 
         Input, 
         Select, 
         VStack,
         Text 
    } 
from '@chakra-ui/react'
import React from 'react'

export  function Formcomponent() {
  return (
    <Box 
        bgImage={"/Desktop - 11.png"} 
        bgSize={"cover"} 
        py={"85px"}
        mt={"103px"}
        display={"grid"} 
        placeItems={"center"}
    >   
        <VStack 
            p={"42px"} 
            maxW={"476px"}  
            bg={"#fff"} 
            rounded={"12px"} 
            gap={"24px"} 

        >
            <Input 
                maxW={"392px"} 
                h={"55px"} 
                padding={"8px 12px"} 
                color={"#3284FF"}
                outline={0}
                rounded={"12px"}
                border={"2px"}
                _placeholder={{
                    color:"#3284FF"
                }}
                borderColor={"#3284FF"} 
                placeholder='Paste URL here...'
            />
            <HStack 
                gap={"12px"} 
                w={"full"} 
                justifyContent={"space-between"} 
            >
                <Select 
                    h={"55px"} 
                    ringColor={"#3284FF"}
                    rounded={"12px"}
                    color={"#3284FF"} 
                    border={"2px"}
                    borderColor={"#3284FF"}  
                >
                    <option 
                        style={{color:"#3284FF"}} 
                        value="Choose Domain"
                    >
                        Choose Domain
                    </option>
                </Select>

                <Input  
                    h={"55px"} 
                    _placeholder={{
                        color:"#3284FF"
                    }}
                    rounded={"12px"}
                    color={"#3284FF"}
                    border={"2px"}
                    borderColor={"#3284FF"} 
                    outline={0}
                    ringColor={"#3284FF"} 
                    placeholder='Type Alias here'
                />
            </HStack>
            <Button 
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                w={"full"}
                px={"24px"} 
                py={"12px"} 
                h={"48px"}
                rounded={"180px"}
                color="#fff" 
                gap={"10px"}
                bg="#0065FE"
            >
                <Text>Trim URL</Text>  
                <img className="w-[16px] h-[16px] "  src="/magic wand.svg" alt="svg" /> 
            </Button>
            <Text className='text-[#3284FF] font-[400] text-[15px]' >
                By clicking TrimURL, I agree to the 
                   <span style={{fontWeight:"500"}}>Terms of Service, Privacy Policy</span>  and Use of Cookies.
            </Text>
        </VStack>
        
    </Box>
  )
}
