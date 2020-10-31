let inquirer = require("inquirer");
let fs = require("fs");

const userQuestions = () =>
inquirer.prompt([
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
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
      message: "What are the instructions and examples for use?",
      name: "usage",
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
      ]
    },
    {
      type: "input",
      message:
        "Would you like other developers to contribute to your project? If not, type 'NA'",
      name: "contributing",
    },
    {
      type: "input",
      message: "Did you write tests for your application?  If not, type 'NA'.",
      name: "tests",
    },
  ]).then((response) => {
    
    const README =
      `
     # Project Title
 
     ## Description
 
     ## Table of Contents
 
     * [Installation](#installation)
     * [Usage](#usage)
     * [Credits](#credits)
     * [License](#license)
 
     ## Installation
 
     ## Usage
 
     ## License
 
     ## Contributing

     ## Questions
     - [Email]()
     - [Github Page]()
 
     `;
     fs.writeFile("README.md", README, error => {
      if (error) {console.log(error);
      }
      console.log("success!");
    });
    });
    userQuestions ();
    
 
    
  

  // const readMEResponse = JSON.stringify(response);