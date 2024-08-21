import { createContext, useContext, useReducer } from "react";
import { popularProductsDetails } from "../../Utils/ConstantForPopularProducts/ConstantForPopularProducts";
import { cartReducer } from "./Reducer";
export const Cart = createContext();

const Context = ({ children }) => {
  // const [cart, setCart] = useState([]);

  const [state, dispatch] = useReducer(cartReducer, {
    popularProductsDetails: popularProductsDetails,
    cart: [],
  });
  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default Context;

export const cartState = () => {
  return useContext(Cart);
};
