const { expect, test } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Bob', 1234, 'bob@email.com', 123);

    expect(manager).toEqual(expect.any(Object));
    expect(manager.name).toEqual('Bob');
    expect(manager.id).toEqual(1234);
    expect(manager.email).toEqual('bob@email.com');
    expect(manager.office).toEqual(123);
    expect(manager.role).toEqual('Manager');
});

test('gets manager name', () => {
    const manager = new Manager('Bob', 1234, 'bob@email.com', 123);

    expect(manager.getName()).toBe(manager.name);
});

test('gets manager id', () => {
    const manager = new Manager('Bob', 1234, 'bob@email.com', 123);

    expect(manager.getId()).toBe(manager.id);
});

test('gets manager email', () => {
    const manager = new Manager('Bob', 1234, 'bob@email.com', 123);

    expect(manager.getEmail()).toEqual(manager.email);
})

test('gets manager role', () => {
    const manager = new Manager('Bob', 1234, 'bob@email.com', 123);

    expect(manager.getRole()).toEqual('Manager');
})

test('gets manager office number', () => {
    const manager = new Manager('Bob', 1234, 'bob@email.com', 123);

    expect(manager.getOfficeNumber()).toEqual(manager.office);
})