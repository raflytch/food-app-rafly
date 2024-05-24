import React, { useEffect } from "react";
import { BsStarFill } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";

const ReviewCard = ({ img, name, review }) => {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1000,
    });
  });

  return (
    <div
      className=" flex flex-col gap-5 w-full md:w-1/3 bg-white border-2 border-lightText md:border-none p-5 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
      data-aos="fade-right"
    >
      <div>
        <p className=" text-lightText text-justify">{review}</p>
      </div>
      <div className=" flex flex-row justify-between items-center">
        <div className=" flex flex-row">
          <BsStarFill className=" text-brightColor" />
          <BsStarFill className=" text-brightColor" />
          <BsStarFill className=" text-brightColor" />
          <BsStarFill className=" text-brightColor" />
          <BsStarFill className=" text-brightColor" />
        </div>
        <div className=" flex flex-row justify-center items-center mt-4 gap-4">
          <img
            className=" rounded-full h-[80px] object-cover "
            src={img}
            alt="img"
          />
          <h3 className=" font-semibold ">{name}</h3>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
