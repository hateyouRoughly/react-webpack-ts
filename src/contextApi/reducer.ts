import { State } from "./initialState";
import Cookies from "js-cookie";

export interface Action {
    type: 'SET_STATE' | 'REMOVE_STATE' | 'LOGIN' | 'LOGOUT';
    payload?: State | string
}

const reducer = (state: State, action: Action) => {
    let temp_state = {...state};
    switch (action?.type) {
        case 'SET_STATE':
            return {
                ...state,
                ...(action?.payload as State)
            };
        case 'REMOVE_STATE':
            delete temp_state?.[action?.payload as string];
            return temp_state;
        case 'LOGIN':
            Cookies.set('token', action?.payload as string);
            return {
                ...state,
                token: action?.payload
            };
        case 'LOGOUT':
            Cookies.remove('token');
            delete temp_state?.['token'];
            return temp_state;
        default:
            return state;
    }
};

export default reducer;