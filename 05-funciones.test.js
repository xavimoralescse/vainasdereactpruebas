const { getUser, getUsuarioActivo } = require("../../base-pruebas/05-funciones");


describe('Pruebas en 05-funciones', ()=>{
test('getUser debe de retornar un objeto', ()=>
{
    const testUser = {
        uid: 'ABC123',
        username: 'El_Papi1502'
};  getUser

    const user= getUser();
    expect(testUser).toStrictEqual(user);
});

test('getUsuarioActivo debe de retornar un objeto', () =>
{
    const name ='El_Papi1502';
    const user =getUsuarioActivo(name);
    expect(user).toStrictEqual(
        {
            uid: 'ABC123',
        username: 'El_Papi1502'
        }
    )
})

});