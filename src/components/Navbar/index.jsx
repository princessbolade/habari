import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

const LanguageImage = {
  NG: "https://cdn.britannica.com/68/5068-004-72A3F250/Flag-Nigeria.jpg",
  DE: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg",
  FR: "https://cdn.britannica.com/82/682-050-8AA3D6A6/Flag-France.jpg",
};
const NavBar = ({ language, setLanguage, as }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Flex
      flexWrap={"wrap"}
      justifyContent="end"
      height={"100px"}
      alignItems={"center"}
      borderBottom={as !== "footer" ? "1px solid #80808036" : "none"}
      borderTop={as === "footer" ? "1px solid #80808036" : "none"}
    >
      <Text
        display={{ base: "none", lg: "block" }}
        className="cursor-pointer"
        fontSize="16px"
        pr="20px"
      >
        Products
      </Text>
      {as === "footer" && <hr />}
      <Text
        display={as !== "footer" ? { base: "none", lg: "block" } : "block"}
        className="cursor-pointer"
        fontSize="16px"
        pr="20px"
      >
        Pricing
      </Text>
      <Text
        display={as !== "footer" ? { base: "none", lg: "block" } : "block"}
        className="cursor-pointer"
        fontSize="16px"
        pr="20px"
      >
        Support
      </Text>
      {as !== "footer" && <hr />}
      <Text
        display={as !== "footer" ? { base: "none", lg: "block" } : "block"}
        className="cursor-pointer"
        fontSize="16px"
        pr="20px"
      >
        Documentation
      </Text>
      <Text
        display={as !== "footer" ? { base: "none", lg: "block" } : "block"}
        className="cursor-pointer"
        fontSize="16px"
        pr="20px"
      >
        Login
      </Text>
      <Text
        display={as !== "footer" ? { base: "none", lg: "block" } : "block"}
        className="cursor-pointer"
        fontSize="16px"
        pr="20px"
      >
        Create Account
      </Text>
      <Box display={as === "footer" ? "none" : { base: "block", lg: "none" }}>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Menu
          </MenuButton>
          <MenuList>
            <MenuItem> Products</MenuItem>
            <MenuItem> Pricing</MenuItem>
            <MenuItem>Support</MenuItem>
            <MenuItem>Documentation</MenuItem>
            <MenuItem> Login</MenuItem>
            <MenuItem> Create Account</MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Flex pl="20px" alignItems="center">
        <Image
          w="25px"
          h="25px"
          borderRadius="100%"
          src={LanguageImage[language]}
        />
        <Box className="pl-5">
          <Box className="dropdown inline-block  cursor-pointer">
            <Box
              as="svg"
              onClick={() => setIsOpen((prev) => !prev)}
              className="fill-current h-4 w-4 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
            </Box>
            <ul
              className={`${
                isOpen ? "block" : "hidden"
              } dropdown-menu absolute text-gray-700 pt-1`}
            >
              <li>
                <p
                  onClick={() => {
                    setLanguage("NG");
                    setIsOpen(false);
                  }}
                  className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                >
                  NG
                </p>
              </li>
              <li>
                <p
                  onClick={() => {
                    setLanguage("FR");
                    setIsOpen(false);
                  }}
                  className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                >
                  FR
                </p>
              </li>
              <li>
                <p
                  onClick={() => {
                    setLanguage("DE");
                    setIsOpen(false);
                  }}
                  className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                >
                  DE
                </p>
              </li>
            </ul>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default NavBar;
