const mailCheck = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/;

const inquirer = require('inquirer');
const Employee = require('./Employee');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

function Team() {
    this.manager = {};
    this.employees = [];
    this.employeeCount = 0;
    this.engineers = [];
    this.interns = [];
}

Team.prototype.createTeam = function() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
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
            name: 'id',
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
            name: 'email',
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
            name: 'office',
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
    .then(({ name, id, email, office }) => {
        const manager = new Manager(name, id, email, office);

        this.manager = manager;
        this.employees.push(manager);
        this.employeeCount++;

        this.showOptions();
    });
}

Team.prototype.showOptions = function() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'What would you like to do next?',
            choices: [
                'Add an Engineer',
                'Add an Intern',
                'Exit'
            ]
        }
    ]).then((menu) => {
        if (menu.choice === 'Add an Engineer') {
            this.addEngineer();
        }
        if (menu.choice === 'Add an Intern') {
            this.addIntern();
        }
        if (menu.choice === 'Exit') {
            this.exitProgram();
        }
    })
}

Team.prototype.addEngineer = function() {

}

Team.prototype.addIntern = function() {

}

Team.prototype.exitProgram = function() {

}

module.exports = Team;