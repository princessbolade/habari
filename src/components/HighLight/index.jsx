import { Text } from "@chakra-ui/react"
import React from 'react'

function HighLight({as, color, fontSize, bg,underline, isHeader, children}) {
    return (
        <Text position={'relative'} _after={{
            content: `""`,
            position: "absolute",
            width: "100%",
            height: isHeader ? "5px" : '10px',
            bg: `${underline}`,
            opacity: "0.6",
            bottom: isHeader ? '-5px' : '-10px',
            left: 0,
        
        }} display={'inline-block'} as={as} color={color} fontSize={fontSize} bg={bg}>
            {children}
        </Text>
    )
}

export default HighLight
