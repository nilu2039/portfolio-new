import { ChakraProvider, LightMode, useColorMode } from "@chakra-ui/react"
import { useEffect } from "react"
import theme from "../src/utils/theme"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  const { colorMode, toggleColorMode } = useColorMode()

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
