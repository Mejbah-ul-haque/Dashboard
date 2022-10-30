import React from "react";
import ReactApexChart from "react-apexcharts";
import { MdKeyboardArrowDown } from "react-icons/md";

const Activity = () => {
  
  const series= [{
    name: 'current',
    data: [31, 40, 28, 51, 72, 35, 90]
  }, {
    name: 'Previous',
    data: [11, 32, 45, 32, 34, 52, 41]
  }];
  const options= {
    chart: {
      height: 200,
      type: 'area'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'datetime',
      categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      }}};

	return (
		<div className="p-4 ">
			<div>
				<div className="flex justify-between">
					<div className="text-error uppercase tracking-[0.10em]"><small>User Activity</small></div>
					<div className="dropdown z-50">
						<label tabIndex={0} className="flex items-center m-1">
							<p>
								<span className="text-slate-400 mr-2">Weekly</span>{" "}
							</p>
							<p className="pt-0">
								<MdKeyboardArrowDown />
							</p>
						</label>
						<ul
							tabIndex={0}
							className="dropdown-content menu p-2 drop-shadow-lg z-10 bg-gray-800 rounded-box w-[140px]"
						>
							<li className="border-b-2 border-black">
								<a>Sat</a>
							</li>
							<li className="border-b-2 border-black">
								<a>Sun</a>
							</li>
							<li className="border-b-2 border-black">
								<a>Mon</a>
							</li>
							<li className="border-b-2 border-black">
								<a>Tue</a>
							</li>
							<li className="border-b-2 border-black">
								<a>Web</a>
							</li>
							<li className="border-b-2 border-black">
								<a>Thu</a>
							</li>
							<li className="border-b-2 border-black">
								<a>Fri</a>
							</li>
						</ul>
					</div>
				</div>
        <div>
          <p className="text-slate-500"><small>This Month</small></p>
          <h2 className=" text-gray-400">16,543</h2>
        </div>
			</div>
      <div>
      <ReactApexChart options={options} series={series} type="area" height={200} />
      </div>
		</div>
	);
};

export default Activity;
