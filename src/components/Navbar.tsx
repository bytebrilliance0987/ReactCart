/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

import React from "react";
import { RiShoppingBag3Fill } from "react-icons/ri";

import { useGlobalContext } from "../store/context";

const Navbar = () => {
  const {
    state: { cartItems },
  } = useGlobalContext();

  return (
    <header className="p-4 bg-sky-600">
      <nav className="container w-5/6 mx-auto">
        <div className="relative mx-auto w-fit">
          <RiShoppingBag3Fill className="w-12 h-12 text-white" />
          <span className="absolute flex items-center justify-center w-8 h-8 text-xl font-bold text-white rounded-full -top-3 -right-3 bg-sky-400">
            {cartItems.reduce((acc, val) => acc + val.amount, 0)}
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
