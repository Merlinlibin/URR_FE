import React, { useEffect } from "react";
import {
  Container,
  Box,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Ulogin from "../components/Ulogin";
import Usignup from "../components/Usignup";

function Login() {
  const navigate = useNavigate();

  return (
    <Container maxW="xl" as="b" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        p={3}
        bg={"white"}
        w="100%"
        m="60px 0 15px 0"
        borderRadius="full"
        borderWidth="3px"
        borderColor="#00A884">
        <Text
          fontSize={{ lg: "4xl", md: "3xl" }}
          color="black"
          align="center"
          bgGradient="linear(to-r, green.500, yellow.400)"
          bgClip="text">
          Use Recycle Reuse
        </Text>
      </Box>
      <Box
        bg={"white"}
        w="100%"
        borderRadius="3xl"
        borderWidth="3px"
        p={4}
        borderColor="#00A884"
        color="black"
        mb="8">
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabList mb="1em" zIndex={-1}>
            <Tab width="50%" color="black">
              Login
            </Tab>
            <Tab width="50%" color="black">
              Signup
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Ulogin />
            </TabPanel>
            <TabPanel>
              <Usignup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Login;
