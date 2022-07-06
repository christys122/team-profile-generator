const Employee = require('../lib/Employee.js');

test ('creates a new employee object', () => {
    const employee = new Employee('Nick');

    expect(employee.name).toBe('Nick');
    expect(employee.title).toBe('Manager');
    expect(employee.email).toBe('nick@example.com');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.getrole()).toBe('Employee');
});

// test('gets employee type as an object', () => {
//     const employee = new Employee('Nick');
//     expect(employee.getRole()).toBe('Manager');
//     //expect(employee.getType()).toBe('icon');
    
// });


