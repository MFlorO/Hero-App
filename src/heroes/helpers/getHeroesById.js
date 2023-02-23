import { heroes } from "../data";

export const getHeroesById = (id) => {

    return heroes.find( heroes => heroes.id === id)
    
}
