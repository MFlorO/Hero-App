import { useLocation, useNavigate } from "react-router-dom";
import {HeroeCard} from "../../components";
import { useForm } from "../../hooks";

import queryString from "query-string"  //Es un paquete que me maneja las queries
import { getHeroesByName } from "../../helpers";



const Search = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const {q = ""} = queryString.parse(location.search);    //Obtengo la query de mi ruta
  const heroes = getHeroesByName(q);
  
  const {searchValue, onInputChange, setFormState} = useForm({searchValue: ""})

  const searchValueTrim = searchValue.trim().length <= 1

  const onSearchSubmit = (event) =>{
    event.preventDefault()

    if(searchValueTrim) return

    navigate(`?q=${searchValue}`)

    setFormState({searchValue: ""}) //Reseteo el formulario
  }
  
  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Busca un hero"
              className="form-control"
              name="searchValue"
              autoComplete="off"
              value={searchValue}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-1" disabled={searchValueTrim}>Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>

          {heroes.length === 0 && <div className="alert alert-primary">Buscar a hero</div>}

          {q !== "" && heroes.length === 0 && <div className="alert alert-danger"><b>No hay resultados con {q}</b></div>}

          {heroes.map(h => (
             <HeroeCard key={h.id} {...h }/> 
          ))}

        </div>
      </div>
    </>
  );
};

export default Search;
