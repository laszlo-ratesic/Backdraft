const inquirer = require("inquirer");
const mailCheck =
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/;

const Employee = require("./Employee");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

const generatePage = require('../src/template');

const createFile = require('../utils/create-file');

function Team() {
  this.manager = {};
  this.employees = [];
  this.employeeCount = 0;
  this.engineers = [];
  this.interns = [];
}

Team.prototype.createTeam = function () {
  console.log(`
 __      __       .__                                  __
/  \\    /  \\ ____ |  |   ____  ____   _____   ____   _/  |_  ____
\\   \\/\\/   // __ \\|  | _/ ___\\/  _ \\ /     \\_/ __ \\  \\   __\\/  _ \\
 \\        /\\  ___/|  |_\\  \\__(  <_> )  Y Y  \\  ___/   |  | (  <_> )
  \\__/\\  /  \\___  >____/\\___  >____/|__|_|  /\\___  >  |__|  \\____/
       \\/       \\/          \\/            \\/     \\/
__________                __       .___              _____  __
\\______   \\_____    ____ |  | __ __| _/___________ _/ ____\\/  |_
 |    |  _/\\__  \\ _/ ___\\|  |/ // __ |\\_  __ \\__  \\\\   __\\\\   __\\
 |    |   \\ / __ \\\\  \\___|    </ /_/ | |  | \\// __ \\|  |   |  |
 |______  /(____  /\\___  >__|_ \\____ | |__|  (____  /__|   |__|
        \\/      \\/     \\/     \\/    \\/            \\/
  `);
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "(Required) Please enter the employee's name:",
        default: "Bob",
        validate: (nameInput) => {
          if (nameInput && !Number(nameInput)) {
            return true;
          } else {
            console.log(`You must enter a valid name for the employee`);
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "(Required) Please enter the employee's ID number:",
        default: 1234,
        validate: (idInput) => {
          if (Number(idInput)) {
            return true;
          } else {
            console.log(`You must enter a valid employee ID`);
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "(Required) Please enter the employee's email address:",
        default: 'bob@email.com',
        validate: (emailInput) => {
          if (mailCheck.test(emailInput)) {
            return true;
          } else {
            console.log(`You must enter a valid email address`);
            return false;
          }
        },
      },
      {
        type: "input",
        name: "office",
        message: "(Required) Please enter the team manager's office number:",
        default: 123,
        validate: (response) => {
          if (response) {
            return true;
          } else {
            console.log(this.message);
            return false;
          }
        },
      },
    ])
    .then(({ name, id, email, office }) => {
      const manager = new Manager(name, id, email, office);
      this.manager = manager;
      this.employees.push(manager);
      this.employeeCount++;
      this.showOptions();
    });
};

Team.prototype.showOptions = function () {
  console.log(`
    ========================
    Total Employees: ${this.employeeCount}
    ========================
    `);
    console.table(this.employees);
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "What would you like to do next?",
        choices: ["Add an Engineer", "Add an Intern", "Exit"],
      },
    ])
    .then((menu) => {
      if (menu.choice === "Add an Engineer") {
        this.addEngineer();
      }
      if (menu.choice === "Add an Intern") {
        this.addIntern();
      }
      if (menu.choice === "Exit") {
        this.exitProgram();
      }
    });
};

Team.prototype.addEngineer = function () {
    console.log(`
    ========================
    Total Engineers: ${this.engineers.length}
    ========================
    `)
    console.table(this.engineers);
    inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "(Required) Please enter the employee's name:",
        default: "Bob",
        validate: (nameInput) => {
          if (nameInput && !Number(nameInput)) {
            return true;
          } else {
            console.log(`You must enter a valid name for the employee`);
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "(Required) Please enter the employee's ID number:",
        default: 1234,
        validate: (idInput) => {
          if (Number(idInput)) {
            return true;
          } else {
            console.log(`You must enter a valid employee ID`);
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "(Required) Please enter the employee's email address:",
        default: 'bob@email.com',
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
          type: "input",
          name: "github",
          message: "Please enter the engineer's github username",
          default: 'laszlo-ratesic'
      }
    ]).then(({ name, id, email, github }) => {
        const engineer = new Engineer(name, id, email, github);

        this.employees.push(engineer);
        this.employeeCount++;
        this.engineers.push(engineer);
        this.showOptions();
    });
};

Team.prototype.addIntern = function () {
  console.log(`
    ========================
    Total Interns: ${this.interns.length}
    ========================
    `)
    console.table(this.interns);
    inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "(Required) Please enter the employee's name:",
        default: "Bob",
        validate: (nameInput) => {
          if (nameInput && !Number(nameInput)) {
            return true;
          } else {
            console.log(`You must enter a valid name for the employee`);
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "(Required) Please enter the employee's ID number:",
        default: 1234,
        validate: (idInput) => {
          if (Number(idInput)) {
            return true;
          } else {
            console.log(`You must enter a valid employee ID`);
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "(Required) Please enter the employee's email address:",
        default: 'bob@email.com',
        validate: (emailInput) => {
          if (mailCheck.test(emailInput)) {
            return true;
          } else {
            console.log(`You must enter a valid email address`);
            return false;
          }
        },
      },
      {
          type: "input",
          name: "school",
          message: "Please enter the name of the intern's school:",
          default: 'Yale'
      }
    ]).then(({ name, id, email, school }) => {
        const intern = new Intern(name, id, email, school);

        this.employees.push(intern);
        this.employeeCount++;
        this.interns.push(intern);
        this.showOptions();
    });
};

Team.prototype.exitProgram = function () {
    createFile(generatePage(this)).then(message => {
      console.log(message.message);
    });
};

module.exports = Team;