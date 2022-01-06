import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Icon } from "../Subheader";

function LinkIcon({ noUnderline, children, icon }) {
  return (
    <Flex alignItems={"center"}>
      <Text
        color={"brand.200"}
        fontSize={{ base: "14px", lg: "16px" }}
        mr="25px"
        textDecoration={noUnderline ? "none" : "underline"}
      >
        {children}
      </Text>
      <Icon
        borderWidth="3px"
        w={{ base: "15px", lg: "20px" }}
        h={{ base: "15px", lg: "20px" }}
      >
        {icon}
      </Icon>
    </Flex>
  );
}

export default LinkIcon;
