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
			<div className="lg:flex gap-5 md:flex-row-reverse">
				<div className="sidebar-profile bg-base-100 md:hidden lg:block drop-shadow-lg rounded-xl w-full mt-5 lg:mt-0 lg:w-1/4">
					<Profile></Profile>
				</div>
				<div className="lg:w-3/4">
					<RevenueCards></RevenueCards>
					<Overview></Overview>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
						<div className=" drop-shadow-lg bg-white h-full rounded-xl">
							<Activity></Activity>
						</div>

						<div className=" drop-shadow-lg bg-white h-full rounded-xl">
							<PieStats></PieStats>
						</div>
						<div className=" drop-shadow-lg bg-white h-full rounded-xl">
							<Products></Products>
						</div>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-5">
				<div className=" drop-shadow-lg bg-white rounded-xl">
				<Sales></Sales>
				</div>

				<div className=" drop-shadow-lg bg-white rounded-xl">
				<Statistics></Statistics>
				</div>
				<div className=" drop-shadow-lg bg-white rounded-xl">
					<Analysis></Analysis>
				</div>
				<div className=" drop-shadow-lg bg-white rounded-xl">
					<TotalRevenue></TotalRevenue>
				</div>
			</div>
		</div>
	);
};

export default Dashboards;
