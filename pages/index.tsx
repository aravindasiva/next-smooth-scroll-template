import { Button } from '@chakra-ui/button'
import { Heading } from '@chakra-ui/layout'
import Head from 'next/head'
import { Box } from "@chakra-ui/react"
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import SiteHeader from '../components/SiteHeader'

export default function Home() {
  return (
    <>
      <SiteHeader />
      <Section1 />
      <Section2 />
      <Section3 />
    </>
  )
}
