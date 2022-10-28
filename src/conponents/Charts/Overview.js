import React from "react";

const Overview = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-4 bg-white rounded-xl gap-5 mt-5">
			<div className="   pl-3">
				<h2 className="font-bold">
					<small>Overview</small>
				</h2>
				<div className="mt-3">
					<h2>
						<small>This Month</small>
					</h2>
					<div className="flex">
						<h2 className="font-bold text-xl">$24,568 </h2>
						<p className="bg-green-100 text-green-700 rounded-full ml-5 px-1">
							<small>+2.65%</small>
						</p>
					</div>
				</div>
				<div className="">
					<table class="  mx-auto">
						
						<tbody>
							<tr>
								<td class="border-b border-r border-slate-100 py-2">
                  <p><small>Orders</small></p>
                  <p className="font-bold">5,643</p>
                </td>
								<td class="border-b border-slate-100 p-2">
                  <p><small>Sales</small></p>
                  <p className="font-bold">16,273</p>
                </td>
							</tr>
							<tr>
								<td class="border-b border-r border-slate-100 py-2">
                  <p><small>Order Value</small></p>
                  <p className="font-bold">12.03%</p>
                </td>
								<td class="border-b border-slate-100 p-2">
                  <p><small>Customers</small></p>
                  <p className="font-bold">21,456</p>
                </td>
							</tr>
							<tr>
								<td class=" border-r border-slate-100 py-2">
                  <p><small>Income</small></p>
                  <p className="font-bold">$35,652</p>
                </td>
								<td class=" border-slate-100 p-2">
                  <p><small>Expenses</small></p>
                  <p className="font-bold">$12,248</p>
                </td>
							</tr>
							
						</tbody>
					</table>
				</div>
			</div>
			<div className="bg-blue-300 h-48 col-span-3"></div>
		</div>
	);
};

export default Overview;
