import theGame from '../secondary/theGame.js';
import randomNumber from '../secondary/randomNumber.js';

const generateRandomProgression = () => {
  const sumNum = randomNumber(1, 5);
  const randomNum = randomNumber(1, 50);
  const recomendedLength = randomNumber(4, 9);
  const array = [];
  let currentValue = randomNum;
  while (array.length <= recomendedLength) {
    array.push(currentValue);
    currentValue += sumNum;
  }
  return array;
};

const setIntoString = (array) => {
  let result = '';
  for (let i = 0; i < array.length; i += 1) {
    result = `${result} ${array[i]}`;
  }
  return result;
};

const generateQuestionAnswer = () => {
  const generate = generateRandomProgression();
  const randomIndexOfReplace = randomNumber(0, generate.length - 1);
  const setHidenSymbol = (array) => {
    array.splice(randomIndexOfReplace, 1, '..');
    return array;
  };
  const getHidenNumber = (array) => {
    const result = [];
    for (let i = 0; i < array.length; i += 1) {
      if (randomIndexOfReplace === i) {
        result.push(array[i]);
      }
    }
    return result;
  };
  const correctAnswer = String(getHidenNumber(generate));
  const questionProgression = setIntoString(setHidenSymbol(generate));
  const questionAndAnswer = `Question: ${questionProgression}\nYour answer: `;
  return [questionAndAnswer, correctAnswer];
};

const mainQuestion = 'What number is missing in the progression?';

export default () => theGame(generateQuestionAnswer, mainQuestion);
