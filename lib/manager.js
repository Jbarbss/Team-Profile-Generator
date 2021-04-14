const Employee = require('./employee');


class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super(name, id, email);
        this.github = officeNumber;

    }
    getRole() {
        return "Manager";
    }
    getGithub() {
        return this.officeNumber;
    }
}

module.exports = Manager;