import React, { useState } from 'react';
import { AuthGuard } from '../Components/privateRoute';

import { CREATE_NEW_QUESTION } from '../utils/api';
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

  const handleInputChange = (event) => {
    const {
      target: { name, value },
    } = event;
    setQuestionForm({
      ...questionForm,
      [name]: value,
    });
  };

  const [createQuiz] = useMutation(CREATE_NEW_QUESTION);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await createQuiz({
        varriables: {
          question: questionForm.question,

          question_answers: {
            data: [
              {
                answer: questionForm.answer_1,
                is_correct: questionForm.answer_1 === questionForm.correct,
              },

              {
                answer: questionForm.answer_2,
                is_correct: questionForm.answer_2 === questionForm.correct,
              },

              {
                answer: questionForm.answer_3,
                is_correct: questionForm.answer_3 === questionForm.correct,
              },

              {
                answer: questionForm.answer_4,
                is_correct: questionForm.answer_4 === questionForm.correct,
              },
            ],
          },
        },
      });
    } catch (error) {
      console.log(error);
      return alert('Failed to add the new question');
    }
  };

  return (
    <ContainerComponent>
      <Box p={8} mx="auto" width="75%" boxShadow="dark-lg" rounded="md">
        <Heading as="h1" textAlign="center" mb={8}>
          Create a new Quiz.
        </Heading>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="question"
            placeholder="Enter your question"
            onChange={handleInputChange}
            value={questionForm.question}
            mt={[2, 5]}
          />
          <Stack isInline mt={[2, 4]}>
            <Input
              type="text"
              name="answer_1"
              placeholder="Enter your first answer"
              onChange={handleInputChange}
              value={questionForm.answer_1}
            />

            <Input
              type="text"
              name="answer_2"
              placeholder="Enter your second answer"
              onChange={handleInputChange}
              value={questionForm.answer_2}
            />

            <Input
              type="text"
              name="answer_3"
              placeholder="Enter your third answer"
              onChange={handleInputChange}
              value={questionForm.answer_3}
            />

            <Input
              type="text"
              name="answer_4"
              placeholder="Enter your fourth answer"
              onChange={handleInputChange}
              value={questionForm.answer_4}
            />
          </Stack>
          <Center>
            <Stack spacing={[0, 4]} direction="row">
              <Radio
                name="correct "
                onChange={handleInputChange}
                value={questionForm.answer_1}
                isChecked={
                  questionForm.correct !== '' &&
                  questionForm.correct === questionForm.answer_1
                }
              >
                {questionForm.answer_1 ? questionForm.answer_1 : 'answer 1'}
              </Radio>

              <Radio
                name="correct "
                onChange={handleInputChange}
                value={questionForm.answer_2}
                isChecked={
                  questionForm.correct !== '' &&
                  questionForm.correct === questionForm.answer_2
                }
              >
                {questionForm.answer_2 ? questionForm.answer_2 : 'answer 2'}
              </Radio>

              <Radio
                name="correct "
                onChange={handleInputChange}
                value={questionForm.answer_3}
                isChecked={
                  questionForm.correct !== '' &&
                  questionForm.correct === questionForm.answer_3
                }
              >
                {questionForm.answer_3 ? questionForm.answer_3 : 'answer 3'}
              </Radio>

              <Radio
                name="correct "
                onChange={handleInputChange}
                value={questionForm.answer_4}
                isChecked={
                  questionForm.correct !== '' &&
                  questionForm.correct === questionForm.answer_4
                }
              >
                {questionForm.answer_4 ? questionForm.answer_4 : 'answer 4'}
              </Radio>
            </Stack>
          </Center>
          <Stack isInline mt={[2, 4]} mx="auto">
            <Button colorScheme="green" width="50%" type="submit">
              Create Question
            </Button>
            <Button colorScheme="red" as="a" href="/" width="50%" type="submit">
              Cancel
            </Button>
          </Stack>
        </form>
      </Box>
    </ContainerComponent>
  );
}

// export default CreateQuestion;
export default AuthGuard(CreateQuestion);
