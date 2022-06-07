import { HamburgerIcon } from '@chakra-ui/icons'
import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Grid, GridItem, HStack, Stack, Text  , useColorModeValue, useDisclosure} from '@chakra-ui/react'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    <Box  display={{base : 'none' , md : 'block'} }  bg={useColorModeValue('gray.50', 'gray.900')} >
      <Grid row={2} column={12}>
        <GridItem h={'100px'} rowSpan={1} colSpan={8}><Text textAlign={'center'} fontSize={'6xl'} style={{ fontFamily: 'Cinzel Decorative' }}>KV</Text>  </GridItem>
        <GridItem rowSpan={1} colSpan={1} colStart={4} colEnd={6}>
          <HStack justify="space-between" display="flex">
          <Box>
            <NavLink    style={isActive => ({
              color: isActive ? "#146194" : "black"
            })} to="/"><p>Home</p> </NavLink>
            </Box>
            <Box>
            <NavLink  style={isActive => ({
              color: isActive ? "#146194" : "black"
            })} to="/work"><p>Work</p> </NavLink>
            </Box>
            <Box>
            <NavLink style={isActive => ({
              color: isActive ? "#146194" : "black"
            })} to="/about"><p>About</p> </NavLink>
            </Box>
            <Box>
            <NavLink style={isActive => ({
              color: isActive ? "#146194" : "black"
            })}to="/contact"><p>Contact</p> </NavLink>
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
            <NavLink style={isActive => ({
              color: isActive ? "#146194" : "black"
            })} to="/"><p>Home</p> </NavLink>
            </Box>
            <Box>
            <NavLink style={isActive => ({
              color: isActive ? "#146194" : "black"
            })} to="/work"><p>Work</p> </NavLink>
            </Box>
            <Box>
            <NavLink style={isActive => ({
              color: isActive ? "#146194" : "black"
            })} to="/about"><p>About</p> </NavLink>
            </Box>
            <Box>
            <NavLink style={isActive => ({
              color: isActive ? "#146194" : "black"
            })} to="/contact"><p>Contact</p> </NavLink>
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