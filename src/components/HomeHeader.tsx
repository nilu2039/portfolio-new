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
import { motion } from "framer-motion"
import ItemCard from "./ItemCard"

const ellipseVariants = {
  start: {
    d: "M50.1,-51.7C64,-36.2,73.8,-18.1,76.1,2.3C78.4,22.7,73.3,45.4,59.3,60.8C45.4,76.2,22.7,84.3,1.5,82.9C-19.8,81.4,-39.5,70.4,-54.4,55C-69.3,39.5,-79.2,19.8,-79.3,-0.1C-79.5,-20,-69.8,-40.1,-54.9,-55.6C-40.1,-71.2,-20,-82.2,-1,-81.2C18.1,-80.2,36.2,-67.3,50.1,-51.7Z",
  },
  end: {
    d: "M52.2,-52.2C65.8,-38.6,73.6,-19.3,73.1,-0.6C72.5,18.2,63.5,36.3,49.9,52.8C36.3,69.2,18.2,84,-1.3,85.3C-20.8,86.6,-41.6,74.5,-56,58C-70.4,41.6,-78.4,20.8,-77.5,0.9C-76.7,-19.1,-66.9,-38.1,-52.5,-51.7C-38.1,-65.2,-19.1,-73.2,0.1,-73.3C19.3,-73.4,38.6,-65.7,52.2,-52.2Z",
  },
}

const HomeHeader = () => {
  return (
    <VStack alignItems="center" justifyContent="center" pt={120}>
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
        gap={{
          base: 2,
          sm: 2,
          md: 5,
          lg: 10,
        }}
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
            zIndex={10}
            // p={2}
            // boxShadow="-8.5px -8.5px 8px #fff, 5px 5px 8px rgba(174, 174, 192, 0.5)"
            // borderRadius={"50%"}
          >
            <Image priority src="/img2.png" width={300} height={300} />
          </Box>
          <Text fontFamily="Montserrat" fontWeight="400" fontSize={22}>
            I TURN IDEAS INTO REALITY
          </Text>
          <Box top="3rem" zIndex={1} pos={"absolute"}>
            <motion.svg
              initial="start"
              animate="end"
              viewBox="0 0 200 200"
              width="400"
              height="400"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                variants={ellipseVariants}
                end="end"
                transition={{
                  duration: 1.5,
                  yoyo: Infinity,
                  repeat: Infinity,
                }}
                fill="rgba(101, 99, 255, 1)"
                transform="translate(100 100)"
              />
              <motion.path
                variants={ellipseVariants}
                transition={{
                  duration: 1.5,
                  yoyo: Infinity,
                  repeat: Infinity,
                }}
                fill="rgba(101, 99, 255, 1)"
                transform="translate(100 100)"
              />
            </motion.svg>
          </Box>
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
              I am a Full Stack Software Developer, I specialize in Web & Mobile
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
            lg: 60,
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
              FIND ME ON
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
              BEST SKILLS AT
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
