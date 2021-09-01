import theGame from '../secondary/theGame.js';
import randomNumber from '../secondary/randomNumber.js';

const isPrime = (num) => {
  if (num <= 1) return 'no';
  if (num % 2 === 0 && num > 2) return 'no';
  const s = Math.sqrt(num);
  for (let i = 3; i <= s; i += 2) {
    if (num % i === 0) return 'no';
  }
  return 'yes';
};

const generateQuestionAnswer = () => {
  const questionNumber = randomNumber();
  const questionAndAnswer = `Question: ${questionNumber}\nYour answer: `;
  const correctAnswer = isPrime(questionNumber);
  return [questionAndAnswer, correctAnswer];
};

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => theGame(generateQuestionAnswer, rules);
