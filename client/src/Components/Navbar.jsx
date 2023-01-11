import { Box, Button, Flex, Image, Input } from "@chakra-ui/react";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
const Navbar = () => {
  return (
    <Box w="100%" bg="#121212">
      <Flex
        justifyContent={"space-between"}
        alignItems="center"
        maxW={"1260px"}
        m="auto"
      >
        <Box w="15%">
          <Image h={"70px"} src="https://img.icons8.com/color/512/imdb.png" />
        </Box>
        <Flex
          alignItems={"center"}
          w="50%"
          border={"1px solid #CCC"}
          pr="10px"
          borderRadius={"8px"}
          bg="#FFF"
        >
          <Input placeholder="Search IMDb" border={"none"} />
          <BsSearch />
        </Flex>
        <Flex gridGap={"20px"}>
          <Button>ADD MOVIE</Button>
          <Button>Sign In</Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
