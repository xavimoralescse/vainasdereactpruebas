

exports.__esModule=true;
exports.getHeroeByIdAsync=void 0;
const getHeroeByIdAsync=id => {
    return new Promise((resolve,reject)=>
    
    setTimeout (() =>{ 
        const p1=getHeroeById(id);
        if(p1)
        {
            resolve(p1);
        }
        else{
            reject('No se puede encontrar el héroe');
        }},1000));
  } ;
exports.getHeroeByIdAsync=getHeroeByIdAsync;
