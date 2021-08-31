import theGame from '../secondary/theGame.js';
import randomNumber from '../secondary/randomNumber.js';

const randomOperation = () => {
	const operators = ['+', '-', '*'];
	return operators[randomNumber(0, operators.length - 1)];
};

const calculate = (number1, number2, operator) => {
	let result = 0;
	if(operator === "+") {
		result = number1 + number2;
	}
	else if(operator === "-") {
		result = number1 - number2;
	}
	else if(operator === "*") {
		result = number1 * number2;
	}
	return result;
};

const generateQuestionAnswer = () => {
	const questionNumber1 = randomNumber();
	const questionNumber2 = randomNumber();
        const questionOperator = randomOperation();
	const questionAndAnswer = `Question: ${questionNumber1} ${questionOperator} ${questionNumber2}\nYour answer: `;
        const correctAnswer = String(calculate(questionNumber1, questionNumber2, questionOperator));
	return [questionAndAnswer, correctAnswer];
};

const mainQuestion = "What is the result of the expression?";

export default () => theGame(generateQuestionAnswer, mainQuestion);
