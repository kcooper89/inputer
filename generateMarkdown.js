function generateMarkdown(data) {
  return `
# ${data.title}

## Description 
${data.description}

# Table of Contents


## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Test 
${data.test}

## Github Username
${data.githubUsername}

## Github Email
${data.githubEmail}

## Licensing
[![GitHub license](https://img.shields.io/badge/license-${data.licenseType}-blue.svg)]
`;
}
//Exporting a function outside of a file
module.exports = generateMarkdown;
