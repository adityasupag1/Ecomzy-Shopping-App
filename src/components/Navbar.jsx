import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import logo from "../assets/logo.png";
import { NavLink } from "react-router";
import { useSelector } from "react-redux";

const Navbar = () => {
	const cart = useSelector((state) => state.cart);
	return (
		<div className="bg-slate-900">
			<div className="flex items-center justify-between h-20  max-w-6xl mx-auto bg-slate-900">
				<NavLink to="/">
					<img
						src={logo}
						className="h-14"
						alt=""
					/>
				</NavLink>

				<div className="flex  items-center space-x-6 mr-5 text-slate-100   font-medium">
					<NavLink to="/">
						<p className="cursor-pointer hover:text-green-400 transition duration-300 ease-in">
							Home
						</p>
					</NavLink>
<NavLink to="/cart">
  <div className="relative cursor-pointer hover:text-green-400 transition duration-300 ease-in">
    <FaCartShopping className="text-xl" />

    <span
      className="
        absolute -top-2 -right-2
        bg-green-600 text-white text-xs
        min-w-5 h-5
        px-1
        flex items-center justify-center
        rounded-full
        animate-cart-float
      "
    >
      {cart.length}
    </span>
  </div>
</NavLink>

				</div>
			</div>
		</div>
	);
};

export default Navbar;
