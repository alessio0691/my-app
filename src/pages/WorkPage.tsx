import { Box, Grid, GridItem, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const Work = () => {
  return (
    <>
      <Box bg="#F2F2F2" height={'80vh'}>
      <Grid row={2} column={1} marginTop={'1.5rem'}>
        <GridItem rowSpan={1} colSpan={1}>
          <Box display={"flex"} justifyContent="space-between">
            <Box
              display={"flex"}
              justifyContent="center"
              alignItems="center"
              w={"100%"}
            >
            <Link to='/project'><p>Open</p></Link>
            </Box>
            <Image
              src="https://i.postimg.cc/DzTCtxHG/immagine-selezione2.jpg"
              objectFit="cover"
              alt=""
            />
          </Box>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <Box display={"flex"} justifyContent="space-between">
            <Image
              src="https://i.postimg.cc/7ZmVWq3F/immagine-selezione11-19a28eb7.jpg"
              objectFit="cover"
              alt=""
            />
            <Box
              display={"flex"}
              justifyContent="center"
              alignItems="center"
              w={"100%"}
            >
              <Link to='/commerce'><p>Open</p></Link>
            </Box>
          </Box>
        </GridItem>
      </Grid></Box>
    </>
  );
};
