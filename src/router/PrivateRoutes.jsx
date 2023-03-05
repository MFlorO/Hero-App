import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../auth/context"

const PrivateRoutes = ({children}) => {

  const { logged } = useContext(AuthContext)

  
  return (logged) ? children : <Navigate to="login" />
}

export default PrivateRoutes;