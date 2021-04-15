const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

const newTeamMembers = [];

function init() {
  startHtml();
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

    .then(function ({ name, role, id, email }) {
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

        .then(function ({ roleInfo, extraMembers }) {
          let newMember;
          if (role === "Engineer") {
            newMember = new Engineer(name, id, email, roleInfo);
          } else if (role === "Intern") {
            newMember = new Intern(name, id, email, roleInfo);
          } else {
            newMember = new Manager(name, id, email, roleInfo);
          }
          newTeamMembers.push(newMember);
          addHtml(newMember).then(function () {
            if (extraMembers === "yes") {
              getMemberInfo();
            } else {
              finishHtml();
            }
          });
        });
    });
}

function startHtml() {
  const html = `<!DOCTYPE html>
    <html lang = "en"
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
        <title>Team Profile Generator</title>
        </head>
        <body>
        <nav class ="navbar navbar-dark bg-dark mb-5">
        <span class="navbar-brand mb-0 h1 w-100 text-center">Team Member Profile</span>
        </nav>
        <div class = "container">
        <div class  = "row">`;

  fs.writeFile("./output/team.html", html, function (err) {
    if (err) {
      console.log(err);
    }
  });
  console.log("start");
}

function addHtml(member) {
  return new Promise(function (resolve, reject) {
    const name = member.getName();
    const id = member.getId();
    const email = member.getEmail();
    const role = member.getRole();
    let data = "";

    if (role === "Engineer") {
      const gitHub = member.getGithub();

      data = `
      <div class = 'col-lg-4 col-md-12 mb-4'>
            <div class = 'card mx-auto mb-3 text-center bg-danger' style = 'width 18rem'>
            <h5 class = 'card-header'>${name}<br /> <br /><i class="fas fa-glasses"></i> Engineer</h5>
            <ul class = 'list-group list-group-flush'>
                <li class = 'list-group-item'>ID: ${id}</li>
                <li class = 'list-group-item'>Email: ${email}</li>
                <li class = 'list-group-item'>Github: ${gitHub}</li>
            </ul>
            </div>
            </div>`;
    } else if (role === "Intern") {
      const school = member.getSchool();
      data = `
      <div class = 'col-lg-4 col-md-12 mb-4'>
            <div class = 'card mx-auto mb-3 text-center bg-danger' style = 'width 18rem'>
            <h5 class = 'card-header'>${name}<br /> <br /><i class="fas fa-user-graduate"></i> Intern</h5>
            <ul class = 'list-group list-group-flush'>
                <li class = 'list-group-item'>ID: ${id}</li>
                <li class = 'list-group-item'>Email: ${email}</li>
                <li class = 'list-group-item'>School: ${school}</li>
            </ul>
            </div>
            </div>`;
    } else {
      const officeNumber = member.getOfficeNumber();
      data = `
      <div class = 'col-lg-4 col-md-12 mb-4'>
            <div class = 'card mx-auto mb-3 text-center bg-danger' style = 'width 18rem'>
            <h5 class = 'card-header'>${name}<br /> <br /><i class="fas fa-mug-hot"></i> Manager</h5>
            <ul class = 'list-group list-group-flush'>
                <li class = 'list-group-item'>ID: ${id}</li>
                <li class = 'list-group-item'>Email: ${email}</li>
                <li class = 'list-group-item'>Office Number: ${officeNumber}</li>
            </ul>
            </div>
            </div>`;
    }

    console.log("New Team Members Added");
    fs.appendFile("./output/team.html", data, function (err) {
      if (err) {
        return reject(err);
      }
      return resolve();
    });
  });
}

function finishHtml() {
  const html = `
    </div>
    </div>
    
    </body>
    </html>`;

  fs.appendFile("./output/team.html", html, function (err) {
    if (err) {
      console.log(err);
    }
  });
  console.log("Thank You!");
}

init();
