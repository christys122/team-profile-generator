const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, title, officeNumber) {
        super(name);
        this.title = title;
        this.officeNumber = officeNumber;
}

getRole(index) {
    const employee = this.getRole.splice(index, 1)

    switch (employee.role) {
        case 'Manager':
            this.role = role.value;
    }
    if (this.employee.length) {
        return this.employee;

    }
    return false;
}
      
        }
    module.exports = Manager;

