import readlineSync from 'readline-sync';

const getUserName = () => readlineSync.question("May I have your name? ");
const numberOfRound = 3;
export default (generateQuestionAnswer, rules) => {
	  console.log('Welcome to the Brain Games!');
	  const userName = getUserName();
	  console.log(`Hello, ${userName}!`);
	  console.log(rules);
	  let counter = 0;
	  while (counter < numberOfRound) {
		    const [question, correctAnswer] = generateQuestionAnswer();
		    const userAnswer = readlineSync.question(question);
		        if (userAnswer === correctAnswer) {
				      counter += 1;
				      console.log('Correct!');
				      }
		        else {
				      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
				      console.log(`Let's try again, ${userName}!`);
				      return;
				      }
		       
}
console.log(`Congratulations, ${userName}!`);
};
