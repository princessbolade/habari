import { ChevronRightIcon } from "@chakra-ui/icons"
import { Box, Flex, Image, Text } from "@chakra-ui/react"
import React from 'react'
import LinkIcon from "../Link"

function Card({ heading, text, icon }) {
    return (
        <Flex maxW={"550px"} mx={'auto'} h={{xl:'462px'}} w='100%' bg={'rgb(246 250 251)'} flexDir={'column'} py='50px' px='50px' justifyContent={'space-around'}>
            <Image mb='20px' w={'80px'} h={'80px'} src={icon} />
            <Text pb='20px' fontWeight='bold' fontSize={'25px'}>
                {heading}
            </Text>
            <Text whiteSpace={'pre-wrap'} lineHeight={1.7} fontSize={'23px'}>
                {text}
            </Text>
            <Box pt='50px'>
                <LinkIcon noUnderline children={'Learn More'} icon={<ChevronRightIcon color={'brand.200'} />} />
            </Box>
        </Flex>
    )
}

export default Card
