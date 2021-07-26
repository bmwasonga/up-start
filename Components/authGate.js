import { useRouter } from 'next/router';
import { useAuth } from '@nhost/react-auth';
import { Text } from '@chakra-ui/react';

export function AuthGate({ children }) {
  const { signedIn } = useAuth();
  const router = useRouter();

  if (signedIn === null) {
    return <Text>Checking Authentication</Text>;
  }

  if (!signedIn) {
    router.push('/login');
    return <Text>Redirecting</Text>;
  }

  return children;
}

// add useRouter or see its usability. modified this page from the documentation
