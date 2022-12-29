// const fs = require('fs')
// const inquirer = require('inquirer')
// const index = require('../index.js')

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
    return ''
  }
  return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none') {
    return `\n* [license](#license)\n`
  }
  return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `##License`
  }
  return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Table of Contents
  * [Description](#description)
  * [Installation](#install)
  * [Usage](#usageinfo)
  * [Contribution](#contribution)
  * [License](#license)
  * [Test](#test)
  * [Questions](#questions)
  ${renderLicenseLink(data.license)}
    
  # Description
  ${data.description}
  ## Installation
  ${data.install}
  ## Usage
  ${data.usageinfo}
  ## Contributors
  ${data.contribution}
  ## License
  ${data.license}
  ## Test
  ${data.test}

  ## Questions
  * Github : [${data.githubuser}](https://github.com/${data.githubuser})
  * E-Mail :${data.email}

  ${renderLicenseSection(data.license)}

  // writeToFile(title, model)
  `;
}

module.exports = generateMarkdown;
