import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme'
import Fonts from "../theme/fonts"
import "@fontsource/inter/400.css"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [(Story) =>
  <ChakraProvider theme={ theme } >
    <Fonts />
    < Story />
  </ChakraProvider>
];