const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, school, id, email, title) {
        super(name);
        this.id = id;
        this.title = title;
        this.email = email;
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

