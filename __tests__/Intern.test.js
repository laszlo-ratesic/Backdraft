const { expect, test } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Bob', 1234, 'bob@email.com', 'Yale');

    expect(intern).toEqual(expect.any(Object));
    expect(intern.name).toEqual('Bob');
    expect(intern.id).toEqual(1234);
    expect(intern.email).toEqual('bob@email.com');
    expect(intern.school).toEqual('Yale');
    expect(intern.role).toEqual('Intern');
});

test('gets intern name', () => {
    const intern = new Intern('Bob', 1234, 'bob@email.com', 'Yale');

    expect(intern.name).toEqual('Bob');
    expect(intern.getName()).toBe(intern.name);
});

test('gets intern id', () => {
    const intern = new Intern('Bob', 1234, 'bob@email.com', 'Yale');

    expect(intern.id).toEqual(1234);
    expect(intern.getId()).toBe(intern.id);
});

test('gets intern email', () => {
    const intern = new Intern('Bob', 1234, 'bob@email.com', 'Yale');

    expect(intern.email).toEqual('bob@email.com');
    expect(intern.getEmail()).toEqual(intern.email);
})

test('gets intern role', () => {
    const intern = new Intern('Bob', 1234, 'bob@email.com', 'Yale');

    expect(intern.getRole()).toEqual('Intern');
})

test('gets intern school name', () => {
    const intern = new Intern('Bob', 1234, 'bob@email.com', 'Yale');

    expect(intern.school).toEqual('Yale');
    expect(intern.getSchool()).toEqual(intern.school);
})