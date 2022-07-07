const Intern = require('../lib/Intern.js');

test('creates Intern object', () => {
    const intern = new Intern('Steve')

    expect(intern.role).toBe('Intern')
    expect(intern.name).toBe('Steve');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('steve@example.com')
});