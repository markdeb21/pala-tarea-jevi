const holaMundo = require('../src/app');

test('Debería retornar "Hola Mundo"', () => {
    expect(holaMundo()).toBe("Hola Mundo");
});