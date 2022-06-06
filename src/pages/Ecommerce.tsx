import { Box, Grid, GridItem, Image } from '@chakra-ui/react'
import React from 'react'
import { imgEcommerce } from '../assets/commerce'
function Ecommerce() {
    const test = imgEcommerce
  return (
      <>
          <Box>
              <Grid templateColumns={{md : 'repeat(4, 1fr)' , base : 'repeat(2,1fr)'}}>
                  {test.map((item) => (
                            <GridItem>
                                <Box p={5}>
                                    <Image width={'300px'} src={item} alt='img'/>
                                </Box>
                            </GridItem>
                        )
                    )}
              </Grid>
          </Box>
      </>
  )
}

export default Ecommerce