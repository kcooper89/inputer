const inquirer = require ("inquirer");
const fs = require ('fs');

//requiring generatemarkdown
const generateMarkdown=require("./generateMarkdown")
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter your Project Title:', 
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter project description:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command is used to install the project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the project?',
    },
    {
        type: 'list',
        choices: ['MIT', 'ISC', 'Apache', 'None'],
        name: 'licenseType',
        message: 'Please enter the license type:',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What does the user need to know about contributing to this project?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should we use to run test?', 
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your github Username?',

    },
    {
        type: 'input',
        name: 'githubEmail',
        message: 'What is your github Email?',
    },

];

function writeToFile(fileName, data) {
}

function init() {
    inquirer.prompt(questions).then(function(answers){
        fs.writeFile('./readme.md', generateMarkdown(answers), function(err) {
            if (err) {
                console.log(err);
            }
        });
        
    })

}



//const http = require ('http');

init();
