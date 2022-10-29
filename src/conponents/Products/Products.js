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
		<div className="p-3">
			<div className="flex justify-between">
				<h2 className="font-bold">Top Product</h2>
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
						className="dropdown-content menu p-2 drop-shadow-lg bg-base-100 rounded-box w-[140px]"
					>
						<li>
							<a>January</a>
						</li>
						<li>
							<a>February</a>
						</li>
						<li>
							<a>March</a>
						</li>
						<li>
							<a>April</a>
						</li>
						<li>
							<a>May</a>
						</li>
						<li>
							<a>June</a>
						</li>
						<li>
							<a>July</a>
						</li>
						<li>
							<a>August</a>
						</li>
						<li>
							<a>September</a>
						</li>
						<li>
							<a>October</a>
						</li>
						<li>
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
