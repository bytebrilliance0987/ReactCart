/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

interface CartItemProps {
	id: string;
	img: string;
	title: string;
	price: number;
	amount: number;
}

interface ReducerState {
	isLoading: boolean;
	cartItems: CartItemProps[];
}

type ReducerAction = {
	type: string;
	payload?: any;
};

interface Context {
	state: ReducerState;
	finishLoading?: () => void;
	setCartItems?: (cartItems: CartItemProps[]) => void;
	increamentCartItemAmount?: (id: CartItemProps["id"]) => void;
	decreamentCartItemAmount?: (id: CartItemProps["id"]) => void;
	removeCartItem?: (id: CartItemProps["id"]) => void;
	removeAllCartItems?: () => void;
}

interface ProviderProps {
	children: JSX.Element | JSX.Element[];
}
