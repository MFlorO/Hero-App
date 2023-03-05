import { types } from "../types/types";


export const authReducer = (state, action) => {

    switch (action.types) {
        
        case types.login:

            return state;

        case types.logout:

            return state;

        default:
            return state;;
    }
}