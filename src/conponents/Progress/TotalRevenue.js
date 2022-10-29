import React from "react";

const TotalRevenue = () => {
	return (
		<div className="p-5">
			<div>
				<h2 className="font-bold">Total Revenue</h2>
			</div>
			<div className="flex justify-between items-center">
				<div className="badge badge-info text-white font-bold p-3 mt-10">
					45%
				</div>
				<div className="stats shadow-lg">
					<div className="stat">
						<div className="stat-value">8,40</div>
						<div className="stat-desc">70% target</div>
					</div>
				</div>
			</div>
			<progress
				className="progress progress-info w-full"
				value="45"
				max="100"
			></progress>
		</div>
	);
};

export default TotalRevenue;
