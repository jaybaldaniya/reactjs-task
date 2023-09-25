export const quizQuestions = {
  totalQuestions: 5,
  perQuestionScore: 10,
  totalTime: 10,
  questions: [
    {
      question:
        'Which of the following is used in React.js to increase performance?',
      choices: ['Virtual DOM', 'Original DOM', 'Both A and B', 'None of the above'],
      type: 'MCQs',
      correctAnswer: 'Virtual DOM',
    },
    {
      question:
        'Which function is used to serialize an object into a JSON string in Javascript?',
      choices: ['stringify()', 'parse()', 'convert()', 'None of the above'],
      type: 'MCQs',
      correctAnswer: 'stringify()',
    },
    {
      question:
        'Which of the following keywords is used to define a variable in Javascript?',
      choices: ['var', 'let', 'var and let', 'None of the above'],
      type: 'MCQs',
      correctAnswer: 'var and let',
    },
    {
      question:
        'Which of the following methods can be used to display data in some form using Javascript?',
      choices: [
        'document.write()',
        'console.log()',
        'window.alert',
        'All of the above',
      ],
      type: 'MCQs',
      correctAnswer: 'All of the above',
    },
    {
      question: 'How can a datatype be declared to be a constant type?',
      choices: ['const', 'var', 'let', 'constant'],
      type: 'MCQs',
      correctAnswer: 'const',
    },
  ],
}