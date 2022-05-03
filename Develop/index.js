// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
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
        choices: ['License1','License2','License3','License4']
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
      // TODO: Create a function to write README file
    fs.writeFileSync('readme.md', generateREADME(data))

  })
  .then(() => console.log('Your High-quality README has been successfully generated!'))
  .catch((err) => console.log(err));


// TODO: Create a function to initialize app

// Function call to initialize app




const generateREADME = (data) => {
    return `
    #${data.title}

    ##Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributions](#contributions)
    - [License](#license)
    - [Contact Info](#contact-info)

    ##Description ${data.description}
    
    ##Installation ${data.installation}

    ##Usage ${data.usage}

    ##Constributions ${data.contribution}

    ##License ${data.license}

    ##Questions
    If you have any questions feel free to reach me with the following information listed below:
    GitHub: github.com/${data.github} 
    Email: ${data.email}
    
    
    `
}


// screencastify

