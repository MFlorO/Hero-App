import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../auth/context"

const PrivateRoutes = ({children}) => {

  const { logged } = useContext(AuthContext)

  const { pathname, search} = useLocation()

  const lastPath = pathname + search; //Recupero la ultima ruta

  localStorage.setItem('lastpath', lastPath) //Guardo la ultima ruta en el localstorage
  
  return (logged) ? children : <Navigate to="login" />
}

export default PrivateRoutes;