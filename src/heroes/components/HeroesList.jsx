import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers"
import HeroeCard from "./HeroeCard";

const HeroesList = ({publisher}) => {

  const heroesbypublisher = useMemo(()=> getHeroesByPublisher(publisher), [publisher]) //Me trae los heroes de ese publisher
                                                                                       // Agrego el useMemo porque si hay algun cambio en el 
                                                                                      // padre del componente no se vuelve a renderizar el
                                                                                      //HeroList salvo que cambie la variable "publisher"

  return (
    <ul>
        {heroesbypublisher.map( h => (
            <li key={h.id}>
                <HeroeCard {...h}/>
            </li>
        ))}
    </ul>
  )
}

export default HeroesList;