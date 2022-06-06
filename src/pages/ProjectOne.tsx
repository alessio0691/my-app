import { Box, Grid, GridItem, Image } from '@chakra-ui/react'
import React from 'react'

function ProjectOne() {
    const foto = 
        [
            'https://i.postimg.cc/2jBYwrnR/img-14.jpg',
            'https://i.postimg.cc/6Q0J8Qsn/img-2.jpg',
            'https://i.postimg.cc/gc59X57S/img-3.jpg',
            'https://i.postimg.cc/LXCcV08s/img-6.jpg',
            'https://i.postimg.cc/j5SVPrK9/img-7.jpg',
            'https://i.postimg.cc/Th8H78MT/img-8.jpg',
            'https://i.postimg.cc/wBFZ6bJk/img-9.jpg',
            'https://i.postimg.cc/mkP0pNPy/img-10.jpg',
            'https://i.postimg.cc/Dyb9q6k2/img-11.jpg',
            'https://i.postimg.cc/cJdPGNKH/img-13.jpg'


        ]
  return (
    <>
    <Box display={'flex'} justifyContent={'center'}>
        <Grid templateColumns={{md : 'repeat(2, 1fr)' , base : 'repeat(2,1fr)'}}>
            {foto.map((item) => (
                      <GridItem>
                          <Box p={5}>
                              <Image  src={item} alt='img'/>
                          </Box>
                      </GridItem>
                  )
              )}
        </Grid>
    </Box>
</>
  )
}

export default ProjectOne