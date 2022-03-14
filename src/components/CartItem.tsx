/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

import React from "react";
import { GoArrowUp, GoArrowDown } from "react-icons/go";

import { useGlobalContext } from "../store/context";

const CartItem = ({ id, img, title, price, amount }: CartItemProps) => {
  const { removeCartItem, increamentCartItemAmount, decreamentCartItemAmount } =
    useGlobalContext();

  return (
    <li className="flex items-center gap-6">
      <img className="w-20 h-20" src={img} alt="cart item image" />
      <div className="flex-grow w-full">
        <h2 className="text-xl capitalize text-cyan-900">{title}</h2>
        <span className="block mb-1 text-lg text-slate-600">${price}</span>
        <button
          className="block font-bold tracking-widest transition opacity-80 hover:opacity-100 text-cyan-600"
          onClick={() => removeCartItem!(id)}>
          remove
        </button>
      </div>
      <div className="relative py-6">
        <button
          className="absolute top-0 -translate-x-1/2 group left-1/2"
          onClick={() => increamentCartItemAmount!(id)}>
          <span className="sr-only">increase item</span>
          <GoArrowUp className="w-6 h-6 transition group-hover:opacity-100 opacity-80 text-cyan-600" />
        </button>
        <span className="text-2xl">{amount}</span>
        <button
          className="absolute bottom-0 -translate-x-1/2 group left-1/2"
          onClick={() => decreamentCartItemAmount!(id)}>
          <span className="sr-only">decrease item</span>
          <GoArrowDown className="w-6 h-6 transition group-hover:opacity-100 opacity-80 text-cyan-600" />
        </button>
      </div>
    </li>
  );
};

export default CartItem;
