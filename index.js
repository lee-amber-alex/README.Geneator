let inquirer = require("inquirer");
let fs = require("fs");


inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "username"
    },
    {
      type: "input",
      message: "What is your project about?",
      name: "description"
    },
    {
      type: "input",
      message: "How is your project installed?",
      name: "install"
    }
  ])
  .then(function(response) {

    const readMEResponse = JSON.stringify(response);

fs.writeFile("README.md",readMEResponse, error =>{
  if(error){
    console.log(error);
  }

} )
    let answers = `
    
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
    
    
    `



  });
