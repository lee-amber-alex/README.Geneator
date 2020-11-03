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

let contributes = "[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)";

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
        message: "What is the Title of your project?",
        name: "title",
      },
      {
        type: "input",
        message: "What is your project Description?",
        name: "description",
      },
      {
        type: "input",
        message: "What are the steps required to Install your project?",
        name: "install",
        default: "npm install",
      },
      {
        type: "input",
        message: "What are the instructions for Usage?",
        name: "usage",
      },

      {
        type: "list",
        message: "Which Licensing did you select for your project?",
        name: "license",
        choices: [
          { name: "Apache License 2.0", value: { badge: apacheLic, name: "Apache License 2.0"} },
          { name: "GNU GPL", value: { badge: gplLic, name: "GNU GPL"} },
          { name: "GNU LGPL", value: { badge: lgpLic, name: "GNU LGPL"} },
          { name: "MIT License", value: { badge: mitLic, name: "MIT License"} },
          { name: "Mozilla Public License 2.0", value: { badge: mplLic, name: "Mozilla Public License 2.0" } },
          {
            name: "Eclipse Public License version 2.0",
            value: { badge: eplLic, name: "Eclipse Public License version 2.0" },
          },
          { name: "NA", value: { badge: null, name: null} },
        ],
      },
      {
        type: "confirm",
        message:
          "Would you like other developers to Contribute to your project?",
        name: "contributing",
        },
      
      {
        type: "input",
        message: "Did you write Tests for your application?",
        name: "tests",
        default: "npm test",
      },
    ])
    .then((response) => {
      
      console.log(response);

      const README = `
# ${response.title}

${response.license.badge}
      
     
## Description

${response.description}

## Table of Contents
 
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
 
## Installation
\`\`\`
${response.install}
\`\`\` 

## Usage
${response.usage}  

## License
This project is covered under the ${response.license.name}.
 
${response.contributing ? `## Contributing
${contributes} 
`:""}

## Tests
\`\`\`
${response.tests}
\`\`\` 

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
