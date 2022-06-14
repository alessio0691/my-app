import { Box, Grid, GridItem, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const Work = () => {
  return (
    <>
  <Box bg="#F2F2F2" height={'80vh'}>
      <Grid  templateColumns={{md : 'repeat(2, 1fr)' , base : 'repeat(1, 1fr)' }} paddingTop={'3em'} >
        <GridItem >
      <Link to='/project'>   <Box   justifyContent={'center'} display="flex" >
          <Image width={'400px'} height={'500px'} src='https://i.postimg.cc/7LDrP2Rq/img-5.jpg' />
          </Box>
          <Box display={'flex'} justifyContent='center'>
          <p>Project </p></Box></Link>
        </GridItem>
        <GridItem >
      <Link to='commerce'>   <Box justifyContent={'center'} display="flex">
        <Image width={'400px'}  height={'500px'} src='https://i.postimg.cc/VkW23fFn/AAG0951001-IMG-0058-14-16-39-s.jpg' />
          </Box>
          <Box display={'flex'} justifyContent='center'>
         <p>Project Ecommerce</p></Box></Link>
        </GridItem>
    </Grid></Box>
    </>
  );
};
