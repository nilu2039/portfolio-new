import { Box, Text, VStack } from "@chakra-ui/react"
import React from "react"

const HomeFeatures = () => {
  return (
    <Box pt={10} px={5} pb={20}>
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
    </Box>
  )
}

export default HomeFeatures
