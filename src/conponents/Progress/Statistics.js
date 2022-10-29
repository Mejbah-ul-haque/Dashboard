import React from "react";

const Statistics = () => {
	return (
		<div className="p-5">
			<div>
				<h2 className="font-bold">Statistics</h2>
			</div>
			<div className="flex justify-between items-center">
				<div className="badge badge-info text-white font-bold p-3 mt-10">
					88%
				</div>
				<div className="stats shadow-lg">
					<div className="stat">
						<div className="stat-value">10,40</div>
						<div className="stat-desc">12% left</div>
					</div>
				</div>
			</div>
			<progress
				className="progress progress-info w-full"
				value="88"
				max="100"
			></progress>
		</div>
	);
};

export default Statistics;
