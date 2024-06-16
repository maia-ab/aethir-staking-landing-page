"use client";

import Button from "./button";
import PricingGrid from "./pricingGrid";
import { useState } from "react";

type CardProps = {
  amount: number;
  heading: string;
  description: string;
};


function Card({ amount, heading, description }: CardProps) {
  const [isSelected, setIsSelected] = useState(false);
  
  const handleClick = () => {
    setIsSelected(!isSelected);
  };
  return (
    <div
      className={`p-10 rounded-xl space-y-6 ${isSelected ? "bg-green" : "hover:bg-[#F8FFCC]"} ${isSelected ? "hover:bg-green" : "bg-beige"}`}
      onClick={handleClick}
    >
      <h2 className="text-darkgreen text-6xl">
        {amount.toFixed(2)}
        <span className="text-2xl">ATH</span>
      </h2>
      <p className="text-xl">Staked</p>
      <h3 className="text-3xl w-[300px] h-[65px]">{heading}</h3>
      <p className="w-[300px]">{description}</p>

      <PricingGrid
        prices={[30, 60, 90, 180, 360]}
        percenteges={[30, 30, 30, 30, 30]}
      />
      <div className="flex justify-center">
        <Button
          style={{
            backgroundColor: `${isSelected ? "#496522" : "#C0E44C"}`,
            color: `${isSelected ? "white" : "#496522"}`,
            fontSize: "30px",
            borderRadius: "10px",
            padding: "10px 115px",
          }}
        >
          Explore
        </Button>
      </div>
    </div>
  );
}

export default Card;
