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
// import Link from "next/link"
import { Link, animateScroll } from "react-scroll"
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

  interface NavBarProps {
    title: string
    href: string
  }

  const NavBarContent: React.FC<NavBarProps> = ({ title, href }) => {
    return (
      <MotionBox
        py={4}
        w={200}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        {title !== "HOME" ? (
          <Link
            to={href}
            smooth
            duration={500}
            style={{ textDecoration: "none" }}
          >
            <MotionText
              textAlign={"center"}
              cursor={"pointer"}
              // textDecoration="none"
              textDecoration="inherit"
              color="#000"
              // bg="red"
              whileHover={{ backgroundColor: "rgba(101, 99, 255, 0.5)" }}
              p={2}
              borderRadius="lg"
              px={10}
            >
              {title}
            </MotionText>
          </Link>
        ) : (
          <Box
            onClick={() => animateScroll.scrollToTop()}
            // to={href}
            // smooth
            // duration={500}
            // style={{ textDecoration: "none" }}
          >
            <MotionText
              textAlign={"center"}
              cursor={"pointer"}
              // textDecoration="none"
              textDecoration="inherit"
              color="#000"
              // bg="red"
              whileHover={{ backgroundColor: "rgba(101, 99, 255, 0.5)" }}
              p={2}
              borderRadius="lg"
              px={10}
            >
              {title}
            </MotionText>
          </Box>
        )}
      </MotionBox>
    )
  }

  return (
    <Box bg="#eee">
      <Box
        display="flex"
        justifyContent={"space-between"}
        alignItems="center"
        onClick={() => animateScroll.scrollToTop()}
        px={5}
        bg="#eee"
        position="fixed"
        as="header"
        zIndex={100}
        w="full"
        cursor="pointer"
        py={4}
        top={0}
        borderBottomWidth={3}
        borderBottomColor="rgba(256, 256,256, 0.7)"
      >
        <Text
          fontFamily={"Poppins"}
          fontWeight="500"
          fontSize={25}
          color={"#000"}
          ml="1"
        >
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
              <NavBarContent href="#" title="HOME" />
              <NavBarContent href="home_feature" title="FEATURES" />
              <NavBarContent href="home-projects" title="PROJECTS" />
              {/* <NavBarContent  href = "" title="ABOUT" /> */}
            </VStack>
            <VStack mt={20}>
              <Text
                fontFamily="Montserrat"
                fontWeight="600"
                mb={5}
                fontSize={17}
                color={"#000"}
              >
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
