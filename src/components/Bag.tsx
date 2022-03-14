/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

import React, { useEffect } from "react";

import CartItem from "./CartItem";
import { useGlobalContext } from "../store/context";

const DATA_URL = "https://course-api.com/react-useReducer-cart-project";

const Bag = () => {
	const {
		state: { isLoading, cartItems },
		finishLoading,
		setCartItems,
		removeAllCartItems,
	} = useGlobalContext();

	useEffect(() => {
		fetch(DATA_URL)
			.then(res => res.json())
			.then(data => {
				finishLoading!();
				setCartItems!(data);
			});
	}, []);

	if (isLoading)
		return (
			<h1 className="mx-auto mt-16 text-5xl font-bold capitalize w-fit text-neutral-600">
				loading...
			</h1>
		);

	return (
		<div className="container w-4/6 mx-auto font-bold tracking-widest">
			<h1 className="mx-auto mt-16 mb-10 text-5xl uppercase w-fit text-cyan-900">
				your bag
			</h1>
			<ul className="space-y-4">
				{cartItems.map(c => (
					<CartItem key={c.id} {...c} />
				))}
			</ul>
			{!!cartItems.length ? (
				<>
					<div className="flex justify-between pt-2 mt-8 text-xl capitalize border-t-2 border-solid border-cyan-900 text-cyan-900">
						total
						<span>
							$
							{cartItems.reduce(
								(acc, val) =>
									Math.floor((acc + val.price * val.amount) * 10 ** 2) / 10 ** 2,
								0
							)}
						</span>
					</div>
					<button
						className="block px-4 py-1 mx-auto my-4 text-lg font-bold tracking-widest text-red-700 capitalize transition border-2 border-red-700 border-solid rounded shadow-md w-fit opacity-80 hover:opacity-100"
						onClick={() => removeAllCartItems!()}>
						clear all items
					</button>
				</>
			) : (
				<h2 className="text-xl font-bold text-center text-neutral-600">
					is currently empty...
				</h2>
			)}
		</div>
	);
};

export default Bag;
