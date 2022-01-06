import { CheckIcon } from "@chakra-ui/icons";
import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";

export const Icon = ({
  mt,
  borderWidth,
  w,
  h,
  mr,
  borderRadius,
  borderColor,
  children,
}) => (
  <Flex
    mt={mt}
    justifyContent={"center"}
    alignItems={"center"}
    borderColor={borderColor ?? "brand.200"}
    borderWidth={borderWidth}
    borderRadius={borderRadius ?? "100%"}
    w={w}
    h={h}
    mr={mr}
  >
    {children}
  </Flex>
);

function SubHeader() {
  return (
    <>
      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(6, 1fr)" }}
        rowGap={"50px"}
        columnGap={10}
        pt="50px"
        pb="80px"
      >
        <GridItem colSpan={2} w="100%">
          <Flex w="100%" justifyContent={{ base: "center", lg: "none" }}>
            <Icon
              mt="6px"
              borderWidth="3px"
              w="35px"
              h="35px"
              mr="30px"
              children={<CheckIcon color="brand.200" />}
            />
            <Text whiteSpace={"pre-wrap"} fontSize={"22px"} color="brand.600">
              <Text as="span" color={"black"} fontWeight={"semibold"}>
                Quick setup. &nbsp;
              </Text>
              {"Begin accepting\n payments in 15 minutes."}
            </Text>
          </Flex>
        </GridItem>
        <GridItem colSpan={2} w="100%">
          <Flex w="100%" justifyContent={{ base: "center", lg: "none" }}>
            <Icon
              mt="6px"
              borderWidth="3px"
              w="35px"
              h="35px"
              mr="30px"
              children={<CheckIcon color="brand.200" />}
            />
            <Text whiteSpace={"pre-wrap"} fontSize={"22px"} color="brand.600">
              <Text as="span" color={"black"} fontWeight={"semibold"}>
                Honest pricing. &nbsp;
              </Text>
              {"Only pay for\n successful transactions."}
            </Text>
          </Flex>
        </GridItem>
        <GridItem colSpan={2} w="100%">
          <Flex w="100%" justifyContent={{ base: "center", lg: "none" }}>
            <Icon
              mt="6px"
              borderWidth="3px"
              w="35px"
              h="35px"
              mr="30px"
              children={<CheckIcon color="brand.200" />}
            />
            <Text whiteSpace={"pre-wrap"} fontSize={"22px"} color="brand.600">
              <Text as="span" color={"black"} fontWeight={"semibold"}>
                All leading payment methods. &nbsp;
              </Text>
              {"\nThe best localised experience."}
            </Text>
          </Flex>
        </GridItem>
      </Grid>
      <Text as="p" textAlign={"center"} color="brand.600" fontSize={"16px"}>
        Fess range between 0.10-2.4NGN (+ additional fees based on % of
        transaction value). More pricing details per payment method here.
      </Text>
    </>
  );
}

export default SubHeader;
