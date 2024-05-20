import React from "react";
import img1 from "../assets/img/sateayam.jpg";
import img2 from "../assets/img/nasi-padang.jpeg";
import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img4.jpg";
import img5 from "../assets/img/img5.jpg";
import img6 from "../assets/img/img6.jpg";
import img7 from "../assets/img/ayambakar.jpg";
import img8 from "../assets/img/ayamgoreng.jpg";
import img9 from "../assets/img/nasibebek.jpeg";
import DishesCard from "../layouts/DishesCard";

const Dishes = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center pt-24 pb-10">
        Produk Kami
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
        <DishesCard img={img1} title="Sate Ayam" price="Rp 54.000" />
        <DishesCard img={img2} title="Nasi Padang" price="Rp 60.000" />
        <DishesCard img={img3} title="Makaroni Pedas" price="Rp 48.000" />
        <DishesCard img={img4} title="Kebab Salmon" price="Rp 56.000" />
        <DishesCard img={img5} title="Nasi Goreng" price="Rp 42.000" />
        <DishesCard img={img6} title="Ikan Bakar" price="Rp 78.000" />
        <DishesCard img={img7} title="Nasi Bebek" price="Rp 76.000" />
        <DishesCard img={img8} title="Ayam Goreng" price="Rp 54.000" />
        <DishesCard img={img9} title="Ayam Bakar" price="Rp 76.000" />
      </div>
    </div>
  );
};

export default Dishes;
