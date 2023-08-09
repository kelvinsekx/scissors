import React from "react";
import { Box,Text }
from '@chakra-ui/react'
import { MyButton } from "~/shared/button";


export function Final() {
  return (
    <Box 
        bgImage={"/Frame 1000001649.png"} 
        bgSize={"cover"} 
        py={"85px"}
        mt={"103px"}
        display={"grid"} 
        placeItems={"center"}
    >
      <Box textAlign={"center"}>
        <Text 
          fontSize={"40px"} 
          fontWeight={600} 
          color={"#Fff"}
        >
          Revolutionizing Link Optimization
        </Text>
        <Box mt={"32px"}> 
          <MyButton 
            text="Get started" 
            bg="#005AE2" 
            color="#fff" 
          />
        </Box>
      </Box>
    </Box>
  )
}
