import React from "react";
import ReactApexChart from "react-apexcharts";

const PieState = () => {
	const series = [1000, 365, 150];
	const options = {
		chart: {
			width: 350,
			type: "donut",
			dropShadow: {
				enabled: true,
				color: "#fff",
				top: -1,
				left: 1,
				blur: 1,
				opacity: 0.2,
			},
		},
		plotOptions: {
			pie: {
				startAngle: -90,
				endAngle: 270,
			},
		},
		dataLabels: {
			enabled: false,
		},
		labels: ["Completed", "Pending", "Cancel"],

		fill: {
			type: "gradient",
		},
		legend: {
			position: "bottom",
		},
		title: {
			text: "",
		},
		responsive: [
			{
				breakpoint: 480,
				options: {
					chart: {
						width: 380,
					},
					legend: {
						position: "bottom",
					},
				},
			},
		],
	};
	return (
		<div className="">
			<h2 className="font-bold p-3">Order Stats</h2>
			<div className="">
				<ReactApexChart
					options={options}
					series={series}
					type="donut"
					width={300}
				/>
			</div>
		</div>
	);
};

export default PieState;
