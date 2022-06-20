import { Box, HStack, Text, useDisclosure } from "@chakra-ui/react"
import React from "react"
import { AiOutlineMenu } from "react-icons/ai"
// import Link from "next/link"
import { animateScroll, Link } from "react-scroll"
import DrawerCmp from "./DrawerCmp"
import Neumorphic from "./Neumorphic"

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const NavText = ({ title, href }) => {
    return (
      <>
        {title !== "HOME" ? (
          <Link
            to={href}
            smooth
            duration={500}
            style={{ textDecoration: "none" }}
          >
            <Text
              pl={20}
              color={"rgba(101, 99, 255, 1)"}
              fontFamily="Montserrat"
              fontWeight="600"
            >
              {title}
            </Text>
          </Link>
        ) : (
          <Box onClick={() => animateScroll.scrollToTop()}>
            <Text
              pl={20}
              color={"rgba(101, 99, 255, 1)"}
              fontFamily="Montserrat"
              fontWeight="600"
            >
              {title}
            </Text>
          </Box>
        )}
      </>
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
        <HStack
          pr={10}
          display={{
            base: "none",
            sm: "none",
            md: "flex",
          }}
        >
          <NavText href="#" title={"HOME"} />
          <NavText href="home_feature" title={"FEATURES"} />
          <NavText href="home-projects" title={"PROJECTS"} />
        </HStack>
        <Box
          display={{
            base: "block",
            sm: "block",
            md: "none",
          }}
          onClick={onOpen}
          cursor="pointer"
        >
          <Neumorphic>
            <AiOutlineMenu size={30} color="#000" />
          </Neumorphic>
        </Box>
      </Box>
      <DrawerCmp isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </Box>
  )
}

export default NavBar
