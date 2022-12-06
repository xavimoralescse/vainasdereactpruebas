
const _templateString=require("../base-pruebas/02-template-string");

describe('Pruebas en 02-template-string', () =>
{
test('getSaludo debe de retornar "EMELEC CAMPEON 2013"', () =>
{

    const nombre ='EMELEC';
    const message=(0, _templateString.getSaludo)(nombre);
    expect(message).toBe(`Hola${nombre}`)
});

}




);