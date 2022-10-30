import React from "react";

const Sales = () => {
	return (
		<div className="p-5">
			<div>
				<h2 className="text-error uppercase tracking-[0.10em]"><small>Daily Sales</small></h2>
			</div>
			<div className="flex justify-between items-center">
				
				<div className="badge badge-success text-black font-bold p-3 mt-10">65%</div>
        <div className="stats bg-gray-900 shadow-black shadow-lg text-gray-400">
					<div className="stat">
						
						<div className="stat-value">9,40</div>
						<div className="stat-desc">7% more</div>
					</div>
				</div>
			</div>
			<progress
				className="progress progress-success bg-gray-700 w-full"
				value="65"
				max="100"
			></progress>
		</div>
	);
};

export default Sales;
