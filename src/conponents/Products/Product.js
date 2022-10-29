import React from 'react';

const Product = ({product, index}) => {
  const {id, name, price, quantity} = product;
  return (
    <div>
      <div className=" flex justify-between items-end px-4 py-2  bg-base-100 rounded-xl">
				<div className="flex items-center">
					<div><p className=" bg-blue-400 text-xl  rounded-2xl text-white p-2 mr-2">#{index+1}</p></div>
					<div className="">
						<h2 className="font-bold text-slate-400"><small>{name}</small></h2>
						<h2 className="font-bold heading-1">${price}</h2>
					</div>
				</div>

				<div className="">
					<p className="bg-slate-100 text-slate-600 rounded-full py-0 px-2"><small>{quantity}</small></p>
				</div>
			</div>
    </div>
  );
};

export default Product;