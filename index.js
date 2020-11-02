let inquirer = require("inquirer");
let fs = require("fs");

const userQuestions = () =>
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your GitHub username?",
        name: "username",
        validate: function (answer) {
          if (answer.includes(" ")) {
            return "Please provide a valid username.  Make sure username doesn't include spaces.";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        message: "What is your email?",
        name: "email",
        validate: function (answer) {
          if (answer.includes(" ")) {
            return "Please provide a valid email address.";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
      },
      {
        type: "input",
        message: "What is your project about?",
        name: "description",
      },
      {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "install",
      },
      {
        type: "input",
        message: "What are the instructions for use?",
        name: "usage",
      },
      {
        type: "confirm",
        message:
          "Would you like to include screenshots with the usage instructions?",
        name: "screenshots",
      },
      {
        type: "checkbox",
        message: "Which licensing did you select for your project?",
        name: "license",
        choices: [
          "Apache License 2.0",
          "GNU GPL",
          "GNU LGPL",
          "MIT License",
          "Mozilla Public License 2.0",
          "Common Development and Distribution License",
          "Eclipse Public License version 2.0",
          "NA",
        ],
      },
      {
        type: "confirm",
        message:
          "Would you like other developers to contribute to your project?",
        name: "contributing",
      },
      {
        type: "confirm",
        message: "Did you write tests for your application?",
        name: "tests",
      },
    ])
    .then((response) => {
      console.log(response);
      console.log(response.description);

      const README = `
     # Project Title
      ${response.title}
     ## Description
      ${response.description}
     ## Table of Contents
 
     * [Installation](#installation)
     * [Usage](#usage)
     * [Credits](#credits)
     * [License](#license)
 
     ## Installation
     ${response.install}
 
     ## Usage
 
     ## License
     ${response.license}
 
     ## Contributing

     ## Questions
     - [Email](${response.email})
     - [Github Page](https://github.com/${response.username})
 
     `;
      fs.writeFile("README.md", README, (error) => {
        if (error) {
          console.log(error);
        }
        console.log("success!");
        console.log(README);
      });
    });
userQuestions();
