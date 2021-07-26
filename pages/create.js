import React, { useState } from 'react';
import { AuthGate } from '../Components/authGate';
import { useMutation } from '@apollo/client';
import ContainerComponent from '../Components/ContainerComponent';
import {
  Input,
  Button,
  Box,
  Heading,
  Radio,
  Stack,
  Center,
} from '@chakra-ui/react';

function CreateQuestion() {
  const [questionForm, setQuestionForm] = useState({
    question: '',
    answer_1: '',
    answer_2: '',
    answer_3: '',
    answer_4: '',
    correct: '',
  });

  const handleInputCHange = (event) => {
    const {
      target: { name, value },
    } = event;
    setQuestionForm({
      ...questionForm,
      [name]: value,
    });
  };

  return (
    <ContainerComponent>
      <Box p={8} mx="auto" width="75%" boxShadow="dark-lg" rounded="md">
        <Heading as="h1" textAlign="center" mb={8}>
          Create a new Quiz.
        </Heading>
      </Box>
    </ContainerComponent>
  );
}

export default AuthGate(CreateQuestion);
