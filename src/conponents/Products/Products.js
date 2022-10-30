import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import Product from "./Product";

const Products = () => {
  
  const Products=[
    {id: 1, name:"Polo T-shirt", price: 25.4, quantity: "3.8k"},
    {id: 2, name:"Hoodie for man", price: 24.5, quantity: "3.14k"},
    {id: 3, name:"Red color cap", price: 22.5, quantity: "2.48k"},
    {id: 4, name:"Pocket T-shirt", price: 27.5, quantity: "2.06k"},
  ]
	return (
		<div className="p-4">
			<div className="flex justify-between">
				<h2 className="text-error uppercase"><small>Top Product</small></h2>
				<div className="dropdown">
					<label tabIndex={0} className="flex items-center m-1">
						<p>
							<span className="text-slate-400 mr-2">Monthly</span>{" "}
						</p>
						<p className="pt-0">
							<MdKeyboardArrowDown />
						</p>
					</label>
					<ul
						tabIndex={0}
						className="dropdown-content menu p-2 drop-shadow-lg bg-gray-800 rounded-box w-[140px]"
					>
						<li className="border-b-2 border-black">
							<a>January</a>
						</li>
						<li className="border-b-2 border-black">
							<a>February</a>
						</li>
						<li className="border-b-2 border-black">
							<a>March</a>
						</li>
						<li className="border-b-2 border-black">
							<a>April</a>
						</li>
						<li className="border-b-2 border-black">
							<a>May</a>
						</li>
						<li className="border-b-2 border-black">
							<a>June</a>
						</li>
						<li className="border-b-2 border-black">
							<a>July</a>
						</li>
						<li className="border-b-2 border-black">
							<a>August</a>
						</li>
						<li className="border-b-2 border-black">
							<a>September</a>
						</li>
						<li className="border-b-2 border-black">
							<a>October</a>
						</li>
						<li className="border-b-2 border-black">
							<a>November</a>
						</li>
						<li>
							<a>December</a>
						</li>
					</ul>
				</div>
			</div>
      <div>
        {
          Products.map((product, index) => (
            <Product key={product.id} product={product} index={index}></Product>
          ))
        }
      </div>
		</div>
	);
};

export default Products;
