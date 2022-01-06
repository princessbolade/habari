import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react"
import React from 'react'
import image1 from '../../assets/image1.png'; // Tell webpack this JS file uses this image
import HighLight from "../HighLight";
import LinkIcon from "../Link";

function Features() {
    return (
        <Flex justifyContent={'space-between'} height={'1000px'} alignItems={'center'} width={'100%'}>
            <Grid templateColumns={{ base:'repeat(2, 1fr)', lg:'repeat(4, 1fr)'}} rowGap={'50px'} columnGap={10}  justifyContent={'space-between'} width={'100%'}>

                <GridItem colSpan={2} w='100%'>
                    <Flex  h='100%' flexDir='column' justifyContent={'space-between'}>
                    <Box pb={{base:'20px', lg:'0'}}>
                        <HighLight as={'span'} color={'brand.700'} bg={'rgb(238 234 254)'} underline={'rgb(190 178 248)'} isHeader fontSize={'25px'} >Features  &nbsp;</HighLight>
                    </Box>
                    <Text pb={{base:'20px', lg:'0'}} fontWeight='bold' fontSize={{base:'25px', md:'35px',lg:'45px'}}>
                        Create Payment Requests
                    </Text>
                    <Text  pb={{base:'20px', lg:'0'}} lineHeight={1.4} fontSize={{base:'18px', md:'20px',lg:'25px'}}>
                        Make a simple payment link in 5 seconds. Use our powerful <br /> features to customize your request
                    </Text>
                    <LinkIcon children={'Learn More'} icon={<ArrowForwardIcon color={'brand.200'} fontSize={{base: '10px', lg:'15px'}} />} />
                </Flex>
 </GridItem>
                
                <GridItem colSpan={2} w='100%'>
                    <Image src={image1} />
                 </GridItem>
                
            </Grid>

        </Flex>
    )
}

export default Features
