const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');

const team = [];


//     this.employees = [];
//     this.currentEmployee;



const startApp = () => {

    //  this.employees.push(new Employee('Manager', 'office number'));
    //  this.employees.push(new Employee('Engineer', 'git hub'));
    //  this.employees.push(new Employee('Intern', 'school'));

    //  this.currentEmployee = this.employees[0];

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
            team.push(manager);
            promptEmployee();
            

        })
}

const promptEmployee = () => {
    return inquirer
        .prompt([
            {
               // if (this.employee) {
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
                default:
                    runHTML();
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
    team.push(engineer);
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
        team.push(intern);
        promptEmployee();
    })
};

            
(pageData => {
    const runHTML = generateHTML(pageData);
    fswritefile('./index.html', runHTML, err => {
        if (err) throw new Error(err);
        return;
    })
    console.log('success');
});

startApp()

