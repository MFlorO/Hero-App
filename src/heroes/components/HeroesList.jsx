import { getHeroesByPublisher } from "../helpers"
import HeroeCard from "./HeroeCard";

const HeroesList = ({publisher}) => {

    const heroesbypublisher = getHeroesByPublisher(publisher)  //Me trae los heroes de ese publisher

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