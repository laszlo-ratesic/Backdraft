const inquirer = require('inquirer');
const mailCheck = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/;

const promptUser = () => {
    console.log("Hello and welcome to Backdraft!");
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "(Required) Please enter the team manager's name:",
            validate: (nameInput) => {
                if (nameInput && !Number(nameInput)) {
                    return true;
                } else {
                    console.log(`You must enter a valid name for the team's project manager`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerId',
            message: "(Required) Please enter the team manager's employee ID:",
            validate: (idInput) => {
                if (Number(idInput)) {
                    return true;
                } else {
                    console.log(`You must enter a valid employee ID`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "(Required) Please enter the team manager's email address:",
            validate: (emailInput) => {
                if (mailCheck.test(emailInput)) {
                    return true;
                } else {
                    console.log(`You must enter a valid email address`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerOffice',
            message: "Please enter the team manager's office number",
            validate: (officeInput) => {
                if (officeInput) {
                    return true;
                } else {
                    console.log('Please enter an office number');
                    return false;
                }
            }
        },
    ])
}




promptUser();











// Prompt user for manager info (based on Employee class)
// then show the 'engineer, intern, or end' menu
    // if engineer, show prompts for engineer class
        // then back to menu
    // if intern, show prompts for intern class
        // then back to menu
    // if end, render html and exit program