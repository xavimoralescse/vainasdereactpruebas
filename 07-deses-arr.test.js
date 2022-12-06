//import { retornaArreglo } from "./07-deses-arr";
const _desesArr = require("./07-deses-arr");

describe('pruebas en 07-deses-arr', ()=>
{

test('debe de retornar un string y un número',
()=>
{

    const [letters, numbers]= _desesArr.retornaArreglo();
    expect (letters).toBe('ABC');
    expect (numbers).toBe(123);
   expect(typeof letters).toBe('string');
    expect(typeof numbers).toBe('number');
    expect(letters).toEqual (expect.any(String));
  

});

});