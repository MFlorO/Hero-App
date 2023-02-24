import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { HeroeCard } from "../../components";
import { getHeroesById } from "../../helpers";

const Hero = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const onNavigateBack = () => navigate(-1);

  const hero = useMemo(() => getHeroesById(id), [id]); // Memorizo el valor porque en un futuro si mi app crece no va a renderizarse 
                                                      // porque cambie un valor de otro componente que afecte a este

  if (!hero) return <Navigate to="/marvel" />; //Si el id que recibe del url no existe redirecciono al usuario a otra página

  return (
    <>
      <HeroeCard {...hero} />
      <button onClick={onNavigateBack}>Regresar</button>
    </>
  );
};

export default Hero;
