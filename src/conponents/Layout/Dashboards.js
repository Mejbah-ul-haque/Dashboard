import React from "react";
import Activity from "../Charts/Activity";
import Overview from "../Charts/Overview";
import RevenueCards from "../RevenueCard/RevenueCards";

const Dashboards = () => {
	return (
		<div className=" mt-8">

			<div className="lg:flex gap-5 md:flex-row-reverse">
				<div className="sidebar-profile bg-yellow-100 md:hidden lg:block w-100 h-[600px] mt-5 lg:mt-0 lg:w-1/4">
					<h2>Profile</h2>
				</div>
				<div className=" main-part   w-100 lg:w-3/4">
          <RevenueCards></RevenueCards>
					<Overview></Overview>
					
					<div className="bg-blue-900 w-100 h-48 my-5">
						
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						<div className=" h-64 w"><Activity></Activity></div>
						<div className="bg-green-500 h-64 w"></div>
						<div className="bg-green-500 h-64 w"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboards;
