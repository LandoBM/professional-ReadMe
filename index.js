// Inseerted Packages for the use of the application using require.
// To install use npm init, npm *package name, this will install the package to Node
const inquirer = require('inquirer')
const fs = require('fs');
const { default: test } = require('node:test');
const generateMarkdown = require('./utils/generateMarkdown');
const { userInfo } = require('os');

// Array of questions to ask the user for their input. 
// Created using npm template including: type, message, name, and validate.
// I also included if statements to ensure there is input for each question asked to the user. 
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
        name: 'installation',
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
        message: 'What was used to create this project?',
        name: 'usage',
        validate: usageInfo => {
            if(usageInfo) {
            return true
            }else {
            console.log('Enter items that helped create this project'); 
            return false}
        }
    }, 
    {
        type: 'input',
        message: 'Who have contributed to this project?',
        name: 'contributors',
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
        choices:['N/A','MIT License', 'Mozilla License', 'Apache License','GNU License', 'Creative Commons Zero License'],
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

// Function created to write to new REAME file based on the questions asked and the user input/answers.
// To ensure README file is being created properly, included an IF statement that will prompt if error exist in the creation of the README
function writeToFile(fileName, data){
    return fs.writeFile(`./${fileName.toLowerCase().split(' ')}`,data,(err)=>{
        if(err){
            console.log("You've encountered an Error")
        } else {
            console.log("Your README is being created...")
        }
    })
}

// Function using inquirer.promt and calling my array for questions and the responses and write to file into the new README file labeled NewRead
function init() {
    inquirer.prompt(questions)
        .then((response) => {
            console.log(response)
        writeToFile("NewREAD.md", generateMarkdown({ ...response}))
        })
}

// To call file 
init();
