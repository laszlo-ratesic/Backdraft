const Team = require('../lib/Team');

test('creates a team object', () => {
    const team = new Team();

    expect(team).toHaveProperty('manager');
    expect(team).toHaveProperty('employeeCount');
    expect(team).toHaveProperty('engineers');
    expect(team).toHaveProperty('interns');
    expect(team).toHaveProperty('employees');

    expect(team.manager).toStrictEqual({});
    expect(team.employeeCount).toEqual(expect.any(Number));
    expect(team.engineers).toEqual([]);
    expect(team.interns).toEqual([]);
    expect(team.employees).toEqual(expect.any(Array));
});

