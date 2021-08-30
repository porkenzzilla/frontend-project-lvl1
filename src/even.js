import theGame from '../src/secondary/theGame.js';
import randomNumber from '../src/secondary/randomNumber.js';

const parity = (num) =>  num % 2 === 0;

const generateQuestionAnswer = () => {
	        const questionNumber = randomNumber();
	        const questionAndAnswer = `Is ${questionNumber} an even number?\nYour answer: `;
	        const correctAnswer = parity(questionNumber) ? "yes" : "no";
return [ questionAndAnswer, correctAnswer ];
};

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => theGame(generateQuestionAnswer, rules);
