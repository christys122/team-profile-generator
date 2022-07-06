class Employee {
    constructor(name = '') {
    this.name = name;
    this.id = 1;
    this.email = 'nick@example.com';
    this.title = 'Manager';
    
    }

    getName() {
        return `${this.name}'s is the Manager`;
    }
    
    getId(){
        return `${this.id}`;
    }

    getEmail() {
        return `${this.email} is the email`;
    }
    getrole = function() {//returns employee?
        return Employee 
           // icon: this.icon
        
        //console.log(employee)
    }
};


 module.exports = Employee;