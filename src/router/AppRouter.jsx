import { Route, Routes } from "react-router-dom"
import Login from "../auth/pages/Login/Login"
import HeroesRoutes from "../heroes/routes/HeroesRoutes"




const AppRouter = () => {
  return (
    <Routes>
        <Route path="login" element={<Login />}/>
        
        {/* Ruta de defecto */}
        <Route path="*" element={<HeroesRoutes />}/>x
    </Routes>
  )
}

export default AppRouter