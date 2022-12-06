
import heroes from "../data/heroes";

exports.__esModule=true;
exports.getHeroeById=void 0;
const getHeroeById= id => heroes.find(heroe =>heroe.id ===id);
exports.getHeroeById=getHeroeById;

