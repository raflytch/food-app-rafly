import React, { useEffect } from "react";
import img from "../assets/img/sateabout.png";
import Button from "../layouts/Button";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1000,
    });
  }, []);

  return (
    <div
      className="h-fit my-32 flex flex-col gap-8 lg:flex-row justify-center items-center lg:px-32 px-5"
      data-aos="fade-up"
    >
      <img src={img} alt="img" className=" w-full lg:w-1/2" />

      <div className=" space-y-8 lg:pt-14">
        <h1 className=" font-semibold text-4xl text-center md:text-start">
          Kenapa Harus Memilih Kami?
        </h1>
        <p className="text-justify">
          Kami menawarkan berbagai pilihan menu dari berbagai jenis masakan,
          mulai dari masakan tradisional hingga internasional. Apapun selera dan
          kebutuhan Anda, kami memiliki sesuatu yang bisa memuaskan selera Anda.
        </p>
        <p className="text-justify">
          Nikmati berbagai promo dan diskon menarik setiap hari. Kami selalu
          berusaha memberikan penawaran terbaik untuk Anda, sehingga Anda bisa
          menikmati makanan favorit Anda dengan harga yang lebih terjangkau.
        </p>
        <div className=" flex justify-center lg:justify-start">
          <Button title="Selengkapnya" />
        </div>
      </div>
    </div>
  );
};

export default About;
