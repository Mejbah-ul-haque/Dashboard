import React from "react";
import ReactApexChart from "react-apexcharts";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import ProProto from "../../images/pro_pic.png";
// import background from "../../images/sunset-3689760_1280.png"

const Profile = () => {
	const series = [76];
	const options = {
		chart: {
			type: "radialBar",
			offsetY: -20,
			sparkline: {
				enabled: true,
			},
		},
		plotOptions: {
			radialBar: {
				startAngle: -90,
				endAngle: 90,
				track: {
					background: "#fff",
					strokeWidth: "97%",
					margin: 5, // margin is in pixels
					dropShadow: {
						enabled: true,
						top: 2,
						left: 0,
						color: "#000",
						opacity: 1,
						blur: 2,
					},
				},
				dataLabels: {
					name: {
						show: false,
					},
					value: {
						offsetY: -2,
						fontSize: "22px",
					},
				},
			},
		},
		grid: {
			padding: {
				top: -10,
			},
		},
		fill: {
			type: "gradient",
			gradient: {
				shade: "light",
				shadeIntensity: 0.4,
				inverseColors: false,
				opacityFrom: 1,
				opacityTo: 1,
				stops: [0, 50, 53, 91],
			},
		},
		labels: ["Average Results"],
	};
	// const myBackground = {
	// 	backgroundImage: `url(${background})`,

	// 	backgroundSize: "cover",
	// 	backgroundRepeat: "no-repeat",
	// 	opacity: ".2",
	// };

	return (
		<div>
			<div className="text-center mx-auto mb-5 bg-gray-900 text-gray-400">
				<div className=" ">
					<div className="">
						<div
							className="bg-blue-500 h-32 rounded-t-xl"
							style={{
								backgroundImage: `url("https://i.ibb.co/tZWvP3k/sunset-3689760-1280.png")`,
							}}
						></div>
					</div>

					<img
						className="w-24 rounded-full border-8 border-gray-900 mx-auto mt-[-50px]"
						src={ProProto}
					/>
					<h2 className="font-bold">Jennifer Bennett</h2>
					<p>
						<small>Product Designer</small>
					</p>
					<div className="flex justify-around mt-5 pb-5 border-b-2 border-black">
						<div>
							<h2 className="font-bold">1,269</h2>
							<p>
								<small>Products</small>
							</p>
						</div>
						<div>
							<h2 className="font-bold">5.2k</h2>
							<p>
								<small>Followers</small>
							</p>
						</div>
					</div>
					<div className="flex justify-between p-4">
						<h2 className="font-bold">Earning</h2>
						<p>
							<AiOutlineExclamationCircle />
						</p>
					</div>
				</div>
				<div>
					<ReactApexChart options={options} series={series} type="radialBar" />
				</div>
				<div className="border-b-2 border-black">
					<h2 className="font-bold">$26,256</h2>
					<p>
						<small>Earning this Month</small>
					</p>
					<p className="my-3">
						<span className="bg-gray-600 font-bold text-black rounded-full px-2 mr-5">
							+2.65%
						</span>
						<small>From previous period</small>{" "}
					</p>
				</div>
				<div className="p-4 text-left">
					<h2 className="font-bold text-left ">Recent Activity</h2>
					<div className="flex mt-5">
						<div className="bg-gray-700 px-2 rounded-xl mr-5">
							<h2 className="font-bold">12</h2>
              <p><small>Sep</small></p>
						</div>
						<p>
							<small>Responded to need "Volunteer Activities"</small>
						</p>
					</div>
					<div className="flex mt-5 2xl:hidden">
						<div className="bg-gray-700 px-2 rounded-xl mr-5">
							<h2 className="font-bold">11</h2>
              <p><small>Sep</small></p>
						</div>
						<p>
							<small>Everyone realizes would be desirable... <span className="text-blue-500">Read more</span></small>
						</p>
					</div>
					<div className="flex mt-5 2xl:hidden">
						<div className="bg-gray-700 px-2 rounded-xl mr-5">
							<h2 className="font-bold">10</h2>
              <p><small>Sep</small></p>
						</div>
						<p>
							<small>Everyone realizes would be desirable... <span className="text-blue-500">Read more</span></small>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
