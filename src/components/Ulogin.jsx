import React, { useState } from "react";
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";
import { InputGroup, InputRightElement } from "@chakra-ui/input";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useGlobalContext } from "../context/context";

function Ulogin() {
  const [show, setShow] = useState(false);
  const toast = useToast();
  const {  API_URI } = useGlobalContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitHandler = async () => {
    setLoading(true);
    if (!email || !password) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }

    try {
      const { data } = await axios.post(`${API_URI}/api/user/login`, {
        email,
        password,
      });
      console.log(data);
      toast({
        title: "Logged in Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });

      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      navigate("/");
    } catch (error) {
      console.log(error);
      let errorMessage = "An error occurred. Please try again later.";
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        errorMessage = error.response.data.message;
      }
      toast({
        title: errorMessage,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }
  };

  return (
    <VStack spacing="5px">
      <FormControl isRequired id="email">
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter Your Email..."
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl isRequired id="password">
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            placeholder="Enter Your password..."
            type={show ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button
              borderRadius="full"
              h="1.75rem"
              onClick={(e) => setShow(!show)}>
              {show ? <FaRegEye /> : <FaEyeSlash />}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button
        width="80%"
        mt="15px"
        colorScheme="green"
        borderRadius="full"
        onClick={submitHandler}
        isLoading={loading}>
        Login
      </Button>
    </VStack>
  );
}

export default Ulogin;
