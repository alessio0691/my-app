import { Box, Grid, GridItem, Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function ProjectPage() {
  return (
    <>
      <Box bg="#F2F2F2" height={'80vh'}>
      <Grid  templateColumns={{md : 'repeat(3, 1fr)' , base : 'repeat(1, 1fr)' }} paddingTop={'3em'} >
        <GridItem>
      <Link to='1'>  <Box  justifyContent={'center'} display="flex" >
          <Image width={'300px'} height={'400px'} src='https://i.postimg.cc/7LDrP2Rq/img-5.jpg' />
          </Box>
          <Box display={'flex'} justifyContent='center'>
          <p>| Modernity meets rural girl |</p></Box></Link>
        </GridItem>
        <GridItem>
       <Link to='2'>  <Box justifyContent={'center'} display="flex">
          <Image width={'300px'} height={'400px'} src='https://i.postimg.cc/HLtD7fs0/19.jpg' />
          </Box>
          <Box display={'flex'} justifyContent='center'>
         <p>| Life Illusion |</p></Box></Link>
        </GridItem>
        <GridItem>
      <Link to='3'>   <Box justifyContent={'center'} display="flex">
        <Image width={'300px'}  height={'400px'} src='https://i.postimg.cc/1tSbKf7Z/POLIMODA-TREVES-10-06-21-1593-840.jpg' />
          </Box>
          <Box display={'flex'} justifyContent='center'>
         <p>| Vanity |</p></Box></Link>
          </GridItem>
    </Grid></Box>
    </>
  )
}

export default ProjectPage