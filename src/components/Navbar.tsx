import { HamburgerIcon } from '@chakra-ui/icons'
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Grid, GridItem, HStack, Input, Stack, Text  , useColorModeValue, useDisclosure} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (
    <>
    <Box  display={{base : 'none' , md : 'block'} }  bg={useColorModeValue('gray.50', 'gray.900')} >
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
      <Box display={{ base: 'block', md: 'none' }}>
      <Text textAlign={'center'} fontSize={'6xl'} style={{ fontFamily: 'Cinzel Decorative' }}>KV</Text> 
      <HamburgerIcon  w={8} h={8} position={'absolute'} top={0} left={0} onClick={onOpen} />
        
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
            <DrawerBody>
            <Stack spacing={8} marginTop={10} display="flex">
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
        </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      </Box>
</>
  )
}

export default Navbar