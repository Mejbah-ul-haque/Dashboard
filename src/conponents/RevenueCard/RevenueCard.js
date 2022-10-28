import React from "react";

const RevenueCard = ({ item }) => {
	const { id, name, quantity, percentage, icon } = item;
	return (
		<div>
			<div className=" flex justify-between items-end px-4 py-2  bg-base-100 rounded-xl drop-shadow-lg">
				<div className="flex items-center">
					<div><p className=" bg-blue-400 text-xl  rounded-lg text-white p-2 mr-2">{icon}</p></div>
					<div className="">
						<h2 className="font-bold text-slate-400"><small>{name}</small></h2>
						<h2 className="font-bold heading-1">{quantity}</h2>
					</div>
				</div>

				<div className="">
					<p className="bg-red-100 text-red-600 rounded-full py-0 px-2"><small>{percentage}%</small></p>
				</div>
			</div>
		</div>
	);
};

export default RevenueCard;