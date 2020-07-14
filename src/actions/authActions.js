import { authActionTypes } from "./types";
import _ from "lodash";

export const checkLoggedInUser = (isUserLoggedIn, user, token) => dispatch => {
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
