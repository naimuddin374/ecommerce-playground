import { createStore, persist } from "easy-peasy";
import AuthModel from "./model/auth-model";
import CartModel from "./model/cart";
import DataModel from "./model/data-model";

const store = createStore({
  auth: persist(AuthModel),
  data: persist(DataModel),
  cart: persist(CartModel),
});
export default store;
