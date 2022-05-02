import { ADD_ORDER } from "./actions";
import {store} from "./store"


export const reducer = (store , { type, payload }) => {
  switch (type) {
    case ADD_ORDER:
            return{...store,orders:payload}
    default:
      return store;
  }
};
