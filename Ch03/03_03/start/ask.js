const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  "What is you name?",
  "Where do you live?",
  "What are you gonna do with nodejs?"
];

function collectAnswers(questions, done) {
  const answers = [];

  const questionsAnswered = (answer) => {
    answers.push(answer.trim());
    if (answers.length < questions.length) {
      rl.question(
        questions[answers.length],
        questionsAnswered
      );
    } else {
      return done(answers);
    }
  };
  rl.question(questions[0], questionsAnswered);
}


collectAnswers(questions, (answers) => {
  console.log("Than you for your answers!!");
  console.log(answers);
  process.exit();
});

