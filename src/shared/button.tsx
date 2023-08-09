import React from 'react'
import { Button } from '@chakra-ui/react'

interface props{
    text: string,
    bg:string,
    color:string
}

export function MyButton({text, bg, color}: props) {
  return (
        <Button 
            bg={bg} 
            px={"24px"} 
            py={"12px"} 
            h={"48px"}
            w={"200px"}
            rounded={"180px"} 
            ring={1}
            color={color}
            ringColor={"#0065FE"}
        >
            {text}
        </Button>
  )
}
