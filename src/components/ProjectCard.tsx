import { Box, Text, Tooltip } from "@chakra-ui/react"
import Image from "next/image"
import React, { useState } from "react"
import { MotionBox } from "./AnimatedComponents"

interface ProjectCardProps {
  image: string
  title: string
  desc: string
  width: number
  height: number
  href?: string
  tooltipLabel: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  desc,
  width,
  height,
  href,
  tooltipLabel,
}) => {
  const [isCardHovered, setIsCardHovered] = useState(false)
  return (
    <Box>
      <Tooltip
        hasArrow
        noOfLines={2}
        label={tooltipLabel}
        bg="black"
        color="white"
      >
        <a
          href={href}
          rel="noreferrer"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <MotionBox
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            cursor="pointer"
            gap={2}
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(101, 99, 255, 0.1)",
            }}
            whileTap={{ scale: 0.9 }}
            mt={5}
            //   py={5}
            height="60vh"
            width={{
              base: "85vw",
              sm: "85vw",
              md: "45vw",
            }}
            borderRadius="lg"
            onMouseOver={() => setIsCardHovered(true)}
            onMouseOut={() => setIsCardHovered(false)}
            bg="#eee"
            bgGradient={`${
              !isCardHovered ? "linear(to-br, #ecf0f3 , #fff)" : ""
            }`}
            boxShadow="-3.3px -3.3px 3px #fff, 5px 5px 5.2px rgba(174, 174, 192, 0.5)"
          >
            <Image src={image} width={width} height={height} />
            <Text
              color={"rgba(101, 99, 255, 1)"}
              fontFamily={"Montserrat"}
              fontSize={20}
              fontWeight="600"
            >
              {title}
            </Text>
            <Text fontFamily={"Montserrat"} fontSize={18} fontWeight="500">
              {desc}
            </Text>
          </MotionBox>
        </a>
      </Tooltip>
    </Box>
  )
}

export default ProjectCard
