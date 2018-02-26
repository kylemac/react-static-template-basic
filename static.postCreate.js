// this file is run after a new react-static project is created with this tpl
import inquirer from "inquirer";

export default async => {
  const questions = [
    {
      type: "input",
      name: "first_name",
      message: "What's your first name?"
    }
  ];
  inquirer.prompt(questions).then(answers => {
    console.log("i have received your responses", answers);
  });
};
