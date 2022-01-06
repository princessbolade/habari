import { Box, Grid, GridItem, Text } from "@chakra-ui/react"
import React from 'react'
import Card from "../Card"
import HighLight from "../HighLight"
import earth from '../../assets/earth.png'
import hand from '../../assets/hand.png'


function Support() {
    return (
        <Box h={{lg:'1200px'}} pt='40px'>
            <Box pb='40px'>
                <HighLight as={'span'} color='brand.200' bg='brand.300' underline='brand.400' isHeader fontSize={'25px'} >Support  &nbsp;</HighLight>
            </Box>
            <Text pb='40px' fontWeight='bold' fontSize={{base:'25px', md:'35px',lg:'45px'}}>
                Trusted by businesses all over Africa
            </Text>
            <Text pb='60px' lineHeight={1.7} fontSize={{base:'18px', md:'20px',lg:'25px'}}>
                Our platform provides a resource of scalable and reliable technology optimized <br /> to drive growth in new markets and dominate in older ones.
            </Text>

            <Grid templateColumns={{ base:'repeat(2, 1fr)', lg:'repeat(6, 1fr)'}} gap={6} pt='50px' pb='80px'>
                <GridItem colSpan={2} w='100%'>
                    <Card heading={'Scuad for Global Brands'} text={'We help global brands accept payments from across Africa.'} icon={earth} />
                </GridItem>
                <GridItem colSpan={2} w='100%'>
                    <Card heading={'Scuad for Entrepreneurs'} text={'From startup to scale-up, we can support you at every stage of your businesses’ growth.'} icon={'https://www.nevaey.com/wp-content/uploads/2018/09/salesman.png'} />
                </GridItem>
                <GridItem colSpan={2} w='100%'>
                    <Card heading={'Scuad for Large Organizations'} text={'Paystack helps many of the largest corporate and government organizations in Nigeria get paid quickly and securely.'} icon={hand} />
                </GridItem>
            </Grid>
        </Box>
    )
}

export default Support
