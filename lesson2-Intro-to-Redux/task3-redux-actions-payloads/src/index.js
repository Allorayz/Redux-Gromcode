import "./index.scss";
import store from "./store";
import { addUser, deleteUser } from "./users.actions";

store.dispatch(addUser({ id: 76, name: "Alex" }));
store.dispatch(addUser({ id: 726, name: "Bob" }));
store.dispatch(addUser({ id: 7261, name: "Krab" }));
store.dispatch(addUser({ id: 7262, name: "Krabasdasdas" }));
store.dispatch(deleteUser(7262));
console.log(store.getState());
