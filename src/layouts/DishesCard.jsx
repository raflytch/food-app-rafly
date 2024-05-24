import React, { useEffect } from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import Button from "../layouts/Button";
import Aos from "aos";
import "aos/dist/aos.css";

const DishesCard = ({ img, title, price }) => {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1000,
    });
  }, []);

  return (
    <div
      className=" w-full lg:w-1/4 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg"
      data-aos="fade-right"
    >
      <img className=" rounded-xl h-[300px] object-cover" src={img} alt="img" />
      <div className=" space-y-4">
        <h3 className=" font-semibold text-center text-xl pt-6">{title}</h3>
        <div className=" flex flex-row justify-center">
          <BsStarFill className=" text-brightColor" />
          <BsStarFill className=" text-brightColor" />
          <BsStarFill className=" text-brightColor" />
          <BsStarFill className=" text-brightColor" />
          <BsStarHalf className=" text-brightColor" />
        </div>
        <div className=" flex flex-row items-center justify-center gap-4">
          <h3 className=" font-semibold text-lg">{price}</h3>
          <Button title="Beli" />
        </div>
      </div>
    </div>
  );
};

export default DishesCard;
