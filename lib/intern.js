const Employee = require('./employee');


class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email);
        this.github = school;

    }
    getRole() {
        return "Intern";
    }
    getGithub() {
        return this.School;
    }
}

module.exports = Intern;