// const Employee = require('./lib/Employee');
// const Engineer = require('./lib/Manager');
// const Manager = require('./lib/Engineer');
// const Intern = require('./lib/Intern');
const team = require('../index');
const TeamHTML = require('./teamHTML');



    const generateTeam = (team) => {
        const html = []
        const generateManager = manager => {
            console.log(manager);
            let managerHTML = `
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                ${manager.name} <br/>
                <i class="manager"></i><strong>Manager</strong></div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">Email: <span id="email"><a href="mail:${manager.email}">${manager.email}</a></span></li>
                <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
                </ul>
                </div>
            `;
            html.push(managerHTML)
        }
        const generateEngineer = engineer => {
            console.log(engineer);
            let engineerHTML = `
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                ${engineer.name} <br/>
                <i class="engineer"></i><strong>Engineer</strong></div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Email: <span id="email"><a href="mail:${engineer.email}">${engineer.email}</a></span></li>
                <li class="list-group-item">Github: ${engineer.github}</li>
                </ul>
                </div>
            `;
            html.push(engineerHTML)
        }
        const generateIntern = intern => {
            console.log(intern);
            let internHTML = `
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                ${intern.name} <br/>
                <i class="manager"></i><strong>Intern</strong></div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">Email: <span id="email"><a href="mail:${intern.email}">${intern.email}</a></span></li>
                <li class="list-group-item">School: ${intern.school}</li>
                </ul>
                </div>
            `;
            html.push(internHTML)
        }
    
        
    // For loop to add employees 
    const addTeam = function() {
        if (team.length === 0) {
            console.log("no employees");
            return;
        }
    for (let i = 0; i < team.length; i ++) {
        if(team[i].getRole() === "Manager") {
            generateManager(team[i]);
        }
        if(team[i].getRole() === "Engineer") {
            generateEngineer(team[i]);
        }
        if(team[i].getRole() === "Intern") {
            generateIntern(team[i]);
        }
    
    return html.join('');
    }
    }

addTeam()

    module.exports = team => {
        //missing?
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="style.css">
            <title>Team Profile Generator</title>
        </head>
        <body>
            <header>
            <h1> My Team </h1>
            </header>
            <main> ${generateTeam(team)} </main>
        </body>
        </html>
        `;
    }
    }
    //addTeam()
