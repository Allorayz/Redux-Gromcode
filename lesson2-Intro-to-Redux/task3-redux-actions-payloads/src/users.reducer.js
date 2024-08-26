import { ADD_USER, DELETE_USER } from "./users.actions";

const initialValue = {
  userList: [],
};
export const usersReducer = (state = initialValue, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        userList: state.userList.concat(action.payload.userData),
      };
    case DELETE_USER:
      return {
        ...state,
        userList: state.userList.filter(
          (user) => user.id !== action.payload.userId,
        ),
      };
    default:
      return state;
  }
};
