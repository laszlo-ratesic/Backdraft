const { expect, test } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Bob', 1234, 'bob@email.com', 'bobber72');

    expect(engineer.name).toBe('Bob');
    expect(engineer.id).toEqual(1234);
    expect(engineer.email).toBe('bob@email.com');
    expect(engineer.github).toBe('bobber72');
});

test('gets engineer github username', () => {
    const engineer = new Engineer('Bob', 1234, 'bob@email.com', 'bobber72');

    expect(engineer.getGithub()).toBe(engineer.github);
})

test('gets engineer role', () => {
    const engineer = new Engineer('Bob', 1234, 'bob@email.com', 'bobber72');

    expect(engineer.getRole()).toBe('Engineer');
})