import {
  Container,
  Flex,
  Box,
  Heading,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";

export default function Contact() {
  return (
    <Container bg="#F2F2F2" maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          bg="#D6D6D6"
          color="black"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading paddingLeft={3} as={"h1"}>
                    Contact
                  </Heading>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <a href="mailto:kris.vancova@gmail.com">
                        <Button
                          as={"p"}
                          size="md"
                          height="48px"
                          width="300px"
                          variant="ghost"
                          color="black"
                          _hover={{ border: "2px solid #FFFFFF !important" }}
                          leftIcon={
                            <MdEmail color="#0D74FF !important" size="20px" />
                          }
                        >
                          kristinaVancova@gmail.com
                        </Button>
                      </a>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 5 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start"
                  >
                    <a href="https://www.instagram.com/krisvanco/?utm_medium=copy_link">
                      <IconButton
                        aria-label="instagram"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: "white" }}
                        icon={
                          <FaInstagram
                            size="28px"
                            href="https://www.instagram.com/krisvanco/?utm_medium=copy_link"
                          />
                        }
                      />
                    </a>
                    <a href="https://linkedin.com/in/kristina-vancova-2b7b7613a">
                      <IconButton
                        aria-label="linkedin"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: "white" }}
                        icon={
                          <FaLinkedin
                            size="28px"
                            href="https://linkedin.com/in/kristina-vancova-2b7b7613a"
                          />
                        }
                      />
                    </a>
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Name and Surname</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                          />
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="object">
                        <FormLabel>Object</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                          />
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: "gray.300",
                          }}
                          placeholder="Write a message"
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                          variant="solid"
                          bg="black"
                          color="white"
                          _hover={{}}
                        >
                          <p> Send a Message</p>
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
