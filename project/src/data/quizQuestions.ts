import type { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'science-1',
    question: 'What is the closest planet to the Sun?',
    options: ['Venus', 'Mercury', 'Earth', 'Mars'],
    correctAnswer: 1,
    explanation: 'Mercury is the closest planet to the Sun, orbiting at an average distance of about 36 million miles!',
    topic: 'Science'
  },
  {
    id: 'math-1',
    question: 'What is 15 × 8?',
    options: ['120', '125', '115', '130'],
    correctAnswer: 0,
    explanation: '15 × 8 = 120. You can think of it as (10 × 8) + (5 × 8) = 80 + 40 = 120!',
    topic: 'Math'
  },
  {
    id: 'science-2',
    question: 'How many bones are in an adult human body?',
    options: ['196', '206', '216', '186'],
    correctAnswer: 1,
    explanation: 'An adult human has 206 bones! Babies are born with about 270 bones, but many fuse together as they grow.',
    topic: 'Science'
  },
  {
    id: 'history-1',
    question: 'In which year did World War II end?',
    options: ['1944', '1945', '1946', '1943'],
    correctAnswer: 1,
    explanation: 'World War II ended in 1945. The war in Europe ended in May, and the war in the Pacific ended in September.',
    topic: 'History'
  },
  {
    id: 'math-2',
    question: 'What is the square root of 144?',
    options: ['11', '12', '13', '14'],
    correctAnswer: 1,
    explanation: 'The square root of 144 is 12, because 12 × 12 = 144!',
    topic: 'Math'
  },
  {
    id: 'science-3',
    question: 'What gas do plants absorb from the atmosphere during photosynthesis?',
    options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'],
    correctAnswer: 2,
    explanation: 'Plants absorb carbon dioxide (CO₂) from the atmosphere and use it to make food during photosynthesis!',
    topic: 'Science'
  },
  {
    id: 'geography-1',
    question: 'Which is the largest ocean on Earth?',
    options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
    correctAnswer: 3,
    explanation: 'The Pacific Ocean is the largest ocean, covering about one-third of Earth\'s surface!',
    topic: 'Geography'
  },
  {
    id: 'math-3',
    question: 'If a triangle has angles of 60°, 60°, and 60°, what type of triangle is it?',
    options: ['Right triangle', 'Equilateral triangle', 'Isosceles triangle', 'Scalene triangle'],
    correctAnswer: 1,
    explanation: 'An equilateral triangle has all three angles equal to 60°, and all three sides are the same length!',
    topic: 'Math'
  }
];