import React from "react";
import ReviewCard from "../layouts/ReviewCard";
import img1 from "../assets/img/pic1.png";
import img2 from "../assets/img/pic2.jpg";
import img3 from "../assets/img/pic3.webp";

const Review = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center md:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10">
        Review Pelanggan
      </h1>
      <div className=" flex flex-col md:flex-row gap-5 mt-5">
        <ReviewCard
          img={img1}
          name="Harry Kane"
          review="Saya baru saja mencoba beberapa hidangan dari aplikasi ini, dan saya sungguh terkesan! Setiap suapan memberikan pengalaman yang luar biasa, dengan perpaduan rasa yang sempurna dan presentasi yang menakjubkan. Tidak sabar untuk mencoba lebih banyak lagi!"
        />
        <ReviewCard
          img={img2}
          name="Jihyo Twice"
          review="Pengalaman memesan makanan melalui aplikasi ini sungguh menyenangkan. Pengiriman sangat cepat dan tepat waktu, bahkan pada jam sibuk sekalipun. Hidangan yang saya pesan juga sangat berkualitas, segar, dan lezat. Sangat merekomendasikan kepada semua pecinta kuliner!"
        />
        <ReviewCard
          img={img3}
          name="Lisa Blackpink"
          review="Saya sangat terkesan dengan berbagai pilihan menu yang tersedia di aplikasi ini. Mulai dari masakan lokal hingga internasional, semuanya terlihat menggiurkan! Setiap kali saya memesan, saya selalu menemukan sesuatu yang baru untuk dicoba. Aplikasi ini menjadi pilihan utama saya untuk memesan makanan."
        />
      </div>
    </div>
  );
};

export default Review;
