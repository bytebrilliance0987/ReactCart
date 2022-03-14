/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

import React, { useContext, useReducer } from "react";

import reducer from "./reducer";

const initialState: ReducerState = {
	isLoading: true,
	cartItems: [],
};

const AppContext = React.createContext<Context>({ state: initialState });

const AppProvider = ({ children }: ProviderProps) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const finishLoading: Context["finishLoading"] = () =>
		dispatch({ type: "FINISH_LOADING" });

	const setCartItems: Context["setCartItems"] = cartItems =>
		dispatch({ type: "SET_CART_ITEMS", payload: cartItems });

	const increamentCartItemAmount: Context["increamentCartItemAmount"] = id =>
		dispatch({ type: "INCREAMENT_CART_ITEM_AMOUNT", payload: id });

	const decreamentCartItemAmount: Context["decreamentCartItemAmount"] = id =>
		dispatch({ type: "DECREAMENT_CART_ITEM_AMOUNT", payload: id });

	const removeCartItem: Context["removeCartItem"] = id =>
		dispatch({ type: "REMOVE_CART_ITEM", payload: id });

	const removeAllCartItems: Context["removeAllCartItems"] = () =>
		dispatch({ type: "REMOVE_ALL_CART_ITEMS" });

	return (
		<AppContext.Provider
			value={{
				state,
				finishLoading,
				setCartItems,
				increamentCartItemAmount,
				decreamentCartItemAmount,
				removeCartItem,
				removeAllCartItems,
			}}>
			{children}
		</AppContext.Provider>
	);
};

const useGlobalContext = () => useContext(AppContext);

export { useGlobalContext };
export default AppProvider;
