import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react"
import Image from "next/image"
import React from "react"
import Typewriter from "typewriter-effect"

import { RiReactjsFill } from "react-icons/ri"
import { DiMongodb } from "react-icons/di"
import { SiExpress, SiGraphql } from "react-icons/si"
import { FaNodeJs } from "react-icons/fa"

import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai"
import Neumorphic from "./Neumorphic"

const HomeHeader = () => {
  return (
    <VStack alignItems="center" justifyContent="center" mt={15}>
      <Flex
        alignItems="center"
        justifyContent="center"
        p={2}
        boxShadow="-8.5px -8.5px 8px #fff, 5px 5px 8px rgba(174, 174, 192, 0.5)"
        borderRadius={"50%"}
      >
        <Image src="/img.png" width={300} height={300} />
      </Flex>
      <VStack alignItems="center" justifyContent="center">
        <Text fontFamily="Montserrat" fontWeight="400" fontSize={22} mt={5}>
          I TURN IDEAS INTO REALITY
        </Text>
        <Box>
          <Text
            //   noOfLines={2}
            fontFamily="Montserrat"
            fontWeight="800"
            fontSize={45}
            mt={5}
          >
            Hi, I’m{" "}
            <strong style={{ color: "rgba(101, 99, 255, 1)" }}>Nilanjan</strong>{" "}
            <br />
            <strong style={{ color: "rgba(101, 99, 255, 1)" }}>Mandal a</strong>
          </Text>
          <Box fontSize={45} fontFamily="Montserrat" fontWeight="800">
            <Typewriter
              options={{
                // loop: true,
                skipAddStyles: true,
                delay: 50,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Software Developer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Entrepreneur")
                  .pauseFor(1000)
                  .deleteAll()
                  .start()
              }}
            />
          </Box>
        </Box>
        <Box>
          <Text
            px={10}
            py={5}
            noOfLines={2}
            fontFamily="Montserrat"
            fontWeight="400"
            fontSize={15}
            mt={5}
          >
            I am a Full Stack Software Developer, i specialize in Web & Mobile
            App Development.
          </Text>
        </Box>
        <VStack>
          <Text fontSize={15} mb={2} mr="auto" fontFamily="Montserrat">
            FIND ME
          </Text>
          <HStack gap={5} pb={5}>
            <Neumorphic p={3}>
              <AiOutlineInstagram color="#000" size={40} />
            </Neumorphic>
            <Neumorphic p={3}>
              <AiOutlineGithub color="#000" size={40} />
            </Neumorphic>
            <Neumorphic p={3}>
              <AiOutlineLinkedin color="#000" size={40} />
            </Neumorphic>
          </HStack>
        </VStack>
        <VStack pt={10}>
          <Text fontSize={15} mb={2} mr="auto" fontFamily="Montserrat">
            BEST SKILL ON
          </Text>
          <HStack gap={5} pb={5}>
            <Neumorphic p={3}>
              <RiReactjsFill color="#00c4e4" size={40} />
            </Neumorphic>
            <Neumorphic p={3}>
              <DiMongodb color="#0ead2b" size={40} />
            </Neumorphic>
            <Neumorphic p={3}>
              <SiExpress color="#000" size={40} />
            </Neumorphic>
            <Neumorphic p={3}>
              <SiGraphql color="#d932a2" size={40} />
            </Neumorphic>
          </HStack>
        </VStack>
      </VStack>
    </VStack>
  )
}

export default HomeHeader
