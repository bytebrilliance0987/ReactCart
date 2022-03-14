/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

const reducer = (prevState: ReducerState, { type, payload }: ReducerAction) => {
	switch (type) {
		case "FINISH_LOADING":
			return { ...prevState, isLoading: false };
		case "SET_CART_ITEMS":
			return { ...prevState, cartItems: payload };
		case "INCREAMENT_CART_ITEM_AMOUNT":
			return {
				...prevState,
				cartItems: prevState.cartItems.map(c =>
					c.id === payload
						? { ...c, amount: c.amount + 1 >= 10 ? 9 : c.amount + 1 }
						: c
				),
			};
		case "DECREAMENT_CART_ITEM_AMOUNT":
			return {
				...prevState,
				cartItems: prevState.cartItems
					.map(c => (c.id === payload ? { ...c, amount: c.amount - 1 } : c))
					.filter(c => c.amount),
			};
		case "REMOVE_CART_ITEM":
			return {
				...prevState,
				cartItems: prevState.cartItems.filter(c => c.id !== payload),
			};
		case "REMOVE_ALL_CART_ITEMS":
			return { ...prevState, cartItems: [] };
	}

	return prevState;
};

export default reducer;
