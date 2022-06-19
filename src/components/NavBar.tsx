import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Text,
  useColorMode,
  useDisclosure,
  VStack,
} from "@chakra-ui/react"
import React, { useState } from "react"
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai"
import { MotionBox, MotionText } from "./AnimatedComponents"
import Neumorphic from "./Neumorphic"

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, _] = useState<"left" | "right">("left")

  const NavBarContent = ({ content = "HOME" }) => {
    return (
      <MotionBox
        py={4}
        w={200}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        <MotionText
          textAlign={"center"}
          cursor={"pointer"}
          color="#000"
          // bg="red"
          whileHover={{ backgroundColor: "rgba(101, 99, 255, 0.5)" }}
          p={2}
          borderRadius="lg"
          px={10}
        >
          {content}
        </MotionText>
      </MotionBox>
    )
  }

  return (
    <Box bg="#eee">
      <Box
        display="flex"
        justifyContent={"space-between"}
        alignItems="center"
        px={5}
        py={4}
        borderBottomWidth={3}
        borderBottomColor="rgba(256, 256,256. 0.8)"
      >
        <Text fontSize={25} color={"#000"} ml="1">
          Nilanjan
        </Text>
        <Box
          display={{
            lg: "none",
          }}
          onClick={onOpen}
          cursor="pointer"
        >
          <Neumorphic>
            <AiOutlineMenu size={30} color="#000" />
          </Neumorphic>
        </Box>
      </Box>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="#f0f0f3">
          <Box m={3} cursor="pointer">
            <MotionBox
              display="flex"
              ml="auto"
              onClick={onClose}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              alignItems="center"
              justifyContent="center"
              w={8}
              borderRadius="50%"
              h={8}
              boxShadow="-3.3px -3.3px 3px #fff, 5px 5px 5.2px rgba(174, 174, 192, 0.5)"
              bg="#eeeeee"
            >
              <AiOutlineClose color="#000" size={20} />
            </MotionBox>
          </Box>
          <DrawerHeader mt={-5} mb={-15} fontSize={25} color="#000">
            Nilanjan Mandal
          </DrawerHeader>
          <DrawerHeader
            color="rgba(0,0,0, 0.7)"
            fontSize={15}
            borderBottomColor="rgba(256, 256, 256, 1)"
            borderBottomWidth="1px"
          >
            Full-Stack Developer
          </DrawerHeader>
          <DrawerBody>
            <VStack mt={5}>
              <NavBarContent content="HOME" />
              <NavBarContent content="FEATURES" />
              <NavBarContent content="PORTFOLIO" />
              <NavBarContent content="ABOUT" />
            </VStack>
            <VStack mt={20}>
              <Text mb={5} color={"#000"}>
                FIND ME ON
              </Text>
              <HStack
                alignItems="center"
                justifyContent="space-around"
                gap={12}
                // mt={50}
              >
                <Neumorphic>
                  <AiOutlineGithub color="#000" size={30} />
                </Neumorphic>

                <Neumorphic>
                  <AiOutlineLinkedin color="#000" size={30} />
                </Neumorphic>
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

export default NavBar
