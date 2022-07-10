
const team = require('../index');


//create manager part of html 
const generateTeam = (team) => {
  const html = []
  const generateManager = manager => {

    let managerHTML = `
            <div class="card" style="width: 18rem;">
        <div class="card-header">
          <h1> ${manager.name}</h1> </br>
          <p>Manager</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${manager.id}</li>
          <li class="list-group-item">Email:<span> <span id="email"><a href="mail:${manager.email}">${manager.email}</a></span></span></li>
          <li class="list-group-item">Office number: ${manager.officeNumber}</li>
        </ul>
      </div>
            
            `;
            
    html.push(managerHTML)
  }

  //create rest of html using manager and intern
  const generateEngineer = engineer => {
    console.log(engineer);
    let engineerHTML = `
            <div class="card" style="width: 18rem;">
        <div class="card-header">
          <h1>${engineer.name}</h1> </br>
          <p>Engineer</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${engineer.id}</li>
          <li class="list-group-item">Email:<span>id="email"><a href="mail:${engineer.email}">${engineer.email}</a></span></span></li>
          <li class="list-group-item">Git Hub: ${engineer.github}</li>
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
          <h1>${intern.name}</h1> </br>
          <p>Intern</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${intern.id}</li>
          <li class="list-group-item">Email: <a href="mail:${intern.email}">${intern.email}</a></span></li>
          <li class="list-group-item">School: ${intern.school}</li>
        </ul>
     </div>
            `;
    html.push(internHTML)
  }

  // For loop to add employees 
  const addTeam = function () {
    
    generateManager(team.manager);
    for (const eng of team.engineers)
      generateEngineer(eng);
    for (const int of team.interns)
      generateIntern(int);

    return html.join('');
  }
  
addTeam()
}


module.exports = team => {
  //sets up html
  
  return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
              <title>Team Generator</title>
        </head>
        <body>
        <header class="h1 pb-2 mb-4 text-danger border-bottom border-danger">My Team</header>
        <main class="d-flex flex-row mb-3 justify-content-around">
        ${generateTeam(team)}
        
        </main>
        </body>
        </html>
        `;
}


