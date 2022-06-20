import { Box, Text, VStack } from "@chakra-ui/react"
import React from "react"
import { BsPhone } from "react-icons/bs"
import { MdWeb } from "react-icons/md"
import FeatureCard from "./FeatureCard"

const HomeFeatures = ({ featuresRef }) => {
  return (
    <Box ref={featuresRef} pt={10} px={5} pb={20} id="home_feature">
      <Box borderTopWidth={3} borderTopColor="rgba(256, 256, 256, 0.7)">
        <VStack mt={2}>
          <Text
            fontSize={20}
            fontFamily="Montserrat"
            color="rgba(101, 99, 255, 1)"
          >
            FEATURES
          </Text>
          <Text
            fontSize={35}
            fontWeight="700"
            fontFamily="Montserrat"
            // color="rgba(101, 99, 255, 1)"
          >
            What I Do
          </Text>
          <Text
            textAlign="center"
            fontSize={20}
            fontFamily="Poppins"
            color="rgba(0, 0, 0, 0.5)"
          >
            I'm a full stack developer, I specialize in creating Web and Mobile
            Apps. I mostly work in MERN stack (MongoDB, Express, React, NodeJS)
          </Text>
        </VStack>
      </Box>
      <Box
        mt={10}
        display="flex"
        flexDirection={{
          base: "column",
          sm: "column",
          md: "row",
        }}
        justifyContent="center"
        alignItems="center"
        gap={10}
      >
        <FeatureCard
          title="Mobile Apps"
          content="I develop fast and easy to use Android and iOS Mobile Applications with amazing UI and UX."
          icon={<BsPhone color="#000" size={30} />}
        />
        <FeatureCard
          title="Web Apps"
          content="I design and develop amazing Websites that are easy to use, simple, fast and secure."
          icon={<MdWeb color="#000" size={30} />}
        />
      </Box>
    </Box>
  )
}

export default HomeFeatures
