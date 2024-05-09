import React, { useEffect } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useToast } from "@chakra-ui/react";
import { logOutUser } from "../store/actions/userAction";

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const { getUser } = useGlobalContext();
  const { user, isAuthenticated } = useSelector((state) => state.account);
  const dispatch = useDispatch();
  const toast = useToast();

  const logout = async () => {
    localStorage.removeItem("userInfo");
    dispatch(logOutUser());
    navigate("/");
    toast({
      title: "User Loggedout successfully",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "bottom",
    });
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    getUser();
  }, [isAuthenticated]);

  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        shadow="sm"
        transition="box-shadow 0.2s"
        position="fixed"
        w="full">
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box
              onClick={() => navigate("/")}
              display="flex"
              as="b"
              bgGradient="linear(to-r, green.500, yellow.400)"
              fontSize="5xl"
              bgClip="text"
              cursor="pointer">
              URR
            </Box>
          </HStack>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            <Button
              px={2}
              py={1}
              rounded={"md"}
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("gray.200", "gray.700"),
              }}
              onClick={() => navigate("/")}>
              Home
            </Button>
            <Button
              px={2}
              py={1}
              rounded={"md"}
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("red.200", "red.700"),
              }}
              onClick={() => navigate("/plastics")}>
              Plastic Waste
            </Button>
            <Button
              px={2}
              py={1}
              rounded={"md"}
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("orange.200", "orange.700"),
              }}
              onClick={() => navigate("/glass")}>
              Glass Waste
            </Button>
            <Button
              px={2}
              py={1}
              rounded={"md"}
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("yellow.200", "yellow.700"),
              }}
              onClick={() => navigate("/paper")}>
              Paper Waste
            </Button>
          </HStack>
          <Flex alignItems={"center"}>
            {isAuthenticated ? (
              <Button
                variant={"solid"}
                colorScheme={"teal"}
                size={"sm"}
                mr={4}
                onClick={() => navigate("/dashboard")}>
                Dashboard
              </Button>
            ) : (
              <Button
                variant={"solid"}
                colorScheme={"teal"}
                size={"sm"}
                mr={4}
                onClick={() => navigate("/login")}>
                Login
              </Button>
            )}

            {isAuthenticated && (
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}>
                  <Avatar size={"sm"} src={user.pic} />
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={() => navigate("/myProfile")}>
                    Profile
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem onClick={logout}>Logout</MenuItem>
                </MenuList>
              </Menu>
            )}
          </Flex>
        </Flex>

        {isOpen && (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Button
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                onClick={() => navigate("/")}>
                Home
              </Button>
              <Button
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                onClick={() => navigate("/plastics")}>
                Plastic Waste
              </Button>
              <Button
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                onClick={() => navigate("/glass")}>
                Glass Waste
              </Button>
              <Button
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                onClick={() => navigate("/paper")}>
                Paper Waste
              </Button>
            </Stack>
          </Box>
        )}
      </Box>

      <Box p={4}>Main Content Here</Box>
    </>
  );
}
export default Header;
