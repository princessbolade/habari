import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Button from "../Button";
import HighLight from "../HighLight";

function Header() {
  return (
    <Flex
      height={{ lg: "800px" }}
      alignItems={"end"}
      pb="100px"
      borderBottom="1px solid #80808036"
    >
      <Box maxW={"1000px"} pt={{ base: "50px", lg: "none" }}>
        <Text
          letterSpacing="5px"
          lineHeight={1.2}
          fontWeight="bold"
          fontFamily={"Minion"}
          fontSize={{ base: "50px", md: "70px", lg: "60px" }}
          pb="40px"
        >
          A faster & easier
          <br />
          way to recieve
          <br />
          <HighLight
            as="span"
            color="brand.200"
            bg="brand.300"
            underline="brand.400"
          >
            payments{" "}
          </HighLight>{" "}
          online.
        </Text>
        <Text lineHeight={2} fontSize={"28px"} pb="80px">
          Scuad builds innovative pathways to enable all types of businesses and
          individauls from around the world make and receive payments smarter
          and simpler
        </Text>
        <Button children={" Create an Account"} />
      </Box>
    </Flex>
  );
}

export default Header;
