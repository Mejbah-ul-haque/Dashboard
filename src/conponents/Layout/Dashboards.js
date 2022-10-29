import React from "react";

import Activity from "../Charts/Activity";
import Overview from "../Charts/Overview";
import PieStats from "../Charts/PieStats";
import Products from "../Products/Products";
import Profile from "../Profile/Profile";

import RevenueCards from "../RevenueCard/RevenueCards";
import OrderState from "./OrderState";

const Dashboards = () => {
	return (
		<div className=" mt-8">

			<div className="lg:flex gap-5 md:flex-row-reverse">
				<div className="sidebar-profile bg-base-100 md:hidden lg:block drop-shadow-lg rounded-xl w-100  mt-5 lg:mt-0 lg:w-1/4">
					<Profile></Profile>
				</div>
				<div className=" main-part   w-100 lg:w-3/4">
          <RevenueCards></RevenueCards>
					<Overview></Overview>
				
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
						<div className=" drop-shadow-lg bg-white rounded-xl"><Activity></Activity></div>
						
						<div className=" drop-shadow-lg bg-white rounded-xl block"><PieStats></PieStats></div>
						<div className=" drop-shadow-lg bg-white rounded-xl"><Products></Products></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboards;
