import React from "react";
import ColumnChart from "./ColumnChart";

const Overview = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-4 bg-gray-900 text-gray-400 rounded-xl gap-5 mt-5 drop-shadow-lg p-5">
			<div className=" ">
				<h2 className="text-error uppercase tracking-[0.25em]">
					<small>Overview</small>
				</h2>
				<div className="mt-3">
					<h2>
						<small>This Month</small>
					</h2>
					<div className="flex">
						<h2 className=" text-gray-400 text-xl">$24,568 </h2>
						<div className="badge badge-success badge-outline ml-5 px-1">+2.65%</div>
					
					</div>
				</div>
				<div className="mt-10">
					<table class="  mx-auto">
						
						<tbody>
							<tr>
								<td class="border-b border-r border-black py-2">
                  <p className="text-info"><small>Orders</small></p>
                  <p className="text-gray-400">5,643</p>
                </td>
								<td class="border-b border-black p-2">
                  <p className="text-info"><small>Sales</small></p>
                  <p className="text-gray-400">16,273</p>
                </td>
							</tr>
							<tr>
								<td class="border-b border-r border-black py-2">
                  <p className="text-info"><small>Order Value</small></p>
                  <p className="text-gray-400">12.03%</p>
                </td>
								<td class="border-b border-black p-2">
                  <p className="text-info"><small>Customers</small></p>
                  <p className="text-gray-400">21,456</p>
                </td>
							</tr>
							<tr>
								<td class=" border-r border-black py-2">
                  <p className="text-info"><small>Income</small></p>
                  <p className="text-gray-400">$35,652</p>
                </td>
								<td class=" border-slate-100 p-2">
                  <p className="text-info"><small>Expenses</small></p>
                  <p className="text-gray-400">$12,248</p>
                </td>
							</tr>
							
						</tbody>
					</table>
				</div>
			</div>
			<div className=" col-span-3">
        <ColumnChart></ColumnChart>
      </div>
		</div>
	);
};

export default Overview;
