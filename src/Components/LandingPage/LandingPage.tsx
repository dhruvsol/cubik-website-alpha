import {
  Button,
  Center,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const LandingPage = () => {
  const router = useRouter();
  return (
    <Container h='100vh' maxW='5xl' py={{ base: '7rem', md: '10rem' }}>
      <VStack
        textAlign='center'
        maxW='41rem'
        mx='auto'
        alignItems={'center'}
        justify='center'
        p={{ base: '1rem', md: '0rem' }}
        gap='0.1rem'
      >
        <Text fontSize={{ base: 'sm', md: 'lg' }} color='#FF8EFF'>
          Arriving 2023
        </Text>
        <Heading
          zIndex='1'
          fontSize={{ base: '2xl', md: '5xl' }}
          fontWeight='600'
        >
          Support public good on Solana in a decentralized way
        </Heading>
        <Center
          pt='2.5rem'
          width={{ base: '14rem', md: '22rem' }}
          transform={{ base: 'translateY(-7rem)', md: 'translateY(-8rem)' }}
          zIndex='0'
        >
          <Image
            src='/HeroCube.jpg'
            alt='cubik hero image'
            width={400}
            height={400}
          />
        </Center>
      </VStack>
    </Container>
  );
};

export default LandingPage;
