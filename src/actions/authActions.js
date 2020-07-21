import { authActionTypes } from "../_constants";
// import _ from "lodash";

const login = (username, password) => dispatch => {
    dispatch({
        type: authActionTypes.LOGIN_REQUEST,
        payload: username
    });
}

const logout = () => dispatch => { };
const register = () => dispatch => { };

export const authAction = {
    login,
    logout,
    register
};
