import React from "react";
import ReactApexChart from "react-apexcharts";

const PieState = () => {
	const series = [1000, 365, 150];
	const options = {
		chart: {
			width: 480,
			type: "donut",
			dropShadow: {
				enabled: true,
				color: '#fff',
				top: -1,
				left: 3,
				blur: 3,
				opacity: 0.2
			}
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
			formatter: function (val, opts) {
				return val + " - " + opts.w.globals.series[opts.seriesIndex];
			},
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
		<div className="p-3">
			<h2 className="font-bold">Order Stats</h2>
			<div className="">
        
      <ReactApexChart options={options} series={series} type="donut" width={400} />
        
      </div>
		</div>
	);
};

export default PieState;
