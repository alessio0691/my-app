import { Box, Grid, GridItem, HStack, Stack, Text  , useColorModeValue} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <Box     bg={useColorModeValue('gray.50', 'gray.900')} >
      <Grid row={2} column={12}>
        <GridItem h={'100px'} rowSpan={1} colSpan={8}><Text textAlign={'center'} fontSize={'6xl'} style={{ fontFamily: 'Cinzel Decorative' }}>KV</Text>  </GridItem>
        <GridItem rowSpan={1} colSpan={1} colStart={4} colEnd={6}>
          <HStack justify="space-between" display="flex">
          <Box>
            <Link to="/"><p>Home</p> </Link>
            </Box>
            <Box>
            <Link to="/work"><p>Work</p> </Link>
            </Box>
            <Box>
            <Link to="/about"><p>About</p> </Link>
            </Box>
            <Box>
            <Link to="/contact"><p>Contact</p> </Link>
            </Box>
        </HStack>
        </GridItem>
        </Grid>
    </Box>
  )
}

export default Navbar