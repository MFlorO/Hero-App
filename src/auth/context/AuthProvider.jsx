import { useContext, useReducer } from "react";
import { types } from "../types/types";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";

const initialState = {
  logged: false,
};


const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return {
    logged: !!user,
    user,
  };
};



//El Provider del context es el que "provee" la informacion
export const AuthProvider = ({ children }) => {


  const [authState, dispatch] = useReducer(authReducer, initialState, init); // El reducer pide como primer argumento el reducer que va a usar
  // como segundo pide el inicialState
  // como tercero es la funcion de inicializacion


  const login = (name = "") => {
    const user = {
      id: "ABC",
      name: name,
    };

    const action = {
      type: types.login,
      payload: user,
    };

    localStorage.setItem("user", JSON.stringify(user));

    dispatch(action);
  };


  const logout = () => {

    localStorage.removeItem('user')

    const action = {
      type: types.logout,
    };

    dispatch(action);
  };


  //"...authstate lo destructuro para obtener directamente sus propiedades"
  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  //Cuando se quiera utilizar el context y esta fuera tira un Error

  const Context = useContext(AuthContext);

  if (Context === undefined) {
    throw Error("Esta fuera del contexto");
  }

  return Context;
};
