const Employee = require('../lib/Employee.js');

test ('creates a new employee object', () => {
    const employee = new Employee('');

    expect(employee.name).toBe('');
    
    expect(employee.email).toBe('');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.getrole()).toBe(Employee);
});




