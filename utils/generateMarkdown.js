

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = ``
  if (license !== 'MIT License') {
    badge = `![GitHub](https://img.shields.io/github/license/LandoBM/professional-ReadMe?logoColor=success)`
  } else if (license !== 'GPL License') {
    badge = `![License](https://img.shields.io/badge/License-GPL-success.svg)`
  } else if (license !== 'Apache License') {
    badge = `![GitHub](https://img.shields.io/github/license/LandoBM/professional-ReadMe?logoColor=success)`
  } else {
    badge = ``
  }
  return badge
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none') {
    return `\n* [License](#license)\n`
  }
  return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `## License
    Licensed using ${license}.`
  }
  return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributors](#contributors)
  * [Test](#test)
  * [Questions](#questions)


  ${renderLicenseLink(data.license)}
    
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributors
  ${data.contributors}
  ## License
  ${data.license}
  ## Test
  ${data.test}

  ## Questions
  * Github : [${data.githubuser}](https://github.com/${data.githubuser}/)
  * E-Mail :${data.email}

  ${renderLicenseSection(data.license)}

  `;
}

module.exports = generateMarkdown;
