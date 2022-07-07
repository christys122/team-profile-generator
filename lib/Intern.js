const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, title, school) {
        super(name);
        this.title = title;
        this.school = school;
}

getRole(index) {
    const employee = this.getRole.splice(index, i + 1)

    switch (employee.role) {
        case 'Intern':
            this.role = role.value;
    }
    if (this.employee.length) {
        return this.employee;

    }
    return false;
}
}

module.exports = Intern;

