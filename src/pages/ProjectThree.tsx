import { Box, Grid, GridItem,Image } from '@chakra-ui/react'
import React from 'react'

function ProjectThree() {
    const foto = ['https://i.postimg.cc/1tSbKf7Z/POLIMODA-TREVES-10-06-21-1593-840.jpg']
  return (
    <>
          <Box display={'flex'} justifyContent={'center'}>
        <Grid templateColumns={{md : 'repeat(1, 1fr)' , base : 'repeat(1,1fr)'}}>
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

export default ProjectThree