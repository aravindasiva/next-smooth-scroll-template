import React from "react"
import {
  Box,
  Text
} from "@chakra-ui/react"

const Section2 = () => {
  return (
      <Box
        id="section2"
        minH='100vh'
        bg='red.100'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
      >
        <Text color='black' fontSize='4xl'>Some more cool content</Text>
      </Box>
  )
}

export default Section2
