import { Box, Stack } from '@chakra-ui/layout';
import React from 'react';

export default {
  title: 'Typography/Fonts'
}

export const Fonts: React.VFC<{}> = () =>
  <Stack spacing={6}>
    <Box as="h1" textStyle="d1">d1</Box>
    <Box as="h2" textStyle="d2">d2</Box>
    <Box as="h3" textStyle="d3">d3</Box>
    <Box as="h1" textStyle="h1">H1</Box>
    <Box as="h2" textStyle="h2">H2</Box>
    <Box as="h3" textStyle="h3">H3</Box>
    <Box as="h4" textStyle="h4">H4</Box>
    <Box as="h5" textStyle="h5">H5</Box>
    <Box as="h6" textStyle="h6">H6</Box>
    <Box as="p" textStyle="menu">Menu</Box>
    <Box as="h1" textStyle="title">Title</Box>
    <Box as="p" textStyle="caption1">Caption 1</Box>
    <Box as="p" textStyle="caption2">Caption 2</Box>
    <Box as="p" textStyle="body">Body</Box>
    <Box as="p" textStyle="bodySmall">Body Small</Box>
    <Box as="p" textStyle="button">Button</Box> 
    <Box as="p" textStyle="buttonSmall">Button Small</Box>
  </Stack>;
