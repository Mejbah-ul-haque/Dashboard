import React from "react";
import { AiOutlineForm, AiOutlineMail } from "react-icons/ai";
import { BiLayer } from "react-icons/bi";
import {
	BsChatDots,
	BsFillCalendar2WeekFill,
	BsFillFileEarmarkFill,
	BsWifi,
} from "react-icons/bs";
import {
	MdBusinessCenter,
	MdDoubleArrow,
	MdOutlineDashboard,
  MdKeyboardArrowUp,
} from "react-icons/md";
import { RiContactsLine, RiProjectorLine } from "react-icons/ri";
import { TbFileInvoice } from "react-icons/tb";
import { FiBox } from "react-icons/fi";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
	return (
		<div className="drawer drawer-mobile lg:mt-[-80px]">
			<input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content">
				<Outlet></Outlet>
			</div>
			<div className="drawer-side">
				<label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
				<ul className="menu overflow-y-auto w-64 text-base-content bg-gray-900">
					{/* <!-- Sidebar content here --> */}
					<li className="text-gray-400">
						<a>Menu</a>
					</li>
					<li className="hover:text-white focus:text-white text-white">
						<a className="justify-between">
							<div className="flex justify-center items-center">
								<p className=" mr-2">
									<MdOutlineDashboard />
								</p>
								<p class="text-sm leading-3">Dashboard</p>
							</div>
							<span className="">
								<MdDoubleArrow />
							</span>
						</a>
						<ul className="p-2 bg-slate-500 ">
							<li className="hover:text-white hover:bg-gray-900 focus:text-white text-gray-400">
								<a>Ecommerce</a>
							</li>
							<li className="hover:text-white hover:bg-gray-900 focus:text-white text-gray-400">
								<a>Sass</a>
							</li>
							<li className="hover:text-white hover:bg-gray-900 focus:text-white text-gray-400">
								<a>Crypto</a>
							</li>
						</ul>
					</li>
					<li>
						<h2 className=" text-gray-600 leading-3">Applications</h2>
					</li>
					<li
						tabIndex={0}
						className="hover:text-white focus:text-white text-gray-400"
					>
						<a className="justify-between">
							<div className="flex justify-center items-center">
								<p className=" mr-2">
									<BsFillCalendar2WeekFill />
								</p>
								<p class="text-sm leading-3">Calendar</p>
							</div>
							<span className="">
								<MdDoubleArrow />
							</span>
						</a>
						<ul className="p-2 bg-slate-500">
							<li className="hover:text-white hover:bg-gray-900 focus:text-white text-gray-400">
								<a>Ecommerce</a>
							</li>
							<li className="hover:text-white hover:bg-gray-900 focus:text-white text-gray-400">
								<a>Sass</a>
							</li>
							<li className="hover:text-white hover:bg-gray-900 focus:text-white text-gray-400">
								<a>Crypto</a>
							</li>
						</ul>
					</li>
					<li
						tabIndex={0}
						className="hover:text-white focus:text-white text-gray-400"
					>
						<a className="justify-between">
							<div className="flex justify-center items-center">
								<p className=" mr-2">
									<BsChatDots />
								</p>
								<p class="text-sm leading-3">Chat</p>
							</div>
							<p>
								<span className="text-red-700 bg-red-100 rounded-full px-2">
									hot
								</span>
							</p>
						</a>
					</li>
					<li
						tabIndex={0}
						className="hover:text-white focus:text-white text-gray-400"
					>
						<a className="justify-between">
							<div className="flex justify-center items-center">
								<p className=" mr-2">
									<BsFillFileEarmarkFill />
								</p>
								<p class="text-sm leading-3">File Manager</p>
							</div>
							<span className="">
								<MdDoubleArrow />
							</span>
						</a>
						<ul className="p-2 bg-slate-500">
							<li className="hover:text-white hover:bg-gray-900 focus:text-white text-gray-400">
								<a>Ecommerce</a>
							</li>
							<li className="hover:text-white hover:bg-gray-900 focus:text-white text-gray-400">
								<a>Sass</a>
							</li>
							<li className="hover:text-white hover:bg-gray-900 focus:text-white text-gray-400">
								<a>Crypto</a>
							</li>
						</ul>
					</li>
					<li
						tabIndex={0}
						className="hover:text-white focus:text-white text-gray-400"
					>
						<a className="justify-between">
							<div className="flex justify-center items-center">
								<p className=" mr-2">
									<MdBusinessCenter />
								</p>
								<p class="text-sm leading-3">Ecommerce</p>
							</div>
							<span className="">
								<MdDoubleArrow />
							</span>
						</a>
						<ul className="p-2 bg-slate-500">
							<li className="hover:text-white hover:bg-gray-900 focus:text-white text-gray-400">
								<a>Ecommerce</a>
							</li>
							<li className="hover:text-white hover:bg-gray-900 focus:text-white text-gray-400">
								<a>Sass</a>
							</li>
							<li className="hover:text-white hover:bg-gray-900 focus:text-white text-gray-400">
								<a>Crypto</a>
							</li>
						</ul>
					</li>
					<li
						tabIndex={0}
						className="hover:text-white focus:text-white text-gray-400"
					>
						<a className="justify-between">
							<div className="flex justify-center items-center">
								<p className=" mr-2">
									<AiOutlineMail />
								</p>
								<p class="text-sm leading-3">Email</p>
							</div>
							<span className="">
								<MdDoubleArrow />
							</span>
						</a>
						<ul className="p-2 bg-slate-500">
							<li className="hover:text-white hover:bg-gray-900 focus:text-white text-gray-400">
								<a>Ecommerce</a>
							</li>
							<li className="hover:text-white hover:bg-gray-900 focus:text-white text-gray-400">
								<a>Sass</a>
							</li>
							<li className="hover:text-white hover:bg-gray-900 focus:text-white text-gray-400">
								<a>Crypto</a>
							</li>
						</ul>
					</li>
					<li
						tabIndex={0}
						className="hover:text-white focus:text-white text-gray-400"
					>
						<a className="justify-between">
							<div className="flex justify-center items-center">
								<p className=" mr-2">
									<TbFileInvoice />
								</p>
								<p class="text-sm leading-3">Invoices</p>
							</div>
							<span className="">
								<MdDoubleArrow />
							</span>
						</a>
						<ul className="p-2 bg-slate-500">
							<li className="hover:text-white hover:bg-gray-900 focus:text-white text-gray-400">
								<a>Ecommerce</a>
							</li>
							<li className="hover:text-white hover:bg-gray-900 focus:text-white text-gray-400">
								<a>Sass</a>
							</li>
							<li className="hover:text-white hover:bg-gray-900 focus:text-white text-gray-400">
								<a>Crypto</a>
							</li>
						</ul>
					</li>
					<li
						tabIndex={0}
						className="hover:text-white focus:text-white text-gray-400"
					>
						<a className="justify-between">
							<div className="flex justify-center items-center">
								<p className=" mr-2">
									<RiProjectorLine />
								</p>
								<p class="text-sm leading-3">Projects</p>
							</div>
							<span className="">
								<MdDoubleArrow />
							</span>
						</a>
						<ul className="p-2 bg-slate-500">
							<li className="hover:text-white hover:bg-gray-900 focus:text-white text-gray-400">
								<a>Ecommerce</a>
							</li>
							<li className="hover:text-white hover:bg-gray-900 focus:text-white text-gray-400">
								<a>Sass</a>
							</li>
							<li className="hover:text-white hover:bg-gray-900 focus:text-white text-gray-400">
								<a>Crypto</a>
							</li>
						</ul>
					</li>
					<li
						tabIndex={0}
						className="hover:text-white focus:text-white text-gray-400"
					>
						<a className="justify-between">
							<div className="flex justify-center items-center">
								<p className=" mr-2">
									<BsWifi />
								</p>
								<p class="text-sm leading-3">Contacts</p>
							</div>
							<span className="">
								<MdDoubleArrow />
							</span>
						</a>
						<ul className="p-2 bg-slate-500">
							<li className="hover:text-white hover:bg-gray-900 focus:text-white text-gray-400">
								<a>Ecommerce</a>
							</li>
							<li className="hover:text-white hover:bg-gray-900 focus:text-white text-gray-400">
								<a>Sass</a>
							</li>
							<li className="hover:text-white hover:bg-gray-900 focus:text-white text-gray-400">
								<a>Crypto</a>
							</li>
						</ul>
					</li>
					<li>
						<h2 className="text-gray-600 leading-3">LAYOUTS</h2>
					</li>
					<li>
						<h2 className="text-gray-600 leading-3">PAGES</h2>
					</li>
					<li
						tabIndex={0}
						className="hover:text-white focus:text-white text-gray-400"
					>
						<a className="justify-between">
							<div className="flex justify-center items-center">
								<p className=" mr-2">
									<RiContactsLine />
								</p>
								<p class="text-sm leading-3 ">Authentication</p>
							</div>
							<p>
								<span className="text-white bg-blue-500 rounded-full px-2">
									8
								</span>
							</p>
						</a>
						<ul className="p-2 bg-slate-500">
							<li className="hover:text-white hover:bg-gray-900 focus:text-white text-gray-400">
								<a>Ecommerce</a>
							</li>
							<li className="hover:text-white hover:bg-gray-900 focus:text-white text-gray-400">
								<a>Sass</a>
							</li>
							<li className="hover:text-white hover:bg-gray-900 focus:text-white text-gray-400">
								<a>Crypto</a>
							</li>
						</ul>
					</li>
					<li
						tabIndex={0}
						className="hover:text-white focus:text-white text-gray-400"
					>
						<a className="justify-between">
							<div className="flex justify-center items-center">
								<p className=" mr-2">
									<FiBox />
								</p>
								<p class="text-sm leading-5">Utility</p>
							</div>
							<span className="">
								<MdDoubleArrow />
							</span>
						</a>
						<ul className="p-2 bg-slate-500">
							<li className="hover:text-white hover:bg-gray-900 focus:text-white text-gray-400">
								<a>Ecommerce</a>
							</li>
							<li className="hover:text-white hover:bg-gray-900 focus:text-white text-gray-400">
								<a>Sass</a>
							</li>
							<li className="hover:text-white hover:bg-gray-900 focus:text-white text-gray-400">
								<a>Crypto</a>
							</li>
						</ul>
					</li>
					<li>
						<h2 className="text-gray-600 uppercase">Components</h2>
					</li>
					<li
						tabIndex={0}
						className="hover:text-white focus:text-white text-gray-400"
					>
						<a className="justify-between">
							<div className="flex justify-center items-center">
								<p className=" mr-2">
									<BiLayer />
								</p>
								<p class="text-sm leading-2">UI Elements</p>
							</div>
							<span className="">
								<MdDoubleArrow />
							</span>
						</a>
						<ul className="p-2 bg-slate-500">
							<li className="hover:text-white hover:bg-gray-900 focus:text-white text-gray-400">
								<a>Ecommerce</a>
							</li>
							<li className="hover:text-white hover:bg-gray-900 focus:text-white text-gray-400">
								<a>Sass</a>
							</li>
							<li className="hover:text-white hover:bg-gray-900 focus:text-white text-gray-400">
								<a>Crypto</a>
							</li>
						</ul>
					</li>
					<li
						tabIndex={0}
						className="hover:text-white focus:text-white text-gray-400"
					>
						<a className="justify-between">
							<div className="flex justify-center items-center">
								<p className=" mr-2">
									<AiOutlineForm />
								</p>
								<p class="text-sm leading-2">Forms</p>
							</div>
							<span className="">
								<MdDoubleArrow />
							</span>
						</a>
						<ul className="p-2 bg-slate-500">
							<li className="hover:text-white hover:bg-gray-900 focus:text-white text-gray-400">
								<a>Ecommerce</a>
							</li>
							<li className="hover:text-white hover:bg-gray-900 focus:text-white text-gray-400">
								<a>Sass</a>
							</li>
							<li className="hover:text-white hover:bg-gray-900 focus:text-white text-gray-400">
								<a>Crypto</a>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Dashboard;
