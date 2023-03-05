import { Route, Routes } from "react-router-dom";
import Login from "../auth/pages/Login/Login";
import HeroesRoutes from "../heroes/routes/HeroesRoutes";
import PrivateRoutes from "./PrivateRoutes";



const AppRouter = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />

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





/* Ruta de defecto */
/* <Route path="*" element={<HeroesRoutes />}/>x */

