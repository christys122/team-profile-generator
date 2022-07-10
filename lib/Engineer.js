const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, github, email, id, title) {
        super(name);
        this.id = id;
        this.title = title;
        this.email = email;
        this.github = github;
}

getRole(index) {
    const employee = this.getRole.splice(index, i + 1)

    switch (employee.role) {
        case 'Engineer':
            this.role = role.value;
    }
    if (this.employee.length) {
        return this.employee;
    }
    return false;
}

}

module.exports = Engineer;