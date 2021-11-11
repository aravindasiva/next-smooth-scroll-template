import React from "react"
import {
  Box,
  Text,
  Center,
} from "@chakra-ui/react"

const Section1 = () => {
  return (
    <Box
      id="section1"
      minH='100vh'
      bg='grey'
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
    >
      <Text color='black' fontSize='4xl'>Cool content goes here</Text>
    </Box>
  )
}

export default Section1
