const Engineer = require('../lib/Engineer.js');

test ('creates Engineer object', () => {
    const engineer = new Engineer('')

    expect(engineer.role).toBe('');
    expect(engineer.name).toBe('');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('')

})

