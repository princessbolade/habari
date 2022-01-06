import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import Button from "../Button";
import HighLight from "../HighLight";

function ReadyForATrial() {
  return (
    <Flex
      justifyContent={"space-between"}
      height={"400px"}
      alignItems={"center"}
      width={"100%"}
    >
      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
        rowGap={"50px"}
        columnGap={10}
        justifyContent={"space-between"}
        alignItems={"center"}
        width={"100%"}
      >
        <GridItem colSpan={2} w="100%">
          <Flex flexDir="column" justifyContent={"space-between"}>
            <Box pb={{ base: "20px", lg: "none" }}>
              <HighLight
                as={"span"}
                color={"brand.900"}
                bg={"rgb(236 247 241)"}
                underline={"rgb(182 227 201)"}
                isHeader
                fontSize={"16px"}
              >
                Ready for a trial? &nbsp;
              </HighLight>
            </Box>
            <Text
              letterSpacing="5px"
              lineHeight={1.2}
              fontWeight="bold"
              fontFamily={"Minion"}
              fontSize={{ base: "50px", md: "70px", lg: "60px" }}
              pb="60px"
            >
              Start accepting
              <br />
              <HighLight
                as="span"
                color="brand.200"
                bg="brand.300"
                underline="brand.400"
              >
                payments{" "}
              </HighLight>{" "}
              in minutes
            </Text>
          </Flex>
        </GridItem>

        <GridItem colSpan={2} w="100%">
          <Button children={" Create a free Account"} />
        </GridItem>
      </Grid>
    </Flex>
  );
}

export default ReadyForATrial;
