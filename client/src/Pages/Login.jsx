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
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser, resetAuth } from "../Redux/AuthReducer/actions";
import { useToast } from "@chakra-ui/react";
const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const toast = useToast();
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { isLoading, isError, type, message } = useSelector(
    (store) => store.AuthReducer
  );
  const handleLogin = () => {
    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    dispatch(loginUser(payload));
  };
  useEffect(() => {
    if (type === "success" || type === "error") {
      toast({
        description: message,
        status: type,
        duration: 3000,
        isClosable: true,
      });
    }
    if (type === "success") {
      nav("/");
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
            Sign In
          </Heading>
          <FormControl>
            <FormLabel>Email </FormLabel>
            <Input type="email" ref={emailRef} />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type="possword" ref={passwordRef} />
          </FormControl>
          <Button
            isLoading={isLoading}
            onClick={handleLogin}
            fontSize={"md"}
            w="100%"
            bg="#F4D27E"
            color={"#111111"}
          >
            Sign In
          </Button>
          <Box>
            New to IMDb ?{" "}
            <Link to="/signup">
              <Text as="span" color={"blue"}>
                Create IMDb account
              </Text>
            </Link>
          </Box>
        </VStack>
      </Box>
    </Flex>
  );
};

export default Login;
