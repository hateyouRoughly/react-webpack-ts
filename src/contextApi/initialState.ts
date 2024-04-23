import Cookies from "js-cookie";

export interface State {
    token?: any;
    profile?: {
        [key: string]: any;
    };
    [key: string]: any;
}

const initialState: State = {
    token: Cookies.get("token")
    // Your initial state values
};

export default initialState;