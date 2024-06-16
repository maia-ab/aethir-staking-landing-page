"use client";

import Link from "next/link";
import Button from "./button";
import PricingGrid from "./pricingGrid";
import { useState } from "react";

type CardProps = {
  amount: number;
  heading: string;
  description: string;
  buttonLink?: string;
};

function Card({ amount, heading, description, buttonLink}: CardProps) {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };
  return (
    <div
      className={`w-[400px] p-10 rounded-xl space-y-6 ${
        isSelected ? "bg-green" : "hover:bg-[#F8FFCC]"
      } ${isSelected ? "hover:bg-green" : "bg-beige"}`}
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
      <div className="flex justify-center ">
        <Link href={buttonLink || "/"}>
          <Button
            className={`py-4 px-20 rounded-xl
            ${
              isSelected
                ? "bg-darkgreen hover:bg-[#5A772C] text-white"
                : "bg-green hover:bg-[#CEEA5C] text-darkgreen"
            }`}
          >
            Explore
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Card;
