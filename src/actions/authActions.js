import { authActionTypes } from "./types";
import _ from "lodash";

const login = (username, password) => dispatch => {
    dispatch({
        type: authActionTypes.LOGIN_USER,
        payload: _.pick(user, [
            "firstName",
            "lastName",
            "userName",
            "email",
            "password"
        ])
    })
}

const logout = () => dispatch => { };
const register = () => dispatch => { };

export default authAction = {
    login,
    logout,
    register
};
