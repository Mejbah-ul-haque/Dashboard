import React from 'react';
import RevenueCard from './RevenueCard';
import { HiChartPie } from "react-icons/hi";
import { BsFillBagCheckFill, BsFillPeopleFill } from "react-icons/bs";

const RevenueCards = () => {
  const items= [
    {id : 1, name:'Revenue', icon:<HiChartPie />, quantity: "$21,456", percentage: "+2.65"},
    {id : 2, name:'Orders', icon: <BsFillBagCheckFill />, quantity: "5,643", percentage: "-0.82"},
    {id : 3, name:'Customers', icon:<BsFillPeopleFill />, quantity: "45,254", percentage: "-1.04"}
  ]
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {
          items.map((item) => (
            <RevenueCard key={item.id} item={item}></RevenueCard>
          ))
        }
      </div>
    </div>
  );
};

export default RevenueCards;