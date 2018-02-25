var inquirer = require("inquirer");
var questions = [
  {
    type: "input",
    name: "first_name",
    message: "What's your first name?"
  }
];
inquirer.prompt(questions).then(answers => {
  console.log("i have received your responses", answers);
});
