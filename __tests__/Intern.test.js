const { expect, test } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Bob', 1234, 'bob@email.com', 'Yale');

    expect(intern.name).toBe('Bob');
    expect(intern.id).toEqual(1234);
    expect(intern.email).toBe('bob@email.com');
    expect(intern.school).toBe('Yale');
});

test('gets intern school', () => {
    const intern = new Intern('Bob', 1234, 'bob@email.com', 'Yale');

    expect(intern.getSchool()).toBe('Yale');
});

test('gets intern role', () => {
    const intern = new Intern('Bob', 1234, 'bob@email.com', 'Yale');

    expect(intern.getRole()).toBe('Intern');
})