const { expect, test } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Bob', 1234, 'Bob@email.com', 12);

    expect(manager.name).toBe('Bob');
    expect(manager.id).toEqual(1234);
    expect(manager.email).toBe('Bob@email.com');
    expect(manager.officeNumber).toEqual(12)
});

test('gets manager role', () => {
    const manager = new Manager('Bob', 1234, 'Bob@email.com', 12);

    expect(manager.getRole()).toBe('Manager');
})