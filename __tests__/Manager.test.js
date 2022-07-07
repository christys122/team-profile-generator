const Manager = require('../lib/Manager.js');

test('creates Manager object', () => {
    const manager = new Manager('Nick')

    expect(manager.role).toBe('Manager');
    expect(manager.name).toBe('Nick');
    expect(manager.id).toEqual(1);
    expect(manager.email).toBe('nick@example.com')
});

    
