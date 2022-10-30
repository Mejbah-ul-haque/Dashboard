import React from "react";

const RevenueCard = ({ item }) => {
	const { id, name, quantity, percentage, icon } = item;
	return (
		<div>
			<div className=" flex justify-between items-end p-5 bg-gray-900 text-gray-200 rounded-xl drop-shadow-lg">
				<div className="flex items-center">
					<div><p className=" bg-gray-600 text-xl  rounded-lg text-gray-900 p-2 mr-2">{icon}</p></div>
					<div className="">
						<h2 className=" text-info"><small>{name}</small></h2>
						<h2 className="text-gray-400 heading-1">{quantity}</h2>
					</div>
				</div>

				<div className="">
				<div className="badge badge-accent badge-outline">{percentage}%</div>
					
				</div>
			</div>
		</div>
	);
};

export default RevenueCard;
