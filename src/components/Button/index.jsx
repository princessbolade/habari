import { Button as ButtonComponent } from "@chakra-ui/react"
import React from 'react'

function Button({children}) {
    return (
        <ButtonComponent fontWeight={'bold'} fontSize={'19px'} color='white' bg='brand.900' px='35px' py='35px'>
           {children}
        </ButtonComponent>
    )
}

export default Button