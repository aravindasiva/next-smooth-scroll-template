import {
  Box,
  Flex,
  IconButton,
  Divider,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  HStack,
  Stack,
  useToast,
  Text
} from "@chakra-ui/react"
import Link from 'next/link'
import { useRouter } from "next/router"
import React, { useContext } from "react"

export const SiteHeaderHeight = 80

const SiteHeader = () => {
  const { asPath } = useRouter()
  return (
    <Box h={`${SiteHeaderHeight}px`} position="absolute" top={0} right={0} left={0} bg="white">
      <Flex
        wrap="wrap"
        w="100%"
        h="100%"
        alignItems="center"
        pr={10}
        pl={10}
        color="black"
      >
        <Flex align="center" mr={2}>
          <Link href="/" passHref>
            <a>
              Your Logo
            </a>
          </Link>
        </Flex>

        <Box mt={{ base: 4, md: 0 }}>
          <HStack spacing={12}>
            <Link href="/" passHref>
              <Text as={'a'} cursor="pointer" _hover={{ color: 'blue.pego' }} color={asPath === '/' ? 'black' : 'grey'}>Section 1</Text>
            </Link>
            <Link href="/" passHref>
              <Text as={'a'} cursor="pointer" _hover={{ color: 'blue.pego' }} color={asPath === '/' ? 'black' : 'grey'}>Section 2</Text>
            </Link>
            <Link href="/" passHref>
              <Text as={'a'} cursor="pointer" _hover={{ color: 'blue.pego' }} color={asPath === '/' ? 'black' : 'grey'}>Section 2</Text>
            </Link>
          </HStack>
        </Box>
      </Flex>
      <Divider borderColor="grey" />
    </Box>
  )
}

export default SiteHeader
