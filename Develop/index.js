// TODO: Include packages needed for this application
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
// const questions = [];
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your first name?',
            name: 'First Name',
        },
        {
            type: 'input',
            message: 'What is your last name?',
            name: 'Last Name',
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'Email',
        }, 
    ])
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
