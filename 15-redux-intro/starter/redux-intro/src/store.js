import { combineReducers, createStore } from "redux";
import reducerAccount from "./features/accounts/accountSlice";
import reducerCustomer from "./features/customers/customerSlice";

const rootReducer = combineReducers({
  account: reducerAccount,
  customer: reducerCustomer,
});
const store = createStore(rootReducer);

export default store;
