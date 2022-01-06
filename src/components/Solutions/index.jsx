import { ArrowForwardIcon, CheckIcon } from "@chakra-ui/icons";
import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react"
import React from 'react'
import image2 from '../../assets/image2.png'; // Tell webpack this JS file uses this image
import HighLight from "../HighLight";
import LinkIcon from "../Link";
import { Icon } from "../Subheader";

function Solutions() {
    return (
        <Flex justifyContent={'space-between'} height={{lg:'1300px'}} alignItems={'center'} width={'100%'}>
             <Grid templateColumns={{ base:'repeat(2, 1fr)', lg:'repeat(4, 1fr)'}} rowGap={'50px'} columnGap={10}  flexDir='row-reverse' justifyContent={'space-between'} width={'100%'}>
                  <GridItem colSpan={2} w='100%'>
                     <Image borderRadius='10px' src={image2} />
                </GridItem>
                <GridItem colSpan={2} w='100%'>
                    
  <Flex flexDir='column' justifyContent={'space-between'}>
                    <Box pb={{base:'20px', lg:'0'}}>
                        <HighLight as={'span'} color={'brand.800'} bg={'rgb(255 245 234)'} underline={'rgb(255 203 176)'} isHeader fontSize={'25px'} >Solutions  &nbsp;</HighLight>
                    </Box>
                    <Text pb={{base:'20px', lg:'0'}} fontWeight='bold' fontSize={{base:'25px', md:'35px',lg:'45px'}}>
                        Better Payments, <br />
                        unlimited opportunities
                    </Text>
                    <Text lineHeight={1.5} fontSize={{base:'18px', md:'20px',lg:'25px'}}>
                        Get faster, more reliable transactions. Higher conversions. <br />
                        Unbeatable insight and flexibility. So you can delight your <br />
                        customers and unlock new revenue streams
                    </Text>
                    <Grid justifyContent={'space-between'} templateColumns={{ base:'repeat(3, 1fr)', lg:'repeat(6, 1fr)'}} gap={10} pt='50px' pb='80px'>
                        <GridItem  colSpan={3} w='100%'>
                            <Flex w='100%' alignItems={'center'} >
                                <Icon borderColor='brand.900' borderRadius={'10px'} borderWidth='3px' w='35px' h='35px' mr='30px' children={<CheckIcon color='rgb(176 225 197)' />} />
                                <Text fontSize={{base:'18px', md:'20px',lg:'25px'}}>
                                    Debit and Credit Cards
                                </Text>
                            </Flex>
                        </GridItem>
                        <GridItem colSpan={3} w='100%'>
                            <Flex w='100%' alignItems={'center'} >
                                <Icon borderColor='brand.900' borderRadius={'10px'} mt='6px' borderWidth='3px' w='35px' h='35px' mr='30px' children={<CheckIcon color='rgb(176 225 197)' />} />
                                <Text fontSize={{base:'18px', md:'20px',lg:'25px'}}>
                                    USSD
                                </Text>
                            </Flex>
                        </GridItem>
                        <GridItem colSpan={3} w='100%'>
                            <Flex w='100%' alignItems={'center'} >
                                <Icon borderColor='brand.900' borderRadius={'10px'} mt='6px' borderWidth='3px' w='35px' h='35px' mr='30px' children={<CheckIcon color='rgb(176 225 197)' />} />
                                <Text fontSize={{base:'18px', md:'20px',lg:'25px'}}>
                                    Bank Account
                                </Text>
                            </Flex>
                        </GridItem>
                         <GridItem colSpan={3} w='100%'>
                            <Flex w='100%' alignItems={'center'} >
                                <Icon borderColor='brand.900' borderRadius={'10px'} mt='6px' borderWidth='3px' w='35px' h='35px' mr='30px' children={<CheckIcon color='rgb(176 225 197)' />} />
                                <Text fontSize={{base:'18px', md:'20px',lg:'25px'}}>
                                   Soft POS
                                </Text>
                            </Flex>
                        </GridItem>
                         <GridItem colSpan={3} w='100%'>
                            <Flex w='100%' alignItems={'center'} >
                                <Icon borderColor='brand.900' borderRadius={'10px'} mt='6px' borderWidth='3px' w='35px' h='35px' mr='30px' children={<CheckIcon color='rgb(176 225 197)' />} />
                                <Text fontSize={{base:'18px', md:'20px',lg:'25px'}}>
                                    Bank Transfer
                                </Text>
                            </Flex>
                        </GridItem>
                         <GridItem colSpan={3} w='100%'>
                            <Flex w='100%' alignItems={'center'} >
                                <Icon borderColor='brand.900' borderRadius={'10px'} mt='6px' borderWidth='3px' w='35px' h='35px' mr='30px' children={<CheckIcon color='rgb(176 225 197)' />} />
                                <Text fontSize={{base:'18px', md:'20px',lg:'25px'}}>
                                    Mobile Money
                                </Text>
                            </Flex>
                        </GridItem>
                    </Grid>
                    <LinkIcon children={'Create a free account'} icon={<ArrowForwardIcon color={'brand.200'} />} />
                </Flex>
                </GridItem>
              
              
               
            </Grid>

        </Flex>
    )
}

export default Solutions
