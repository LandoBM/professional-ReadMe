// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const { default: test } = require('node:test');
const generateMarkdown = require('./utils/generateMarkdown');
const { userInfo } = require('os');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of the project?',
        name: 'title',
        validate: title => {
            if(title) {
            return true
            }else {
            console.log('Enter a Title for the project'); 
            return false}
        }
    },
    {
        type: 'input',
        message: 'How would you describe the project?',
        name: 'description',
        validate: description => {
            if(description) {
            return true
            }else {
            console.log('Enter a description for the project'); 
            return false}
        }
    },
    {
        type: 'input',
        message: 'How do I install the project?',
        name: 'install',
        validate: install => {
            if(install) {
            return true
            }else {
            console.log('Enter instructions on installs'); 
            return false}
        }
    }, 
    {
        type: 'input',
        message: 'How to use this project?',
        name: 'usageinfo',
        validate: usageInfo => {
            if(usageInfo) {
            return true
            }else {
            console.log('Enter how to use the project'); 
            return false}
        }
    }, 
    {
        type: 'input',
        message: 'Who have contributed to this project?',
        name: 'contribution',
        validate: contribution => {
            if(contribution) {
            return true
            }else {
            console.log('Enter all whom contributed to the project'); 
            return false}
        }
    }, 
    {
        type: 'list',
        list: 'Which license was used?',
        name: 'license',
        choices:['N/A','MIT License', 'GPL License', 'Apache License', 'GNU License'],
        validate: license => {
            if(license) {
            return true
            }else {
            console.log('Enter a Title for the project'); 
            return false}
        }
    }, 
    {
        type: 'input',
        message: 'GitHub Username',
        name: 'githubuser',
        validate: githubuser => {
            if(githubuser) {
            return true
            }else {
            console.log('Must enter your GitHub Username'); 
            return false}
        }
    }, 
    {
        type: 'input',
        message: 'E-mail',
        name: 'email',
        validate: email => {
            if(email) {
            return true
            }else {
            console.log('Enter an E-mail to proceed'); 
            return false}
        }
    }, 
]
// TODO: Create a function to write README file

function writeToFile(fileName, data){
    return fs.writeFile(`./${fileName.toLowerCase().split(' ').md}`,data,(err)=>{
        if(err){
            console.log("You've encountered an Error")
        } else {
            console.log("Your README is being created...")
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((response) => {
            console.log(response)
        writeToFile(`./utils/READMe.md`, generateMarkdown({... response}))
        })
}

// Function call to initialize app
init();
