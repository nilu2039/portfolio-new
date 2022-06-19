import { Box } from "@chakra-ui/react"
import React from "react"
import HomeFeatures from "../components/HomeFeatures"
import HomeHeader from "../components/HomeHeader"
import NavBar from "../components/NavBar"

export const HomePage = () => {
  return (
    <Box bg="#eee">
      <NavBar />
      <HomeHeader />
      <HomeFeatures />
    </Box>
  )
}
