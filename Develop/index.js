const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    { // Name
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    { // Project Title
      type: 'input',
      message: 'What is the name of your project?',
      name: 'title',
    },
    { // Description
      type: 'input',
      message: 'Give us a brief decsription of your project here: ',
      name: 'description',
    },
    { // Installation Instructions
        type: 'input',
        message: 'Give a brief description of the installation instructions for your application: ',
        name: 'installation'
    },
    {// Usage
        type: 'input',
        name: 'usage',
        message: 'Briefly explain the usage of your application: ',
    },
      {// Contribution
        type: 'input',
        name: 'contribution',
        message: 'Give a breif description on how to make contributions to this project: ',
    },
    {// License
        type: 'list',
        name: 'license',
        message: 'Which license is your application covered under?',
        choices: ['MIT','ISC','Eclipse','IBM']
    },
    {// GitHub Username
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
     {// Email
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
  ]) .then((data) => {
    fs.writeFileSync('readme.md', generateREADME(data))

  })
  .then(() => console.log('Your High-quality README has been successfully generated!'))
  .catch((err) => console.log(err));

const generateREADME = (data) => {

      
  return `# ${data.title}
 
 License Used: ${data.license}

  MIT: 
  [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
  ISC: [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
  Eclipse: [![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)
  IBM: [![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)


  ## Table of Contents
  [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributions](#contributions)
    - [License](#license)
    - [Questions](#questions)

  ## Description 
  
  ${data.description}
    
  ## Installation 
  
  ${data.installation}

  ## Usage 
  
  ${data.usage}

  ## Contributions 
  
  ${data.contribution}

  ## License 
  
  ${data.license}

  ## Questions
  If you have any questions feel free to reach me with the following information listed below:

  GitHub: github.com/${data.github} 
  
  Email: ${data.email}
    
    


    `
};


// screencastify