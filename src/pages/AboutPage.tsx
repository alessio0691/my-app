import { Box, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

function AboutPage() {

  return (
      <>
        <Box bg="#F2F2F2">
          <Grid templateColumns={{md: 'repeat(8, 1fr)' ,base: 'repeat(1, 1fr)'}}>
              <GridItem colStart={{md : 2}} colEnd={{md : 5}} bg={"#D6D6D6"} marginTop={'1em'} borderRadius={'1%'}>
                  <Heading as={'h2'} paddingLeft={2}>Kristina Vancova</Heading>

                  <Box display='flex' justifyContent='end'>
                
                  <Text  as={'h3'} paddingLeft={2} paddingRight={2} >
To me, fashion styling is like an art - a collection of inspiration and emotion put together to propose a unique view of the world. My passion is to do styling. I do love to be asked for styling advice, to dress up others, or to be a personal shopper. Being surrounded by fashion and creativity makes me passionate and excited. There is always something to explore and to play with. Going through the styling process should be fun, easy and with a good feeling. Waiting to be discovered, there are endless possibilities of trends, color combinations, patterns and styles. I get excited about every new project I have an opportunity to work on.
<br />
As a graduate in Fashion Styling and previously Fashion Product Management, I explored fashion industry from different perspectives. That included management of marketing research, development of collections and of course, styling. Through taking part in various internships, I expanded my practical experience with fashion and styling, but also kept learning when working on multiple projects as part of my studies.
<br />
I embrace challenges, love to work on creative tasks, learn fast, communicate well, and I am always up for taking extra responsibility. I am open to playing with new things in the styling world. If you work with me, you will work with a hard-working, humble, and persistent stylist. Want to develop a new style? Or dressing for a special event? Or looking to upgrade your casual wardrobe? I can help. And I will do it with joy, love, and happiness.

                  </Text>
                  </Box></GridItem>
                  <GridItem paddingLeft={{base : 0 , md : '10px'}} colStart={{md : 5}} colEnd={{md :7}} paddingTop={{ base : '1em' , md : '1em'}}>
                      <Box>
                          <Image width={'130px'} src='https://i.postimg.cc/vm3tpzZL/about-1-3158bc46.jpg' />
                      </Box>
                      <Box display={'flex'} justifyContent={'end'}>
                          <Image width={'130px'} src='https://i.postimg.cc/vm3tpzZL/about-1-3158bc46.jpg' />
                      </Box>
                      <Box>
                          <Image width={'130px'} src='https://i.postimg.cc/vm3tpzZL/about-1-3158bc46.jpg' />
                      </Box>
              </GridItem>
              </Grid>
              </Box>
      </>)
}

export default AboutPage