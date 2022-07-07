const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

class Team {
    constructor() {
        this.currentEmployee = [];  
    }
}
inquirer
.prompt({
    type: 'text',
    name: 'name',
    message: 'What is the Managers Name?'
})
.then(({ name }) => {
    this.employee = new Employee(name);
});

