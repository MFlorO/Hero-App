import { useLocation, useNavigate } from "react-router-dom";
import {HeroeCard} from "../../components";
import { useForm } from "../../hooks";

import queryString from "query-string"  //Es un paquete que me maneja las queries



const Search = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const {searchValue, onInputChange} = useForm({
    searchValue: ""
  })

  const {q = ""} = queryString.parse(location.search)    //Obtengo la query de mi ruta


  const searchValueTrim = searchValue.trim().length <= 1

  const onSearchSubmit = (event) =>{
    event.preventDefault()

    if(searchValueTrim) return

    navigate(`?q=${searchValue}`)
    console.log({searchValue})
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

          <div className="alert alert-primary">Buscar a hero</div>
          {q !== "" && <div className="alert alert-danger"><b>No hay resultados con {q}</b></div>}

          {/* <HeroeCard {... }/> */}
        </div>
      </div>
    </>
  );
};

export default Search;
