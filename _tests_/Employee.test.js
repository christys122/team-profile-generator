const Employee = require('../lib/Employee.js');

test ('creates a new employee object', () => {
    const employee = new Employee('Nick');

    expect(employee.name).toBe('Nick');
    expect(employee.title).toBe('Manager');
    expect(employee.email).toBe('nick@example.com');
    expect(employee.id).toEqual(expect.any(Number));
});

test('gets employee type as an object', () => {
    const employee = new Employee('Nick');
    expect(employee.getType()).toBe('type');
    //expect(employee.getType()).toBe('icon');
    
});


