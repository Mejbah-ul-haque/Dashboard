import React from "react";

import Activity from "../Charts/Activity";
import Overview from "../Charts/Overview";
import PieStats from "../Charts/PieStats";
import Products from "../Products/Products";
import Profile from "../Profile/Profile";
import Analysis from "../Progress/Analysis";
import Sales from "../Progress/Sales";
import Statistics from "../Progress/Statistics";
import TotalRevenue from "../Progress/TotalRevenue";

import RevenueCards from "../RevenueCard/RevenueCards";
import OrderState from "./OrderState";

const Dashboards = () => {
	return (
		<div className="">
			<div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-5">
			<div className="lg:order-last sidebar-profile bg-gray-900 md:hidden lg:block drop-shadow-lg rounded-xl mb-5">
					<Profile></Profile>
				</div>
				<div className="col-span-3 mb-5">
					<RevenueCards></RevenueCards>
					<Overview></Overview>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
						<div className=" drop-shadow-lg bg-gray-900 text-gray-200 h-full rounded-xl">
							<Activity></Activity>
						</div>

						<div className=" drop-shadow-lg bg-gray-900 text-gray-200 lg:pb-0 pb-10 h-full rounded-xl">
							<PieStats></PieStats>
						</div>
						<div className=" drop-shadow-lg bg-gray-900 text-gray-200 h-full rounded-xl">
							<Products></Products>
						</div>
					</div>
				</div>
				
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
				<div className=" drop-shadow-lg bg-gray-900 text-gray-200 rounded-xl">
				<Sales></Sales>
				</div>

				<div className=" drop-shadow-lg bg-gray-900 text-gray-200 rounded-xl">
				<Statistics></Statistics>
				</div>
				<div className=" drop-shadow-lg bg-gray-900 text-gray-200 rounded-xl">
					<Analysis></Analysis>
				</div>
				<div className=" drop-shadow-lg bg-gray-900 text-gray-200 rounded-xl">
					<TotalRevenue></TotalRevenue>
				</div>
			</div>
			<div className="grid grid-cols-1 gap-5 mt-5">
				<div className="bg-gray-900  h-14 rounded-xl "></div>
				
			</div>
		</div>
	);
};

export default Dashboards;
