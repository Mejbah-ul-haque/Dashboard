import React from "react";

const Sales = () => {
	return (
		<div className="p-5">
			<div>
				<h2 className="font-bold">Daily Sales</h2>
			</div>
			<div className="flex justify-between items-center">
				
				<div className="badge badge-success text-white font-bold p-3 mt-10">65%</div>
        <div className="stats shadow-lg">
					<div className="stat">
						
						<div className="stat-value">9,40</div>
						<div className="stat-desc">7% more</div>
					</div>
				</div>
			</div>
			<progress
				className="progress progress-success w-full"
				value="65"
				max="100"
			></progress>
		</div>
	);
};

export default Sales;
