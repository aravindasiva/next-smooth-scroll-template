import { Box } from "@chakra-ui/react"
import SiteHeader, { SiteHeaderHeight } from "../SiteHeader"

const SiteLayout = ({ children }) => {
  return (
    <Box position="relative" w="100%" h="100vh">
      <Box overflow='hidden' position="absolute" top={0} right={0} left={0} bottom={0}>
        <SiteHeader />
        <Box bg="grey" overflow="auto" position="absolute" top={`${SiteHeaderHeight}px`} left={0} bottom={0} right={0}>
          {children}
        </Box>
      </Box>
    </Box>
  )
}

export default SiteLayout