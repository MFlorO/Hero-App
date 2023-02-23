import { heroes } from "../data";

export const getHeroesByPublisher = (publisher) => {
    const validPublisher = ['DC Comics', 'Marvel Comics'];

    if( !validPublisher.includes(publisher) ){
        throw new Error(`Is not a valid Publisher`)
    };

    return heroes.filter( heroes => heroes.publisher === publisher); 
}
