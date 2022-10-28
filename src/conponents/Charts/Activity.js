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
		<div className="p-2">
			<div>
				<div className="flex justify-between">
					<div>User Activity</div>
					<div className="dropdown">
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
							className="dropdown-content menu p-2 drop-shadow-lg bg-base-100 rounded-box w-[140px]"
						>
							<li>
								<a>Sat</a>
							</li>
							<li>
								<a>Sun</a>
							</li>
							<li>
								<a>Mon</a>
							</li>
							<li>
								<a>Tue</a>
							</li>
							<li>
								<a>Web</a>
							</li>
							<li>
								<a>Thu</a>
							</li>
							<li>
								<a>Fri</a>
							</li>
						</ul>
					</div>
				</div>
        <div>
          <p className="text-slate-500"><small>This Month</small></p>
          <h2 className="font-bold">16,543</h2>
        </div>
			</div>
      <div>
      <ReactApexChart options={options} series={series} type="area" height={200} />
      </div>
		</div>
	);
};

export default Activity;
