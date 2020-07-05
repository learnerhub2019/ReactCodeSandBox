import { userActionTypes } from "./types";

export const fetchUsers = () => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(users =>
      dispatch({
        type: userActionTypes.FETCH_USERS,
        payload: users
      })
    );
};
