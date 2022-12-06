


exports.__esModule=true;
exports.getSaludo =getSaludo;
function getSaludo(name)
{
    return 'Hola'+name;
}
const name="";
console.log( `Este es un texto: ${ getSaludo(name)}`);