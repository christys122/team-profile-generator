const Intern = require('../lib/Intern.js');

test('creates Intern object', () => {
    const intern = new Intern('')

    expect(intern.role).toBe('')
    expect(intern.name).toBe('');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('')
});