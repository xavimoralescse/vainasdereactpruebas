const { getHeroeByIdAsync } = require("../../base-pruebas/09-promesas")

describe('Pruebas en 09-promesas',()=>
{

    test('getHeroesbyIdAsync debe de retornar un héroe', () => { 
const id=1;
getHeroeByIdAsync(id)
.then(hero=>
    { 
        expect(hero).toEqual(
            {
                id:1,
                name: 'Batman',
                owner: 'DC'
            }

        );
       
    } 
    );

   });
});