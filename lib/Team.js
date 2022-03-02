const inquirer = require("inquirer");
const mailCheck =
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/;

const Employee = require("./Employee");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

function Team() {
  this.manager = {};
  this.employees = [];
  this.employeeCount = 0;
  this.engineers = [];
  this.interns = [];
}

Team.prototype.createTeam = function () {
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

Team.prototype.addManager = function () {};

Team.prototype.addEngineer = function () {
  inquirer.prompt([{}]);

  this.employees.push();
  this.employeeCount++;
};

Team.prototype.addIntern = function () {};

Team.prototype.exitProgram = function () {};

module.exports = Team;
