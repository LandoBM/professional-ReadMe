// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const { default: test } = require('node:test');
const generateMarkdown = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [];
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of the project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'How would you describe the project?',
            name: 'Description',
        },
        {
            type: 'input',
            message: 'How do I install the project?',
            name: 'install',
        }, 
        {
            type: 'input',
            message: 'How to use this project?',
            name: 'usageinfo',
        }, 
        {
            type: 'input',
            message: 'Who have contributed to this project?',
            name: 'contribution',
        }, 
        {
            type: 'list',
            list: 'Which license was used?',
            name: 'License',
            choices:['N/A','MIT License', 'GPL License', 'Apache License', 'GNU License']
        }, 
        {
            type: 'input',
            message: 'GitHub Username',
            name: 'githubuser',
        }, 
        {
            type: 'input',
            message: 'E-mail',
            name: 'email',
        }, 
    ]
).then(({title, description, install, usageinfo, contribution, license, test, githubuser, email})=> {
    // Format for ReadME
    const model = `# ${title}

    * [Description](#description)
    * [Installation](#install)
    * [Usage](#usageinfo)
    * [Contribution](#contribution)
    * [License](#license)
    * [Test](#test)
    * [Questions](#questions)
    # Description
    ${description}
    ## Installation
    ${install}
    ## Usage
    ${usageinfo}
    ## Contribution
    ${contribution}
    ## License
    ${license}
    ## Test
    ${test}

    ## Questions
    * Github :${githubuser}
    * E-Mail :${email}`

    writeToFile(title, model)
})
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile(`./${fileName.toLowerCase().split(' ').join('').md}`,data, (error)=>{
   if(error){
    console.log(error)
   } else {
    console.log(`Your ReadME is complete!`)
   }
})
}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
