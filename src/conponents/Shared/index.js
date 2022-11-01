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
import { HiOutlineMenuAlt1, HiChevronRight } from "react-icons/hi";
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
import ProPhoto from "../../images/pro_pic.png";
import UsFlag from "../../images/us.png";

export default function Header() {
	return (
		<>
			<div className="navbar pr-10 bg-gray-900 my-5 ml-5 rounded-l-xl">
				<div className="navbar-start">
					{/* <a className="btn btn-ghost normal-case text-xl text-white">FetPeo Inc</a> */}
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<p className="text-white text-2xl">
								<HiOutlineMenuAlt1 />
							</p>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-compact dropdown-content mt-3 p-3 shadow-xl bg-gray-800 text-gray-200 rounded-box w-52"
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
										<p class="text-sm leading-5">Dashboard</p>
									</div>
									<span className="">
										<HiChevronRight />
									</span>
								</a>
								<ul className="p-2 bg-slate-500">
									<li className="hover:text-white hover:bg-[#12013d] focus:text-white text-gray-400">
										<a>Ecommerce</a>
									</li>
									<li className="hover:text-white hover:bg-[#12013d] focus:text-white text-gray-400">
										<a>Sass</a>
									</li>
									<li className="hover:text-white hover:bg-[#12013d] focus:text-white text-gray-400">
										<a>Crypto</a>
									</li>
								</ul>
							</li>
							<li>
								<h2 className=" text-gray-600">Applications</h2>
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
										<p class="text-sm leading-5">Calendar</p>
									</div>
									<span className="">
										<HiChevronRight />
									</span>
								</a>
								<ul className="p-2 bg-slate-500">
									<li className="hover:text-white hover:bg-[#12013d]  focus:text-white text-gray-400">
										<a>Ecommerce</a>
									</li>
									<li className="hover:text-white hover:bg-[#12013d]  focus:text-white text-gray-400">
										<a>Sass</a>
									</li>
									<li className="hover:text-white hover:bg-[#12013d]  focus:text-white text-gray-400">
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
										<p class="text-sm leading-5">Chat</p>
									</div>
									<p>
										<small className="text-red-700 bg-red-100 rounded-full px-2">
											hot
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
											<BsFillFileEarmarkFill />
										</p>
										<p class="text-sm leading-5">File Manager</p>
									</div>
									<span className="">
										<HiChevronRight />
									</span>
								</a>
								<ul className="p-2 bg-slate-500">
									<li className="hover:text-white hover:bg-[#12013d]  focus:text-white text-gray-400">
										<a>Ecommerce</a>
									</li>
									<li className="hover:text-white hover:bg-[#12013d]  focus:text-white text-gray-400">
										<a>Sass</a>
									</li>
									<li className="hover:text-white hover:bg-[#12013d]  focus:text-white text-gray-400">
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
										<p class="text-sm leading-5">Ecommerce</p>
									</div>
									<span className="">
										<HiChevronRight />
									</span>
								</a>
								<ul className="p-2 bg-slate-500">
									<li className="hover:text-white hover:bg-[#12013d]  focus:text-white text-gray-400">
										<a>Ecommerce</a>
									</li>
									<li className="hover:text-white hover:bg-[#12013d]  focus:text-white text-gray-400">
										<a>Sass</a>
									</li>
									<li className="hover:text-white hover:bg-[#12013d]  focus:text-white text-gray-400">
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
										<p class="text-sm leading-5">Email</p>
									</div>
									<span className="">
										<HiChevronRight />
									</span>
								</a>
								<ul className="p-2 bg-slate-500">
									<li className="hover:text-white hover:bg-[#12013d]  focus:text-white text-gray-400">
										<a>Ecommerce</a>
									</li>
									<li className="hover:text-white hover:bg-[#12013d]  focus:text-white text-gray-400">
										<a>Sass</a>
									</li>
									<li className="hover:text-white hover:bg-[#12013d]  focus:text-white text-gray-400">
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
										<p class="text-sm leading-5">Invoices</p>
									</div>
									<span className="">
										<HiChevronRight />
									</span>
								</a>
								<ul className="p-2 bg-slate-500">
									<li className="hover:text-white hover:bg-[#12013d]  focus:text-white text-gray-400">
										<a>Ecommerce</a>
									</li>
									<li className="hover:text-white hover:bg-[#12013d]  focus:text-white text-gray-400">
										<a>Sass</a>
									</li>
									<li className="hover:text-white hover:bg-[#12013d]  focus:text-white text-gray-400">
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
										<p class="text-sm leading-5 ">Projects</p>
									</div>
									<span className="">
										<HiChevronRight />
									</span>
								</a>
								<ul className="p-2 bg-slate-500">
									<li className="hover:text-white hover:bg-[#12013d]  focus:text-white text-gray-400">
										<a>Ecommerce</a>
									</li>
									<li className="hover:text-white hover:bg-[#12013d]  focus:text-white text-gray-400">
										<a>Sass</a>
									</li>
									<li className="hover:text-white hover:bg-[#12013d]  focus:text-white text-gray-400">
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
										<p class="text-sm leading-5">Contacts</p>
									</div>
									<span className="">
										<HiChevronRight />
									</span>
								</a>
								<ul className="p-2 bg-slate-500">
									<li className="hover:text-white hover:bg-[#12013d]  focus:text-white text-gray-400">
										<a>Ecommerce</a>
									</li>
									<li className="hover:text-white hover:bg-[#12013d]  focus:text-white text-gray-400">
										<a>Sass</a>
									</li>
									<li className="hover:text-white hover:bg-[#12013d]  focus:text-white text-gray-400">
										<a>Crypto</a>
									</li>
								</ul>
							</li>
							<li>
								<small className=" text-gray-600">LAYOUTS</small>
							</li>
							<li>
								<small className=" text-gray-600">PAGES</small>
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
										<small className="text-white bg-blue-500 rounded-full px-2">
											8
										</small>
									</p>
								</a>
								<ul className="p-2 bg-slate-500">
									<li className="hover:text-white hover:bg-[#12013d]  focus:text-white text-gray-400">
										<a>Ecommerce</a>
									</li>
									<li className="hover:text-white hover:bg-[#12013d]  focus:text-white text-gray-400">
										<a>Sass</a>
									</li>
									<li className="hover:text-white hover:bg-[#12013d]  focus:text-white text-gray-400">
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
										<HiChevronRight />
									</span>
								</a>
								<ul className="p-2 bg-slate-500">
									<li className="hover:text-white hover:bg-[#12013d]  focus:text-white text-gray-400">
										<a>Ecommerce</a>
									</li>
									<li className="hover:text-white hover:bg-[#12013d] focus:text-white text-gray-400">
										<a>Sass</a>
									</li>
									<li className="hover:text-white hover:bg-[#12013d]  focus:text-white text-gray-400">
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
										<HiChevronRight />
									</span>
								</a>
								<ul className="p-2 bg-slate-500">
									<li className="hover:text-white hover:bg-[#12013d]  focus:text-white text-gray-400">
										<a>Ecommerce</a>
									</li>
									<li className="hover:text-white hover:bg-[#12013d]  focus:text-white text-gray-400">
										<a>Sass</a>
									</li>
									<li className="hover:text-white hover:bg-[#12013d]  focus:text-white text-gray-400">
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
										<HiChevronRight />
									</span>
								</a>
								<ul className="p-2 bg-slate-500">
									<li className="hover:text-white hover:bg-[#12013d]  focus:text-white text-gray-400">
										<a>Ecommerce</a>
									</li>
									<li className="hover:text-white hover:bg-[#12013d] focus:text-white text-gray-400">
										<a>Sass</a>
									</li>
									<li className="hover:text-white hover:bg-[#12013d]  focus:text-white text-gray-400">
										<a>Crypto</a>
									</li>
								</ul>
							</li>
						</ul>
					</div>
					<a className="text-center text-gray-200 p-5">
						<span className="py-1 px-3 uppercase font-bold">Dashboard</span>
					</a>
				</div>

				<div className="navbar-end gap-0">
					<button className="btn btn-ghost hidden sm:block btn-circle text-gray-200 text-lg pl-5">
						<p>
							<BsSearch />
						</p>
					</button>
					<label
						tabIndex={0}
						className="btn btn-ghost hidden sm:block btn-circle avatar"
					>
						<div className="w-7 h-4 mt-4 ml-3">
							<img src={UsFlag} />
						</div>
					</label>
					<button className="btn btn-ghost hidden sm:block btn-circle text-md text-gray-400">
						<div className="indicator">
							<p className="">
								<MdOutlineDashboard />
								{/* <GrProjects /> */}
							</p>
						</div>
					</button>
					<button className="btn btn-ghost btn-circle text-xl text-gray-400 pt-2">
						<div className="indicator">
							<p className="">
								<VscBellDot />
							</p>
							<span className="badge badge-xs badge-secondary indicator-item">
								4
							</span>
						</div>
					</button>
					<button className="btn btn-ghost hidden sm:block btn-circle text-lg text-gray-400">
						<div className="indicator">
							<p className="">
								<FiSettings />
							</p>
						</div>
					</button>
					<div tabIndex={0} className="btn btn-ghost btn-circle avatar">
						<div className="w-10 border-4 border-black rounded-full">
							<img src={ProPhoto} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
