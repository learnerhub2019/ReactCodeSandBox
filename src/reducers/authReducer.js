import { authActionTypes } from "../_constants";
let user;
// let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : { loggedIn: false };

export default function (state = initialState, action) {
    switch (action.type) {
        case authActionTypes.LOGIN_REQUEST:
            return {
                loggingIn: true,
                user: action.payload
            }
        case authActionTypes.LOGOUT_REQUEST:
            return {};
        default:
            return state;
    }
}

// https://jasonwatmore.com/post/2017/09/16/react-redux-user-registration-and-login-tutorial-example