import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../auth/context"

const PublicRouter = ({children}) => {

  const { logged } = useContext(AuthContext)

  
  return (logged) ? <Navigate to="/marvel"/> : children 
  //Si logged es true (ESTA AUTENTICADO) te envia a la pagina de login sino (NO ESTA AUTENTICADO) podes ver las demas paginas
}

export default PublicRouter;