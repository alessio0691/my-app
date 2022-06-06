import { Box } from '@chakra-ui/react'
import React, { PropsWithChildren } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function Layout( {children} : PropsWithChildren<any>) {
  return (
    <>
        <Navbar />
      <Box  paddingBottom={"7em"}>
                {children}
      </Box>
      <Footer  />
      </>
  )
}

export default Layout