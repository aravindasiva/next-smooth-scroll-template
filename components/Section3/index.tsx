import React from "react"
import {
  Box,
  Text
} from "@chakra-ui/react"

const Section3 = () => {
  return (
      <Box
        name="section3"
        id="section3"
        minH='100vh'
        bg='green.100'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
      >
        <Text color='black' fontSize='4xl'>and more...</Text>
      </Box>
  )
}

export default Section3
