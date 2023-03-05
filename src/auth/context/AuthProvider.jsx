import { useContext, useReducer } from "react";
import { types } from "../types/types";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";


const initialState= {
    logged: false
}




//El Provider del context es el que "provee" la informacion

export const AuthProvider = ({ children }) => {

  const [authState, dispatch] = useReducer(authReducer, initialState) // El reducer pide como primer argumento el reducer que va a usar 
                                                        // y como segundo pide el inicialState

  const login = (name = "") => {
    const action = {
        type: types.login,
        payload: {
            id: "ABC",
            name: name
        }
    }

    dispatch(action)
  }
                     
                                             //"...authstate lo destructuro para obtener directamente sus propiedades"
  return <AuthContext.Provider value={{...authState, login}}>{children}</AuthContext.Provider>; 
};




export const useAuthContext = () => {
  //Cuando se quiera utilizar el context y esta fuera tira un Error

  const Context = useContext(AuthContext);

  if (Context === undefined) {
    throw Error("Esta fuera del contexto");
  }

  return Context;
};
