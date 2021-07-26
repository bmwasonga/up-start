import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../utils/nhost';
import Link from 'next/link';

import {
  Text,
  Stack,
  Input,
  Button,
  Center,
  Heading,
  Box,
} from '@chakra-ui/react';
import { FaGoogle, FaFacebook, FaGithub } from 'react-icons/fa';
import ContainerComponent from '../Components/ContainerComponent';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const GITHUB_LOGIN = `${process.env.NEXT_PUBLIC_NHOST_BACKEND}/auth/providers/github`;

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await auth.login({ email, password });
    } catch (error) {
      return alert('Login failed');
    }

    router.push('/');
  }

  return (
    <div>
      <ContainerComponent>
        <Heading as="h1" textAlign="center">
          Login
        </Heading>
        <Center>
          <form onSubmit={handleSubmit}>
            <Input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email"
              autoFocus
              mt={[2, 4]}
            />
            <Input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
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
                Login
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

            <Button
              as="a"
              href={GITHUB_LOGIN}
              aria-label="Github Login"
              leftIcon={<FaGithub />}
            >
              {' '}
              Github
            </Button>

            <Button aria-label="Facebook Login" leftIcon={<FaFacebook />}>
              {' '}
              Facebook
            </Button>
          </Stack>
        </Center>
        <Text mt={4} textAlign="center">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Don't have an account? <Link href="/signup">Click here</Link>
        </Text>
      </ContainerComponent>
    </div>
  );
}
