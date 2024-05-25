import React, { useEffect } from "react";
import Button from "../layouts/Button";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1000,
    });
  }, []);

  return (
    <div
      className="w-full min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/heroo.jpg')] bg-cover bg-no-repeat"
      data-aos="fade-right"
    >
      <div className="w-full md:w-1/2 lg:w-2/3 space-y-6">
        <h1 className="text-red-500 font-semibold text-5xl mt-32 md:mt-0">
          Meningkatkan Hasrat Kuliner Anda dengan Setiap Keharuman dan
          Kenikmatan.
        </h1>
        <p className="text-backgroundColor text-sm text-justify">
          Mari kita tingkatkan hasrat kuliner Anda dengan setiap keharuman dan
          kenikmatan yang kami hadirkan. Di sini, di platform kami, kami tidak
          sekadar menawarkan makanan, tetapi pengalaman kuliner yang menggugah
          selera. Setiap suapan adalah pintu gerbang menuju petualangan rasa
          yang tak terlupakan, di mana Anda dapat menjelajahi ragam cita rasa
          dari berbagai penjuru dunia. Dari sentuhan tradisional yang
          menghangatkan hati hingga kreasi modern yang memukau, setiap hidangan
          adalah kesempurnaan yang dipeluk oleh jiwa foodie dalam diri Anda.
          Jadikan setiap momen makan sebagai kesempatan untuk merayakan
          keberagaman kuliner dan menghargai keindahan yang tersembunyi dalam
          setiap hidangan yang Anda nikmati.
        </p>
        <div className="font-bold">
          <Button title="Order Now" margin="mb-10" />
        </div>
      </div>
    </div>
  );
};

export default Home;
