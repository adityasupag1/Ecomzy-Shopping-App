import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { add, remove } from "../redux/slices/CartSlice";
import { FaTimesCircle } from "react-icons/fa";

const CartItem = ({ item, itemIndex }) => {
	const dispatch = useDispatch();

	const removeFromCart = () => {
		dispatch(remove(item.id));
		toast.error("Item removed from cart", {
			icon: (
				<FaTimesCircle className="text-red-500 text-lg" />
			),
		});
	};
	return (
		<div className="flex items-center p-2 md:p-5 justify-between   mt-2 mb-2 md:mx-5 ">
			<div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center ">
				<div className="w-[30%]">
					<img
						className="object-cover "
						src={item.image}
					/>
				</div>
				<div className="md:ml-10 self-start space-y-5 w-full md:w-[70%]">
					<h1 className="text-xl text-slate-700 font-bold">
						{item.title}
					</h1>
					<h1 className="text-base text-slate-700 font-normal">
						{item.description
						.split(" ")
						.slice(0, 20)
						.join(" ") + "..."}
					</h1>
					<div className="flex items-center justify-between">
						<p className="font-bold text-lg text-green-600">
							${item.price}
						</p>
						<div
							className="text-red-800  bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"
							onClick={removeFromCart}
						>
							<MdDelete />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
