const Manager = require('../lib/Manager.js');

test('creates Manager object', () => {
    const manager = new Manager('')

    expect(manager.role).toBe('');
    expect(manager.name).toBe('');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('')
});

    
