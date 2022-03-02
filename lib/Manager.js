const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.office = officeNumber;
        this.role = 'Manager';
    }

    getOfficeNumber() {
        return this.office;
    }
}

module.exports = Manager;