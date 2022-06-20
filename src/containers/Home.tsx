import { Box, ScaleFade } from "@chakra-ui/react"
import React, { useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"

import HomeFeatures from "../components/HomeFeatures"
import HomeHeader from "../components/HomeHeader"
import HomeProjects from "../components/HomeProjects"
import NavBar from "../components/NavBar"

export const HomePage = () => {
  const viewConfig = {
    threshold: 0.4,
    triggerOnce: true,
  }

  const { ref: featuresRef, inView: inViewFeatures } = useInView(viewConfig)
  const { ref: projectsRef, inView: inViewProjects } = useInView(viewConfig)

  return (
    <Box bg="#eee">
      <NavBar />
      <ScaleFade initialScale={0.5} in={true}>
        <HomeHeader />
      </ScaleFade>
      <ScaleFade initialScale={0.5} in={inViewFeatures}>
        <HomeFeatures featuresRef={featuresRef} />
      </ScaleFade>
      <ScaleFade initialScale={0.5} in={inViewProjects}>
        <HomeProjects projectsRef={projectsRef} />
      </ScaleFade>
    </Box>
  )
}
