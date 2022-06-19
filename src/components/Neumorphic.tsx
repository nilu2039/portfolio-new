import { Box, useColorMode } from "@chakra-ui/react"
import React from "react"
import { AiOutlineGithub } from "react-icons/ai"
import { MotionBox } from "./AnimatedComponents"

interface NeumorphicProps {
  p?: number
  background?: string
  borderRadius?: string
  boxShadow?: string
  children: any
}

const Neumorphic: React.FC<NeumorphicProps> = ({
  p = 2,
  background = "EEEEEE",
  borderRadius = "md",
  boxShadow = "-3.3px -3.3px 3px #fff, 5px 5px 5.2px rgba(174, 174, 192, 0.5)",
  children,
}) => {
  return (
    <MotionBox
      p={p}
      background={background}
      borderRadius={borderRadius}
      whileHover={{ scale: 1.1, backgroundColor: "rgba(101, 99, 255, 0.3)" }}
      whileTap={{ scale: 0.9, backgroundColor: "rgba(101, 99, 255, 0.5)" }}
      cursor="pointer"
      boxShadow={boxShadow}
    >
      {children}
    </MotionBox>
  )
}

export default Neumorphic
