const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt ([
        {
            type: 'prompt',
            message: 'What is the name of your project?',
            name: 'projectName'
        },
        {
            type: 'editor',
            message: 'Enter a brief description of your app.',
            name: 'description'
        },
        {
            type: 'prompt',
            message: 'What are the steps to installing your app?',
            name: 'install'
        },
        {
            type: 'prompt',
            message: 'What are the usage instructions for your app?',
            name: 'usage'
        },
        {
            type: 'prompt',
            message: 'What are your guidelines for contributing?',
            name: 'contributing'
        },
        {
            type: 'prompt',
            message: 'Add any tests here.',
            name: 'tests'
        },
        {
            type: 'list',
            message: 'What license do you have for this app?',
            choices: ['MIT', 'Apache', 'ISC', 'BSD3'],
            name: 'license'
        },
        {
            type: 'prompt',
            message: 'What is your email address?',
            name: 'email'
        },
        {
            type: 'prompt',
            message: 'What is your github url?',
            name: 'github'
        }
    ])

    .then((data) => {
        const info = data;
        fs.writeFile('readMe.md', 
        `# ${info.projectName}

![Static Badge](https://img.shields.io/badge/License-${info.license}-blue?style=plastic)
        
# Description
        
    ${info.description}
        
# Table of contents
        
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
        
# Installation
        
    ${info.install}
        
# Usage
        
    ${info.usage}
        
# Contributing
        
    ${info.contributing}
        
# Tests
        
    ${info.tests}
        
# Questions
        
    If you would like to reach me, my email is ${info.email}.  If you would like to see more of my work, here is my [github](${info.github}).`, (err) => {
        err ? console.log(err) : console.log('readMe.md file created!');
    })
})