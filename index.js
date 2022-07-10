const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateHTML = require('./src/teamHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');

const employees = [];


const startApp = () => {

     return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the Managers Name?',
                validate: nameInput => {
                    if (nameInput) {
                        return true
                    } else {
                        console.log('Enter the Managers name');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: 'Enter the Employee Id'
                //validate
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter the e-mail address'
                //validate
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'Enter the office phone number for the Manager '

            },
        ])
        .then(data => {
            const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
            employees.push(manager);
            promptEmployee();
            
        })
    }

const promptEmployee = () => {
    return inquirer
        .prompt([
            {
                type: 'list',
                message: 'Enter another employee?',
                name: 'action',
                choices: ['Engineer', 'Intern', 'End task']
            }])
        .then(option => {
            switch (option.action) {
                case 'Engineer':
                    promptEngineer();
                    break;
                case 'Intern':
                    promptIntern();
                    break;
                case 'End Task':
                    saveData();
                    break;
            }
        });
};
const promptEngineer = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                Message: 'Enter Engineers Name',
            },
            {
                type: 'input',
                name: 'id',
                message: 'Enter the employee id'
                //validate
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter the e-mail address'
                //validate
            },
            {
                type: 'input',
                name: 'github',
                message: 'Enter the Git Hub username'
            }

]).then(data => {
    const engineer = new Engineer(data.name, data.id, data.email, data.github);
    employees.push(engineer);
    promptEmployee();
})
};
const promptIntern = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            Message: 'Enter Interns Name',

            type: 'input',
            name: 'id',
            message: 'Enter the employee id'
            //validate
        },
            {
                type: 'input',
                name: 'email',
                message: 'Enter the e-mail address'
                //validate
            },
            {
                type: 'input',
                name: 'school',
                message: 'Enter the school name'

            }
            
        
    ]).then(data => {
        const intern = new Intern(data.name, data.id, data.email, data.school);
        employees.push(intern);
        promptEmployee();
    })

};
   const saveData = () => {
        const pageData = generateHTML(employees);
        fs.writefile('./index.html', pageData)
            console.log(employees);

   };
   
         startApp() 