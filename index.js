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
  inquirer
    .prompt([
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
    ])

    .then(function ({name, role, id, email}) {
      let roleInfo = "";
      if (role === "Engineer") {
        roleInfo = "Github Username";
      } else if (role === "Intern") {
        roleInfo = "School Name";
      } else {
        roleInfo = "Office Number";
      }

      inquirer
        .prompt([
          {
            message: `Enter team member's ${roleInfo}`,
            name: "roleInfo",
          },
          {
            type: "list",
            name: "extraMembers",
            message: "Would you like to add more members to the team?",
            choices: ["yes", "no"],
          },
        ])

        .then(function ({roleInfo, extraMembers}) {
          let newMember;
          if (role === "Engineer") {
            newMember = new Engineer(name, id, email, roleInfo);
          } else if (role === "Intern") {
            newMember = new internal(name, id, email, roleInfo);
          } else {
            newMember = new Manager(name, id, email, roleInfo);
          }
          employees.push(newMember);
          addHtml(newMember).then(function () {
            if (extraMembers === "yes") {
              getMemberInfo();
            } else {
              finishHtml;
            }
          });
        });
    });
}
