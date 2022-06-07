import { Box, Grid, GridItem, Image } from '@chakra-ui/react'
import React from 'react'

function HomePage() {
  return (
      <>
          <Box display={{ base: 'none', md: 'flex' }}>
              <Box position={'absolute'} top={'150px'} left={'50px'}>
                  <Image  src='https://i.postimg.cc/pTXNQqpw/16.jpg'/>
              </Box>
              <Box position={'absolute'} top={'280px'} left={'850px'}>
                  <Image width={'400px'} src='https://i.postimg.cc/Kc9G9JHB/img-1.jpg'/>

              </Box>
              <Box position={'absolute'} top={'1000px'} left={'300px'}>
              <Image width={'400px'} src='https://i.postimg.cc/1tSbKf7Z/POLIMODA-TREVES-10-06-21-1593-840.jpg' />

              </Box>
              <Box position={'absolute'} top={'900px'} left={'800px'}>
              <Image  src='https://i.postimg.cc/htFHZSXb/2.jpg' />

              </Box>
              <Box position={'absolute'} top={'1700px'} left={'100px'}>
                  <Image  src='https://i.postimg.cc/7hjjFG78/img-4.jpg'/>
              </Box>
              <Box position={'absolute'} top={'1900px'} left={'800px'}>
                  <Image width={'400px'} height={'450px'} src='https://i.postimg.cc/hP4cB3rq/Post-per-Instagram-1.png'/>

              </Box>
              <Box position={'absolute'} top={'2600px'} left={'250px'}>
                  <Image width={'400px'} src='https://i.postimg.cc/QdpvRR5L/9.jpg'/>

              </Box>

              <Box position={'absolute'} top={'2800px'} left={'800px'}>
              <Image src='https://i.postimg.cc/Dyb9q6k2/img-11.jpg' />

              </Box>

          </Box>
          <Box display={{ base: 'flex', md: 'none' }}>
              <Grid templateColumns={'repeat(5 , 1fr)'}>
                  <GridItem colStart={2} colEnd={2}>
                      <Image width={'300px'} src='https://i.postimg.cc/pTXNQqpw/16.jpg' />
                  </GridItem>
                  <GridItem colStart={4} colEnd={4}>
                      <Image width={'300px'} src='https://i.postimg.cc/Kc9G9JHB/img-1.jpg' />
                  </GridItem>
                  <GridItem paddingTop={5} colStart={2} colEnd={5}>
                      <Image width={'600px'} src='https://i.postimg.cc/1tSbKf7Z/POLIMODA-TREVES-10-06-21-1593-840.jpg' />
                  </GridItem>
                  <GridItem colStart={2} colEnd={2}>
                      <Image width={'300px'} src='https://i.postimg.cc/htFHZSXb/2.jpg' />
                  </GridItem>
                  <GridItem colStart={4} colEnd={4}>
                      <Image width={'300px'} src='https://i.postimg.cc/hP4cB3rq/Post-per-Instagram-1.png' />
                  </GridItem>
                  <GridItem paddingTop={5} colStart={2} colEnd={5}>
                      <Image width={'600px'} src='https://i.postimg.cc/QdpvRR5L/9.jpg' />
                  </GridItem>
                  
              </Grid>

          </Box>
      </>)
}

export default HomePage