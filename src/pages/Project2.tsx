import { Box, Grid, GridItem, Image } from '@chakra-ui/react'
import React from 'react'

function ProjectTwo() {
    const foto = [
        "https://i.postimg.cc/bNGhFC38/1.jpg",
"https://i.postimg.cc/rsKv3sGg/10.jpg",
"https://i.postimg.cc/pTXNQqpw/16.jpg",
"https://i.postimg.cc/Twkztgbp/17.jpg",
"https://i.postimg.cc/HLtD7fs0/19.jpg",
"https://i.postimg.cc/htFHZSXb/2.jpg",
"https://i.postimg.cc/bY5Xb085/4.jpg",
"https://i.postimg.cc/VL0xFSkk/8.jpg",
"https://i.postimg.cc/QdpvRR5L/9.jpg"
    ]
  return (
    <>
    <Box>
        <Grid templateColumns={{md : 'repeat(3, 1fr)' , base : 'repeat(2,1fr)'}}>
            {foto.map((item) => (
                      <GridItem>
                          <Box p={5}>
                              <Image width={'400px'} src={item} alt='img'/>
                          </Box>
                      </GridItem>
                  )
              )}
        </Grid>
    </Box>
</>
  )
}

export default ProjectTwo