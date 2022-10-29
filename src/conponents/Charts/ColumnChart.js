import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import ReactApexChart from "react-apexcharts";

const ColumnChart = () => {
	const series = [
		{
			name: "Orders",
			type: "column",
			data: [3643, 1643, 3643, 5643, 8643, 3643, 4643, 6643, 5643],
		},
		{
			name: "Sales",
			type: "column",
			data: [12273, 15273, 26273, 12273, 36273, 10273, 19273, 36273, 16273],
		},
		{
			name: "Order Value",
			type: "column",
			data: [10.03, 15.03, 6.03, 8.03, 9.03, 14.03, 9.03, 16.03, 12.03],
		},
		{
			name: "Customers",
			type: "column",
			data: [12056, 11456, 21956, 21489, 19456, 15456, 12456, 19456, 21456],
		},
		{
			name: "Income",
			type: "column",
			data: [26652, 25652, 31652, 33952, 29052, 29652, 30652, 39652, 35652],
		},
		{
			name: "Expenses",
			type: "column",
			data: [10048, 6248, 9248, 11348, 10248, 13248, 9248, 10248, 12248]
		},
	];
	const options = {
		chart: {
			height: 350,
			type: "line",
			stacked: false,
		},
		dataLabels: {
			enabled: false,
		},
		stroke: {
			width: [1, 1, 4],
      colors: ['transparent']
		},
		title: {
			// text: 'XYZ - Stock Analysis (2009 - 2016)',
			align: "left",
			offsetX: 110,
		},
		xaxis: {
			categories: [
				"Feb",
				"Mar",
				"Apr",
				"May",
				"Jun",
				"Jul",
				"Aug",
				"Sep",
				"Oct",
			],
		},
		yaxis: [
			{
				axisTicks: {
					show: true,
				},
				axisBorder: {
					show: false,
					color: "#008FFB",
				},
				labels: {
					style: {
						colors: "#333333",
					},
				},
				title: {
					text: "",
					style: {
						color: "#008FFB",
					},
				},
				tooltip: {
					enabled: true,
				},
			},
			// {
			//   seriesName: 'Income',
			//   opposite: true,
			//   axisTicks: {
			//     show: true,
			//   },
			//   axisBorder: {
			//     show: true,
			//     color: '#00E396'
			//   },
			//   labels: {
			//     style: {
			//       colors: '#00E396',
			//     }
			//   },
			//   title: {
			//     text: "Operating Cashflow (thousand crores)",
			//     style: {
			//       color: '#00E396',
			//     }
			//   },
			// },
			// {
			//   seriesName: 'Revenue',
			//   opposite: true,
			//   axisTicks: {
			//     show: true,
			//   },
			//   axisBorder: {
			//     show: true,
			//     color: '#FEB019'
			//   },
			//   labels: {
			//     style: {
			//       colors: '#FEB019',
			//     },
			//   },
			//   title: {
			//     text: "Revenue (thousand crores)",
			//     style: {
			//       color: '#FEB019',
			//     }
			//   }
			// },
		],
		tooltip: {
			fixed: {
				enabled: false,
				position: "topLeft", // topRight, topLeft, bottomRight, bottomLeft
				offsetY: 30,
				offsetX: 60,
			},
		},
		legend: {
			horizontalAlign: "center",
			offsetX: 40,
		},
	};

	return (
		<div>
			<div className="text-right">
				<div className="dropdown">
					<label tabIndex={0} className="flex items-center m-1">
						<div>
							Sort By: <span className="text-slate-400 mr-2">Yearly</span>{" "}
						</div>
						<p className="pt-0">
							<MdKeyboardArrowDown />
						</p>
					</label>
					<ul
						tabIndex={0}
						className="dropdown-content menu p-2 drop-shadow-lg bg-base-100 rounded-box w-[140px]"
					>
						<li>
							<a>2022</a>
						</li>
						<li>
							<a>2021</a>
						</li>
						<li>
							<a>2020</a>
						</li>
						<li>
							<a>2019</a>
						</li>
						<li>
							<a>2018</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="mt-5">
				<ReactApexChart
					options={options}
					series={series}
					type="line"
					height={300}
				/>
			</div>
		</div>
	);
};

export default ColumnChart;
