const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Bob', 1234, 'bob@email.com');

    expect(employee.name).toBe('Bob');
    expect(employee.id).toEqual(expect.any(Number))
    expect(employee.email).toEqual('bob@email.com')
});

test('gets employees name', () => {
    const employee = new Employee('Bob', 1234, 'bob@email.com');

    expect(employee.getName()).toEqual(employee.name);
})