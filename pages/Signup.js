import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../utils/nhost';

import {
  Text,
  Stack,
  Input,
  Button,
  Center,
  Heading,
  Box,
  Container,
} from '@chakra-ui/react';
import { FaGoogle, FaFacebook, FaGithub } from 'react-icons/fa';
import ContainerComponent from '../Components/ContainerComponent';

export default function Signup() {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  async function handleSubmit(e) {}

  return (
    <div>
      <Container>
        <Heading as="h1" textAlign="center">
          Register
        </Heading>
        <Center>
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              value={displayName}
              onchange={handleSubmit((e) => {
                setName(e.target.value);
              })}
              placeholder="name"
              autoFocus
              mt={[2, 4]}
            />
            <Input
              type="email"
              value={email}
              onchange={handleSubmit((e) => {
                setEmail(e.target.value);
              })}
              placeholder="Email"
              autoFocus
              mt={[2, 4]}
            />
            <Input
              type="password"
              value={password}
              onchange={handleSubmit((e) => {
                setPassword(e.target.value);
              })}
              placeholder="Password"
              autoFocus
              mt={[2, 4]}
            />
            <Box mx="auto" width="100%">
              <Button
                colorScheme="green"
                width="45%"
                mt={[2, 4]}
                ml={4}
                type="submit"
              >
                Sign up
              </Button>
              <Button
                colorScheme="red"
                width="45%"
                mt={[2, 4]}
                ml={4}
                as="a"
                href="/"
              >
                Cancel
              </Button>
            </Box>
          </form>
        </Center>
        <Center>
          <Stack isInline ml={4} mt={6} spacing={8} alignContent="center">
            <Button aria-label="Google Login" leftIcon={<FaGoogle />}>
              {' '}
              Google
            </Button>

            <Button aria-label="Github Login" leftIcon={<FaGithub />}>
              {' '}
              Github
            </Button>

            <Button aria-label="Facebook Login" leftIcon={<FaFacebook />}>
              {' '}
              Facebook
            </Button>
          </Stack>
        </Center>
      </Container>
    </div>
  );
}
