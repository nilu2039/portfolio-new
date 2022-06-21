import { Box, Flex, Text } from "@chakra-ui/react"
import React from "react"
import ProjectCard from "./ProjectCard"

const HomeProjects = ({ projectsRef }) => {
  return (
    <Box ref={projectsRef} px={5} pb={10} id="home-projects">
      <Box
        borderTopWidth={2}
        display="flex"
        flexDirection="column"
        py={10}
        justifyContent="center"
        alignItems="center"
        borderTopColor="rgba(256, 256, 256, 0.8)"
      >
        <Text
          color={"rgba(101, 99, 255, 1)"}
          fontFamily="Montserrat"
          fontWeight={500}
          fontSize={20}
        >
          SOME OF MY PROJECTS
        </Text>
        <Box
          display="flex"
          mt={10}
          flexDirection={{
            base: "column",
            sm: "column",
            md: "row",
          }}
          justifyContent="center"
          alignItems="center"
          gap={8}
        >
          <ProjectCard
            image="/web-programming.png"
            href="https://github.com/nilu2039/codeitout"
            title="CodeItOut"
            desc="A full-fledged online code editor."
            width={300}
            tooltipLabel={"CodeItOut"}
            height={300}
          />
          <ProjectCard
            image="/background.png"
            href="https://github.com/nilu2039/flask_yt_downloader"
            title="YT-Downloader"
            desc="Youtube video dwonloader"
            tooltipLabel={"YT Downloader"}
            width={300}
            height={260}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default HomeProjects
