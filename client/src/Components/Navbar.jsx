import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllActors, getAllProducers } from "../Redux/AppReducer/actions";
const Navbar = ({ movies }) => {
  const user = localStorage.getItem("user");
  const dispatch = useDispatch();
  localStorage.setItem(
    "user",
    JSON.stringify({ name: "Haresh Solaki", role: "admin" })
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { actors, producers } = useSelector((store) => store.AppReducer);
  useEffect(() => {
    dispatch(getAllProducers());
    dispatch(getAllActors());
  }, []);
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
          {true && <Button onClick={onOpen}>ADD MOVIE</Button>}
          <Button>Sign In</Button>
        </Flex>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>ADD MOVIE</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl>
              <FormLabel>Poster</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl>
              <FormLabel>Year Of Release</FormLabel>
              <Input type="type" />
            </FormControl>
            <FormControl>
              <FormLabel>Producer</FormLabel>
              <Select>
                <option value="">Choose Producer</option>
                {producers?.map((producer) => {
                  return (
                    <option key={producer._id} value={producer.name}>
                      {producer.name}
                    </option>
                  );
                })}
                <option value="other">Other</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Actors</FormLabel>
              <Select>
                <option value="">Choose Actors</option>
                {actors?.map((actor) => {
                  return (
                    <option key={actor?._id} value={actor?.name}>
                      {actor?.name}
                    </option>
                  );
                })}
                <option value="other">Other</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Navbar;
