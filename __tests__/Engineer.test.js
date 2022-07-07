const Engineer = require('../lib/Engineer.js');

test ('creates Engineer object', () => {
    const engineer = new Engineer('Sally')

    expect(engineer.role).toBe('Engineer');
    expect(engineer.name).toBe('Sally');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('sally@example.com')

})

