

// Render License Badge returns the selected License badge to the readme
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = ``
  if (license === 'MIT License') {
    badge = `![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)`
  } else if (license === 'Modzilla License') {
    badge = `![License: Modzilla](https://img.shields.io/badge/License-Modzilla-orange.svg)`
  } else if (license === 'Apache License') {
    badge = `![License: Apache](https://img.shields.io/badge/License-Apache-blueviolet.svg)`
  } else if (license === 'GNU'){ 
    badge = `![License: GNU](https://img.shields.io/badge/License-GNU-yellowgreen.svg)`
  } else if(license === 'Creative Commons Zero'){
    badge =`![License: Creative Commons Zero](https://img.shields.io/badge/License-CreativeCommonsZero-lightgrey.svg)`
  }else {
    badge = ``
  }
  return badge
}
// Render License Link function return the selected licenses and creates a link in the Table of content
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none') {
    return `\n* [License](#license)\n`
  }
  return ''
}

// Render License Section function returns the section in the readme that includes 
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `## License
    Licensed using ${license}.`
  }
  return ''
}

// Generates and formats the data from the users input into the respective format
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
