import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Stack,
  Text,
  Toast,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetAuth, signupUser } from "../Redux/AuthReducer/actions";
const Signup = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const roleRef = useRef(null);
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const { isLoading, isError, type, message } = useSelector(
    (store) => store.AuthReducer
  );
  const handleSignup = () => {
    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      role: roleRef.current.value,
    };
    console.log(payload);
    localStorage.setItem(
      "user",
      JSON.stringify({
        name: nameRef.current.value,
        role: roleRef.current.value,
      })
    );
    dispatch(signupUser(payload));
  };
  useEffect(() => {
    if (type === "success" || type === "error") {
      console.log("first");
      toast({
        description: message,
        status: type,
        duration: 3000,
        isClosable: true,
      });
    }
    if (type === "success") {
      navigate("/login");
    }
    dispatch(resetAuth());
  }, [type]);
  return (
    <Flex justifyContent={"center"} align="center">
      <Box w="350px">
        <Box>
          <Image
            w="110px"
            m="auto"
            src="https://img.icons8.com/color/512/imdb.png"
          />
        </Box>
        <VStack
          gridGap={"10px"}
          border={"1px solid #CCC"}
          borderRadius="8px"
          p="20px"
        >
          <Heading fontWeight={"normal"} textAlign="start">
            Create account
          </Heading>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input type="text" ref={nameRef} />
          </FormControl>
          <FormControl>
            <FormLabel>Email </FormLabel>
            <Input type="email" ref={emailRef} />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type="possword" ref={passwordRef} />
          </FormControl>

          <FormControl>
            <FormLabel>Role</FormLabel>
            <Select ref={roleRef}>
              <option value="">role</option>
              <option value="admin">Admin</option>
              <option value="viewer">Viewer</option>
            </Select>
          </FormControl>

          <Button
            isLoading={isLoading}
            onClick={handleSignup}
            fontSize={"md"}
            w="100%"
            bg="#F4D27E"
            color={"#111111"}
          >
            Create your IMDb acccount
          </Button>
          <Box>
            Already have an account ?
            <Link to="/login">
              <Text as="span" color={"blue"}>
                Sign In
              </Text>
            </Link>
          </Box>
        </VStack>
      </Box>
    </Flex>
  );
};

export default Signup;
