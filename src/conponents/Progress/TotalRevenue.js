import React from "react";

const TotalRevenue = () => {
	return (
		<div className="p-5">
			<div>
				<h2 className="text-error uppercase tracking-[0.10em]"> <small>Total Revenue</small></h2>
			</div>
			<div className="flex justify-between items-center">
				<div className="badge badge-info text-black font-bold p-3 mt-10">
					45%
				</div>
				<div className="stats bg-gray-900 shadow-lg shadow-black text-gray-400">
					<div className="stat">
						<div className="stat-value ">8,40</div>
						<div className="stat-desc">70% target</div>
					</div>
				</div>
			</div>
			<progress
				className="progress progress-info bg-gray-800 w-full"
				value="45"
				max="100"
			></progress>
		</div>
	);
};

export default TotalRevenue;
