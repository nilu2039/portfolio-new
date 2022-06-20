import { Box, Flex, Text } from "@chakra-ui/react"
import React, { useState } from "react"
import { MotionBox } from "./AnimatedComponents"

interface CardProps {
  title: string
  content: string
  icon: JSX.Element
}

const FeatureCard: React.FC<CardProps> = ({ title, content, icon }) => {
  const [isCardHovered, setIsCardHovered] = useState(false)

  return (
    <Box mt={10}>
      <Flex direction="column">
        <MotionBox
          bg="#eee"
          display="flex"
          alignItems="center"
          whileHover={{
            scale: 1.02,
            backgroundColor: "rgba(101, 99, 255, 0.6)",
          }}
          whileTap={{ scale: 0.9 }}
          cursor="pointer"
          height={200}
          onMouseOver={() => setIsCardHovered(true)}
          onMouseOut={() => setIsCardHovered(false)}
          boxShadow="-3.3px -3.3px 6px #fff, 5px 5px 5.2px rgba(174, 174, 192, 0.5)"
          borderRadius="lg"
          bgGradient={`${
            !isCardHovered ? "linear(to-br, #ecf0f3 , #fff)" : ""
          }`}
        >
          <MotionBox
            gap={2}
            display="flex"
            alignItems="center"
            whileHover={{
              marginBottom: "1.5rem",
            }}
            flexDirection="column"
          >
            {icon}

            <Text
              fontSize={20}
              fontWeight={700}
              textAlign="center"
              fontFamily="Montserrat"
            >
              {title}
            </Text>
            <Text
              fontSize={17.2}
              fontWeight={500}
              fontFamily="Montserrat"
              textAlign="center"
            >
              {content}
            </Text>
          </MotionBox>
        </MotionBox>
      </Flex>
    </Box>
  )
}

export default FeatureCard
