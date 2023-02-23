import { Navigate, useParams } from 'react-router-dom'
import {HeroeCard} from '../../components';
import { getHeroesById } from '../../helpers';

const Hero = () => {

  const {id} = useParams();

  const hero = getHeroesById(id)

  if(!hero) return <Navigate to='/marvel' /> //Si el id que recibe del url no existe redirecciono al usuario a otra página

  return (
    <HeroeCard {...hero} />
  )
}

export default Hero