import React from 'react';

const Analysis = () => {
  return (
    <div className="p-5">
			<div>
				<h2 className="font-bold">Customer Analysis</h2>
			</div>
			<div className="flex justify-between items-center">
				
				<div className="badge badge-success text-white font-bold p-3 mt-10">90%</div>
        <div className="stats shadow-lg">
					<div className="stat">
						
						<div className="stat-value">7,40</div>
						<div className="stat-desc">10% left to analysis</div>
					</div>
				</div>
			</div>
			<progress
				className="progress progress-success w-full"
				value="90"
				max="100"
			></progress>
		</div>
  );
};

export default Analysis;