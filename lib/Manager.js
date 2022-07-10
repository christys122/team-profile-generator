const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, officeNumber, email, id, title) {
        super(name);
        this.id = id;
        this.title = title;
        this.email = email;
    // //    this.role = role;
        this.officeNumber = officeNumber;
        console.log(officeNumber);
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

