import { useContext, useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./AuthReducer";


const initialState= {

}


//El Provider del context es el que "provee" la informacion

export const AuthProvider = ({ children }) => {

  const [authState, dispatch] = useReducer(authReducer, initialState) // El reducer pide como primer argumento el reducer que va a usar 
                                                        // y como segundo pide el inicialState

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};




export const useAuthContext = () => {
  //Cuando se quiera utilizar el context y esta fuera tira un Error

  const Context = useContext(AuthContext);

  if (Context === undefined) {
    throw Error("Esta fuera del contexto");
  }

  return Context;
};
