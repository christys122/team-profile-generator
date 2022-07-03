const Employee = require('../lib/Employee.js');

test ('creates employee object', () => {
    const employee = new Employee('Nick');

    expect(employee.name).toBe('Nick');
   // expect(employee.id).toEqual(expect.any(Number));
});