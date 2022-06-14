import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
  import { FaInstagram, FaLinkedin  , FaMailBulk} from 'react-icons/fa';
  import { ReactNode } from 'react';
  
  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function Footer() {
    return (
      <Box
        position={'fixed'}
        bottom={0}
        w={'100%'}
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Text>© 2022 Kristina Vancova</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Linkedn'} href={'https://linkedin.com/in/kristina-vancova-2b7b7613a'}>
              <FaLinkedin />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'https://www.instagram.com/krisvanco/?utm_medium=copy_link'}>
              <FaInstagram />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'https://www.instagram.com/krisvanco/?utm_medium=copy_link'}>
              <FaMailBulk />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    );
  }