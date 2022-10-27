import React from "react";
import {
	MdOutlineDashboard,
	MdBusinessCenter,
	MdKeyboardArrowUp,
	MdExpandMore,
	MdDoubleArrow,
} from "react-icons/md";
import { RiProjectorLine, RiContactsLine } from "react-icons/ri";
import { TbFileInvoice } from "react-icons/tb";
import { BiLayer } from "react-icons/bi";
import { VscBellDot } from "react-icons/vsc";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { FiSettings, FiBox } from "react-icons/fi";
import { GrProjects } from "react-icons/gr";
import {
	AiOutlineMail,
	AiOutlineForm,
	AiOutlineCodeSandbox,
} from "react-icons/ai";
import {
	BsFillCalendar2WeekFill,
	BsChatDots,
	BsFillFileEarmarkFill,
	BsWifi,
	BsSearch,
} from "react-icons/bs";

export default function Sidebar() {
	return (
		<>
			<div className="navbar bg-white">
				<div className="navbar-start">
					{/* <a className="btn btn-ghost normal-case text-xl text-white">FetPeo Inc</a> */}
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<p className="text-black text-2xl">
								<HiOutlineMenuAlt1 />
							</p>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-compact dropdown-content mt-3 p-2 shadow text-white bg-gray-900 rounded-box w-52"
						>
							<li className="text-gray-400">
								<a>Menu</a>
							</li>
							<li
								tabIndex={0}
								className="hover:text-white focus:text-white text-white"
							>
								<a className="justify-between">
									<div className="flex justify-center items-center">
										<p className=" mr-2">
											<MdOutlineDashboard />
										</p>
										<p class="text-sm leading-5  uppercase ">Dashboard</p>
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
								<h2 className="mb-4 text-gray-600 mt-5">Applications</h2>
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
										<p class="text-sm leading-5  uppercase ">Calendar</p>
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
										<p class="text-sm leading-5  uppercase ">Chat</p>
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
										<p class="text-sm leading-5  uppercase ">File Manager</p>
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
										<p class="text-sm leading-5  uppercase ">Ecommerce</p>
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
										<p class="text-sm leading-5  uppercase ">Email</p>
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
										<p class="text-sm leading-5  uppercase ">Invoices</p>
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
										<p class="text-sm leading-5  uppercase ">Projects</p>
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
										<p class="text-sm leading-5  uppercase ">Contacts</p>
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
								<h2 className="mb-4 text-gray-600 mt-5">LAYOUTS</h2>
							</li>
							<li>
								<h2 className="mb-4 text-gray-600 mt-5">PAGES</h2>
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
										<p class="text-sm leading-5 ">Authentication</p>
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
								<h2 className="mb-4 text-gray-600 mt-5 uppercase">
									Components
								</h2>
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
										<p class="text-sm leading-5">UI Elements</p>
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
										<p class="text-sm leading-5">Forms</p>
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
					<a className="text-center text-black p-5 lg:ml-[250px]">
						<span className="py-1 px-3 uppercase">Dashboard</span>
					</a>
				</div>

				<div className="navbar-end">
					<button className="btn btn-ghost hidden sm:block btn-circle text-black text-xl">
						<p>
							<BsSearch />
						</p>
					</button>
					<label tabIndex={0} className="btn btn-ghost hidden sm:block btn-circle avatar">
						<div className="w-10 h-6 mt-2">
							<img src="https://i.ibb.co/nzMfnQN/us.png" />
						</div>
					</label>
					<button className="btn btn-ghost  hidden sm:block btn-circle text-xl text-black">
						<div className="indicator">
							<p className="">
								<GrProjects />
							</p>
							
						</div>
					</button>
					<button className="btn btn-ghost btn-circle text-xl text-black">
						<div className="indicator">
							<p className="">
								<VscBellDot />
							</p>
							<span className="badge badge-xs badge-secondary indicator-item">4</span>
						</div>
					</button>
					<button className="btn btn-ghost hidden sm:block btn-circle text-xl text-black">
						<div className="indicator">
							<p className="">
								<FiSettings />
							</p>
						</div>
					</button>
					<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
						<div className="w-10 rounded-full">
							<img src="https://i.ibb.co/9c5Bjmm/pro-pic.png" />
						</div>
					</label>
				</div>
			</div>
		</>
	);
}
