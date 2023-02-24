import { Link, useLocation  } from "react-router-dom";


const HeroeCard = ({id, superhero, publisher, alter_ego, first_appearance, characters }) => {
  
  const heroeImageUrl = `/assets/heroes/${id}.jpg`;

  let {pathname} = useLocation(); //Da el path actual

  return (
    <div className="col">
        <img src={heroeImageUrl} alt={superhero} />
        <h6>{superhero}</h6>
        <p>Publisher: {publisher}</p>
        <p>Alter-ego: {alter_ego}</p>
        { (alter_ego !== characters) && <p>Characters: {characters}</p>}
        <p>first_appearance: {first_appearance}</p>
        

        {/* TENGO QUE MEJORAR ESTO PORQUE REPITE CODIGO */}
        {(pathname === '/marvel') && <Link to={`/hero/${id}`}>Mas..</Link>}
        {(pathname === '/dc') && <Link to={`/hero/${id}`}>Mas..</Link>}
        {(pathname === '/search') && <Link to={`/hero/${id}`}>Mas..</Link>}
    </div>
  );
};

export default HeroeCard;
