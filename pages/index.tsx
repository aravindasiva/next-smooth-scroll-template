import { Button } from '@chakra-ui/button'
import { Heading } from '@chakra-ui/layout'
import Head from 'next/head'
import SiteLayout from '../components/SiteLayout'

export default function Home() {
  return (
    <SiteLayout>
      <Button colorScheme="red">Test</Button>
    </SiteLayout>
  )
}
