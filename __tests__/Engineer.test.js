const { expect, test } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Bob', 1234, 'bob@email.com', 'bobber72');

    expect(engineer).toEqual(expect.any(Object));
    expect(engineer.name).toEqual('Bob');
    expect(engineer.id).toEqual(1234);
    expect(engineer.email).toEqual('bob@email.com');
    expect(engineer.github).toEqual('bobber72');
    expect(engineer.role).toEqual('Engineer');
});

test('gets engineer name', () => {
    const engineer = new Engineer('Bob', 1234, 'bob@email.com', 'bobber72');

    expect(engineer.name).toEqual('Bob');
    expect(engineer.getName()).toBe(engineer.name);
});

test('gets engineer id', () => {
    const engineer = new Engineer('Bob', 1234, 'bob@email.com', 'bobber72');

    expect(engineer.id).toEqual(1234);
    expect(engineer.getId()).toBe(engineer.id);
});

test('gets engineer email', () => {
    const engineer = new Engineer('Bob', 1234, 'bob@email.com', 'bobber72');

    expect(engineer.email).toEqual('bob@email.com');
    expect(engineer.getEmail()).toEqual(engineer.email);
})

test('gets engineer role', () => {
    const engineer = new Engineer('Bob', 1234, 'bob@email.com', 'bobber72');

    expect(engineer.getRole()).toEqual('Engineer');
})

test('gets engineer github name', () => {
    const engineer = new Engineer('Bob', 1234, 'bob@email.com', 'bobber72');

    expect(engineer.github).toEqual('bobber72');
    expect(engineer.getGithub()).toEqual(engineer.github);
})