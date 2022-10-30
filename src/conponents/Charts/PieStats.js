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
				color: "transparent",
				top: -1,
				left: 1,
				blur: 1,
				opacity: 0.7,
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
			<h2 className="text-error uppercase tracking-[0.10em] p-4"><small>Order Stats</small></h2>
			<div className="mt-5">
				<ReactApexChart
					options={options}
					series={series}
					type="donut"
					width={290}
				/>
			</div>
		</div>
	);
};

export default PieState;
