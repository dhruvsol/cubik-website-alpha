import {
  Box,
  Button,
  Center,
  Collapse,
  Container,
  Flex,
  HStack,
  Text,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import Logo from './Logo';

export function Header() {
  return (
    <Container
      zIndex='9'
      maxW={'full'}
      position='fixed'
      p='0'
      bg='transparent'
      sx={{
        backdropFilter: 'blur(10px)',
        margin: '0px !important',
        marginTop: '0px !important',
      }}
    >
      <Flex
        mx='auto'
        maxW='7xl'
        alignItems={'center'}
        justifyContent={'space-between'}
        py={{ base: '0.6rem', md: '1.5rem' }}
        px='1.5rem'
      >
        <Box as='button' fontSize={'5xl'}>
          <Logo />
        </Box>
        <HStack gap='0rem'>
          <Button
            as='a'
            href={'https://twitter.com/intent/tweet?text=wen%20@_cubik%20?'}
            target='_blank'
            px='0.5rem'
            iconSpacing={'0.2rem'}
            variant={'unstyled'}
            height='fit-content'
            lineHeight={'20px'}
            fontSize={{ base: 'sm', md: 'md' }}
          >
            wen ?
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
}
