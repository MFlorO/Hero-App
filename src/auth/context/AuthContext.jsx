import { createContext } from "react";


export const AuthContext = createContext()  // Se puede poner un bjeto vacio o como null. Porque al final el que va a exponer 
                                              // la informacion va a ser mi authprovider