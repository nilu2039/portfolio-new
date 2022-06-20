import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react"
import Image from "next/image"
import React from "react"
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai"
import { DiMongodb } from "react-icons/di"
import { RiReactjsFill } from "react-icons/ri"
import { SiExpress, SiGraphql } from "react-icons/si"
import Typewriter from "typewriter-effect"
import ItemCard from "./ItemCard"

const HomeHeader = () => {
  return (
    <VStack alignItems="center" justifyContent="center" pt={110}>
      <Box
        display="flex"
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row-reverse",
        }}
        alignItems="center"
        justifyContent="center"
        gap={2}
      >
        <Box
          gap={5}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            p={2}
            boxShadow="-8.5px -8.5px 8px #fff, 5px 5px 8px rgba(174, 174, 192, 0.5)"
            borderRadius={"50%"}
          >
            <Image priority src="/img.png" width={300} height={300} />
          </Box>
          <Text fontFamily="Montserrat" fontWeight="400" fontSize={22}>
            I TURN IDEAS INTO REALITY
          </Text>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Box>
            <Text
              //   noOfLines={2}
              fontFamily="Montserrat"
              fontWeight="800"
              fontSize={45}
              mt={5}
            >
              Hi, I’m{" "}
              <strong style={{ color: "rgba(101, 99, 255, 1)" }}>
                Nilanjan
              </strong>{" "}
              <br />
              <strong style={{ color: "rgba(101, 99, 255, 1)" }}>
                Mandal a
              </strong>
            </Text>
            <Box
              fontSize={{
                base: 35,
                sm: 44,
                xl: 50,
              }}
              fontFamily="Montserrat"
              fontWeight="800"
            >
              <Typewriter
                options={{
                  loop: true,
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
              textAlign="center"
              fontFamily="Montserrat"
              fontWeight="500"
              fontSize={{
                base: 16,
                sm: 16,
                md: 18,
                lg: 20,
              }}
              mt={5}
              mb={{
                base: 10,
                sm: 5,
              }}
            >
              I am a Full Stack Software Developer, i specialize in Web & Mobile
              App Development.
            </Text>
          </Box>
        </Box>
      </Box>

      <VStack
        alignItems="center"
        justifyContent="center"
        pt={{
          base: 2,
          sm: 2,
          md: 5,
          lg: 20,
        }}
      >
        <Box
          display="flex"
          gap={{
            base: 5,
            sm: 5,
            md: 20,
            lg: 30,
          }}
          alignItems={"center"}
          justifyContent="center"
          flexDirection={{
            base: "column",
            sm: "column",
            md: "row",
          }}
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            <Text fontSize={15} fontWeight="500" mb={2} fontFamily="Montserrat">
              FIND ME
            </Text>
            <HStack gap={5} pb={5}>
              <ItemCard href="https://github.com/nilu2039" label="GitHub">
                <AiOutlineGithub color="#000" size={40} />
              </ItemCard>
              <ItemCard
                href="https://www.linkedin.com/in/nilanjan-mandal-a825961bb/"
                label="LinkedIn"
              >
                <AiOutlineLinkedin color="#000" size={40} />
              </ItemCard>
              <ItemCard
                href="https://www.instagram.com/nilanjan2039/"
                label="Instagram"
              >
                <AiOutlineInstagram color="#000" size={40} />
              </ItemCard>
            </HStack>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Text fontWeight="500" fontSize={15} mb={2} fontFamily="Montserrat">
              BEST SKILL ON
            </Text>
            <HStack gap={5} pb={5}>
              <ItemCard
                href="https://reactjs.org/"
                label="React & React Native (Frontend)"
              >
                <RiReactjsFill color="#00c4e4" size={40} />
              </ItemCard>
              <ItemCard
                href="https://www.mongodb.com/"
                label="MongoDB (Backend)"
              >
                <DiMongodb color="#0ead2b" size={40} />
              </ItemCard>
              <ItemCard
                href="https://expressjs.com/"
                label="ExpressJS (Backend)"
              >
                <SiExpress size={40} />
              </ItemCard>
              <ItemCard
                href="https://graphql.org/"
                label="GraphQL (Backend & Frontend)"
              >
                <SiGraphql color="#d932a2" size={40} />
              </ItemCard>
            </HStack>
          </Box>
        </Box>
      </VStack>
    </VStack>
  )
}

export default HomeHeader
