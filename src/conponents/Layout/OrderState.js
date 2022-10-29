import React from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";

const OrderState = () => {
	const data = [
		{ name: "completed", value: 550 },
		{ name: "pending", value: 200 },
		{ name: "cancel", value: 120 },
	];
	const COLORS = ["#0088FE", "#d9d9d9", "#ff4d4d"];
	return (
		<div className="p-2">
			<div>
				<h2>Order Stats</h2>
			</div>
			<div>
				<PieChart width={800} height={230}>
					<Pie
						data={data}
						cx={100}
						cy={120}
						innerRadius={60}
						outerRadius={80}
						fill="#8884d8"
						paddingAngle={5}
						dataKey="value"
					>
						{data.map((entry, index) => (
							<Cell
								key={`cell-${index}`}
								fill={COLORS[index % COLORS.length]}
							/>
						))}
					</Pie>
				</PieChart>
			</div>
      <div className="flex justify-around">
        <p><small>completed</small></p>
        <p><small>pending</small></p>
        <p><small>Cancel</small></p>
      </div>
		</div>
	);
};

export default OrderState;
