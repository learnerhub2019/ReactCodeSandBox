import { authActionTypes } from "../actions/types";

const initialState = {
    isUserLoggedIn: false,
    loggedInUser: null,
    toke: null
}

export default function (state = initialState, action) {
    console.log( action );
    switch (action.type) {
        case authActionTypes.LOGIN_USER:
            return {
                state,
                isUserLoggedIn: action.payload.isUserLoggedIn,
                loggedInUser: action.payload.userDetails
            }
        default:
            return state;
    }
}