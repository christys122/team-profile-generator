const Manager = require('./lib/Manager.js')

test('creates Manager role')
    const manager = new Manager('Nick')

    expect(manager.name).toBe('Nick');
    expect(manager.id).toEqual(1);
    expect(manager.email).toBe('nick@example.com')
