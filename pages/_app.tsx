import { ChakraProvider } from "@chakra-ui/react"
import Router from "next/router"
import { useEffect } from "react"
import theme from "../src/utils/theme"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    localStorage.setItem("chakra-ui-color-mode", "light")
  }, [])

  return (
    <>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default MyApp
