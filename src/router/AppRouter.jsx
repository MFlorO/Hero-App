import { Route, Routes } from "react-router-dom";
import Login from "../auth/pages/Login/Login";
import HeroesRoutes from "../heroes/routes/HeroesRoutes";
import PrivateRoutes from "./PrivateRoutes";
import PublicRouter from "./PublicRouter";



const AppRouter = () => {
  return (
    <Routes>
      <Route path="login" element={
        <PublicRouter>
          <Login />
        </PublicRouter>
      } />

      <Route
        path="*"
        element={
          <PrivateRoutes>
            <HeroesRoutes />
          </PrivateRoutes>
        }
      />
    </Routes>
  );
};

export default AppRouter;




// EJEMPLO SiN RUTAS PUBLICAS/PRIVADAS


/* Ruta de defecto */
/* <Route path="*" element={<HeroesRoutes />}/>x */
/* <Route path="login" element={<Login />} /> */
