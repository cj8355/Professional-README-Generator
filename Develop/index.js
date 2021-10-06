// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        message: "What's the project title?",
        name:'title',
        validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
    },
    {
        type: 'input',
        message: "Provide a short description explaining the what, why, and how of your project.",
        name:'description',
        validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
    },
    {
        type: 'input',
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
        name:'installation',
        validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
    },
    {
        type: 'input',
        message: "Provide instructions and examples for use. Include screenshots as needed.",
        name:'usage',
        validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
    },
    {
        type: 'input',
        message: "If you created an application or package and would like other developers to contribute, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.",
        name:'contributing',
        validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
    },
    {
        type: 'list',
        message: "What license did you use?",
        name:'license',
        choices:['The MIT License', 'The GPL License', 'Apache license', 'GNU license', 'N/A'],
        validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
    },
    
    {
        type: 'input',
        message: "Provide an email address.",
        name:'email',
        validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
    },
    {
        type: 'input',
        message: "Provide a Github username.",
        name:'git',
        validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
    },
    {
        type: 'input',
        message: "What command should be run to run tests?",
        name:'tests',
        validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
    },
    
];

function generateMD(data) {

return `# ${data.title}

Link:

## Description
${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#contributing)
- [License](#license)
- [Tests](#tests)
- [Questions](#git)

## Installation
The following necessary dependencies must be installed to run the
application properly: ${data.installation}

## Usage
${data.usage}

## Credits
${data.contributing}

## License
This project is licensed under the ${data.license}.

## Tests
The following is needed to run the test: ${data.tests}

## Questions
If you have any questions about the repo, open an issue or contact ${data.git}
directly at: ${data.email}`;
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

fs.writeFile(fileName, data, function(err) {
console.log(fileName)
console.log(data)
    if(err) {
        return console.log(err)
    } else {
    console.log('Your README has been generated');
}
})
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md", generateMD(data));
        console.log(data)
    })
}

// Function call to initialize app
init();
