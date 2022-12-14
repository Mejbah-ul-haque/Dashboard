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
import { HiChevronDown } from "react-icons/hi";
import { Link, Outlet } from "react-router-dom";
import Header from "../Shared";

const Layout = () => {
	return (
		<div className="drawer drawer-mobile">
			<input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content mx-0 p-0">
				<div className="">
					<Header></Header>
				</div>
				<div className="px-5">
					<Outlet></Outlet>
				</div>
			</div>
			<div className="drawer-side">
				<label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
				<ul className="menu overflow-y-auto w-56 text-base-content bg-gray-900 px-2">
					<li className="text-gray-500">
						<a className="text-center mx-auto border-4 mt-[-10px] border-black rounded-full">Menu</a>
					</li>
					<div tabIndex={0} className="collapse collapse-arrow">
						<div className="collapse-title text-white">
							<p className="flex justify-center items-center">
								<MdOutlineDashboard />
								<p class="text-sm leading-3 ml-2">
									<Link to="/">Dashboard</Link>
								</p>
							</p>
						</div>
						<div className="collapse-content">
							<p className="hover:text-white focus:text-white text-gray-400 cursor-pointer pl-10 py-0">
								<small>Ecommerce</small>
							</p>
							<p className="hover:text-white focus:text-white text-gray-400 cursor-pointer pl-10 py-0">
								<small>Sass</small>
							</p>
							<p className="hover:text-white focus:text-white text-gray-400 cursor-pointer pl-10 py-0">
								<small>Crypto</small>
							</p>
						</div>
					</div>

					<li>
						<h2 className=" text-gray-600 leading-3">Applications</h2>
					</li>

					<li className="hover:text-white focus:text-white text-gray-400">
						<a className="flex justify-between">
							<div className="flex justify-center items-center">
								<BsFillCalendar2WeekFill />
								<p class="text-sm leading-3 ml-2">Calendar</p>
							</div>
							<span className="">
								<HiChevronDown />
							</span>
						</a>
					</li>
					<li className="hover:text-white focus:text-white text-gray-400">
						<a className="justify-between">
							<div className="flex justify-center items-center">
								<p className=" mr-2">
									<BsChatDots />
								</p>
								<p class="text-sm leading-3">Chat</p>
							</div>
							<p>
								<small className="text-white bg-secondary rounded-full px-2">
									hot
								</small>
							</p>
						</a>
					</li>
					<li className="hover:text-white focus:text-white text-gray-400">
						<a className="justify-between">
							<div className="flex justify-center items-center">
								<p className=" mr-2">
									<BsFillFileEarmarkFill />
								</p>
								<p class="text-sm leading-3">File Manager</p>
							</div>
							<span className="">
								<HiChevronDown />
							</span>
						</a>
					</li>
					<li className="hover:text-white focus:text-white text-gray-400">
						<a className="justify-between">
							<div className="flex justify-center items-center">
								<p className=" mr-2">
									<MdBusinessCenter />
								</p>
								<p class="text-sm leading-3">Ecommerce</p>
							</div>
							<span className="">
								<HiChevronDown />
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
					<li className="hover:text-white focus:text-white text-gray-400">
						<a className="justify-between">
							<div className="flex justify-center items-center">
								<p className=" mr-2">
									<AiOutlineMail />
								</p>
								<p class="text-sm leading-3">Email</p>
							</div>
							<span className="">
								<HiChevronDown />
							</span>
						</a>
					</li>
					<li className="hover:text-white focus:text-white text-gray-400">
						<a className="justify-between">
							<div className="flex justify-center items-center">
								<p className=" mr-2">
									<TbFileInvoice />
								</p>
								<p class="text-sm leading-3">Invoices</p>
							</div>
							<span className="">
								<HiChevronDown />
							</span>
						</a>
					</li>
					<li className="hover:text-white focus:text-white text-gray-400">
						<a className="justify-between">
							<div className="flex justify-center items-center">
								<p className=" mr-2">
									<RiProjectorLine />
								</p>
								<p class="text-sm leading-3">Projects</p>
							</div>
							<span className="">
								<HiChevronDown />
							</span>
						</a>
					</li>
					<li className="hover:text-white focus:text-white text-gray-400">
						<a className="justify-between">
							<div className="flex justify-center items-center">
								<p className=" mr-2">
									<BsWifi />
								</p>
								<p class="text-sm leading-3">Contacts</p>
							</div>
							<span className="">
								<HiChevronDown />
							</span>
						</a>
					</li>
					<li>
						<small className="text-gray-700 leading-3 font-bold">LAYOUTS</small>
					</li>
					<li>
						<small className="text-gray-700 leading-3 font-bold">PAGES</small>
					</li>
					<li className="hover:text-white focus:text-white text-gray-400">
						<a className="justify-between">
							<div className="flex justify-center items-center">
								<p className=" mr-2">
									<RiContactsLine />
								</p>
								<p class="text-sm leading-3 ">Authentication</p>
							</div>
							<p>
								<small className="text-white bg-blue-500 rounded-full px-2">
									8
								</small>
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
									<FiBox />
								</p>
								<p class="text-sm leading-5">Utility</p>
							</div>
							<span className="">
								<HiChevronDown />
							</span>
						</a>
					</li>
					<li>
						<small className="text-gray-700 uppercase font-bold">
							Components
						</small>
					</li>
					<li className="hover:text-white focus:text-white text-gray-400">
						<a className="justify-between">
							<div className="flex justify-center items-center">
								<p className=" mr-2">
									<BiLayer />
								</p>
								<p class="text-sm leading-2">UI Elements</p>
							</div>
							<span className="">
								<HiChevronDown />
							</span>
						</a>
					</li>
					<li className="hover:text-white focus:text-white text-gray-400">
						<a className="justify-between">
							<div className="flex justify-center items-center">
								<p className=" mr-2">
									<AiOutlineForm />
								</p>
								<p class="text-sm leading-2">Forms</p>
							</div>
							<span className="">
								<HiChevronDown />
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

export default Layout;
