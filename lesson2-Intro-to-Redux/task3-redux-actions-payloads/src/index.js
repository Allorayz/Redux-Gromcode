import "./index.scss";
import store from "./store";
import { addUser, deleteUser } from "./users.actions";

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addUser({ id: 16, name: "Alex" }));
store.dispatch(addUser({ id: 13126, name: "Nino" }));
store.dispatch(addUser({ id: 1132312316, name: "Bred" }));
store.dispatch(deleteUser(1132312316));
