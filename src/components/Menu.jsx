import React from "react";
import DishesCard from "../layouts/DishesCard";
import menu1 from "../assets/img/menu1.jpg";
import menu2 from "../assets/img/menu2.jpg";
import menu3 from "../assets/img/menu3.jpg";

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">
        Menu Premium
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
        <DishesCard
          img={menu1}
          title="Kebab Salmon Premium"
          price="Rp 90.000"
        />
        <DishesCard img={menu2} title="Nasi Goreng BBQ" price="Rp 76.000" />
        <DishesCard img={menu3} title="Brushcetta" price="Rp 99.000" />
      </div>
    </div>
  );
};

export default Menu;
