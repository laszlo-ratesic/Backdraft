const { expect, test } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Bob', 1234, 'bob@email.com');

    expect(employee).toEqual(expect.any(Object));

    expect(employee).toHaveProperty('name');
    expect(employee).toHaveProperty('id');
    expect(employee).toHaveProperty('email');
    expect(employee).toHaveProperty('role');
});

test('gets employees name', () => {
    const employee = new Employee('Bob', 1234, 'bob@email.com');

    expect(employee.name).toEqual('Bob');
    expect(employee.getName()).toEqual(employee.name);
})

test('gets employee id', () => {
    const employee = new Employee('Bob', 1234, 'bob@email.com');

    expect(employee.id).toEqual(1234);
    expect(employee.getId()).toEqual(employee.id);
})

test('gets employee email', () => {
    const employee = new Employee('Bob', 1234, 'bob@email.com');

    expect(employee.email).toEqual('bob@email.com');
    expect(employee.getEmail()).toEqual(employee.email);
})

test('gets employee role', () => {
    const employee = new Employee('Bob', 1234, 'bob@email.com');

    expect(employee.getRole()).toEqual('Employee');
})