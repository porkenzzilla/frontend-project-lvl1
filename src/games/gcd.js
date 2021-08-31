import theGame from '../secondary/theGame.js';
import randomNumber from '../secondary/randomNumber.js';

const commonDivisor = (num1, num2) => {
  if (!num2) {
    return num1;
  }
  return commonDivisor(num2, num1 % num2);
};

const generateQuestionAnswer = () => {
  const questionNumber1 = randomNumber();
  const questionNumber2 = randomNumber();
  const questionAndAnswer = `Question: ${questionNumber1} ${questionNumber2}\nYour answer: `;
  const correctAnswer = String(commonDivisor(questionNumber1, questionNumber2));
  return [questionAndAnswer, correctAnswer];
};

const rules = 'Find the greatest common divisor of given numbers.';

export default () => theGame(generateQuestionAnswer, rules);
