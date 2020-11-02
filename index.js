let inquirer = require("inquirer");
let fs = require("fs");
let apacheLic =
  "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
let gplLic =
  "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
let lgpLic =
  "![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
let mitLic =
  "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
let mplLic =
  "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
let eplLic =
  "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";

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
      const { license, choices } = response.license;

      console.log(response.license);
      console.log(response);

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
      // fs.writeFile("README.md", README, (error) => {
      //   if (error) {
      //     console.log(error);
      //   }
      //   console.log("success!");
      //   console.log(README);
      // });
    });
userQuestions();
