import { authActionTypes } from "../actions/types";

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export default function (state = initialState, action) {
    switch (action.type) {
        case authActionTypes.LOGIN_REQUEST:
            return {
                state,
                loggingIn: true,
                user: action.user
            }
        case authActionTypes.LOGOUT_REQUEST:
            return {};
        default:
            return state;
    }
}

// https://jasonwatmore.com/post/2017/09/16/react-redux-user-registration-and-login-tutorial-example