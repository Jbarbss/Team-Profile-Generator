const inquirer = require("inquirer");
const fs = require("fs");
const engineer = require("./lib/engineer");
const internal = require("./lib/intern");
const manager = require("./lib/manager");
const employees = require("./lib/employees");

const newTeamMembers = [];

function init() {
  getMemberInfo();
}

function getMemberInfo() {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your team member's name?",
    },
    {
      type: "list",
      name: "role",
      message: "What is your team member's role?",
      choices: ["Engineer", "Intern", "Manager"],
    },

    {
      type: "input",
      name: "email",
      message: "What is your team member's email address?",
    },

    {
      type: "input",
      name: "id",
      message: "What is your team member's ID?",
    },
  ]);
}
