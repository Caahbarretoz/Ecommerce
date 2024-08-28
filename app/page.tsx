import { TbShoppingCart } from "react-icons/tb";
import { PiMedal } from "react-icons/pi";
import { BsTag } from "react-icons/bs";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialLinkedin } from "react-icons/ti";

import ServiceCard from "./components/ServiceCard";
import Image from "next/image";
import ParentSellingSection from "./components/ParentSellingSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-screen mt-16">
      <section
        id="home"
        className="relative flex pt-16 bg-stone-950 w-full h-screen"
      >
        <h1 className="text-gradient w-1/2 text-9xl pl-10">
          YOUR <br /> PRODUCTS <br /> ARE <br /> GREAT.
        </h1>
        <Image
          className="absolute top-20 right-[28rem]"
          src={"/assets/goldIphone.png"}
          alt=""
          width={250}
          height={150}
        />
        <Image
          className="absolute top-3 -right-20"
          src={"/assets/iphones.png"}
          alt=""
          width={600}
          height={400}
        />
      </section>
      <section
        id="services"
        className="flex items-center bg-white justify-center w-full px-[5%] h-72 space-x-10"
      >
        <ServiceCard
          cardTitle="FREE DELIVERY"
          cardDescription="Consectetur adipi elit lorem ipsum dolor sit amet."
          cardIcon={<TbShoppingCart />}
        />
        <ServiceCard
          cardTitle="QUALITY GUARANTEE"
          cardDescription="Dolor sit amet orem ipsu mcons ectetur adipi elit."
          cardIcon={<PiMedal />}
        />
        <ServiceCard
          cardTitle="DAILY OFFERS"
          cardDescription="Amet consectetur adipi elit loreme ipsum dolor sit."
          cardIcon={<BsTag />}
        />
        <ServiceCard
          cardTitle="100% SECURE PAYMENT"
          cardDescription="Rem Lopsum dolor sit amet, consectetur adipi elit."
          cardIcon={<AiOutlineSafetyCertificate />}
        />
      </section>
      <section id="products" className="flex flex-col w-full">
        <ParentSellingSection />
      </section>
      <section
        id="sale"
        className="relative flex justify-center items-center mt-10 bg-gray-50 w-full h-[700px]"
      >
        <h1 className="absolute top-40 text-black font-bold text-[13rem] ">
          AirPods Max
        </h1>
        <Image
          className="absolute left-36 bottom-10"
          src={"/assets/airpodblue.png"}
          alt=""
          width={410}
          height={150}
        />
        <Image
          className="absolute left-[39%] bottom-10"
          src={"/assets/airpodwhite.png"}
          alt=""
          width={410}
          height={150}
        />
        <Image
          className="absolute left-[59%] -bottom-5"
          src={"/assets/airpodpink.png"}
          alt=""
          width={570}
          height={150}
        />
        <button className="absolute right-12 top-12 text-white px-8 py-3 bg-black">
          SHOP SALE
        </button>
      </section>
      <section
        id="contact"
        className="grid grid-cols-4 justify-center items-start opacity-70 gap-10 px-20 py-8 h-60"
      >
        <div className="flex flex-col gap-4">
          <h1 className="text-gradient font-bold text-3xl">
            Ecommerce<span className="text-xs">©</span>
          </h1>
          <p className="text-gray-600">
            Rem Lopsum, consectetur adipi elit.Amet consectetur adipi elit
            loreme ipsum dolor sit.
          </p>
          <div className="flex items-center gap-6 text-gray-800 text-lg">
            <a href="">
              <FaFacebookF />
            </a>
            <a href="">
              <FaInstagram />
            </a>
            <a href="">
              <FaXTwitter />
            </a>
            <a href="" className="text-2xl">
              <TiSocialLinkedin />
            </a>
            <a href="">
              <FaTiktok />
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="font-bold text-xl">QUICK LINKS</h1>
          <div className="mt-3 flex flex-col leading-7">
            <a>HOME</a>
            <a>ABOUT</a>
            <a>SHOP</a>
            <a>BLOGS</a>
            <a>CONTACT</a>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="font-bold text-xl">HELP & INFO HELP</h1>
          <div className="mt-3 flex flex-col leading-7">
            <a>TRACK YOUR ORDER</a>
            <a>RETURNS POLICIES</a>
            <a>SHIPPING + DELIVERY</a>
            <a>CONTACT US</a>
            <a>FAQS</a>
          </div>
        </div>

        <div className="flex flex-col leading-7 gap-4">
          <h1 className="font-bold text-xl uppercase">contact us</h1>
          <div className="text-nowrap">
            <p className="text-gray-600">
              Do you have any queries or suggestions?
            </p>
            <span>yourinfo@gmail.com</span>
          </div>
          <div className="text-base text-nowrap">
            <p className="text-gray-600">
              If you need support? Just give us a call.
            </p>
            <span>+55 111 222 333 44</span>
          </div>
        </div>
      </section>
      <footer className="flex w-full items-center justify-center py-4 border-t-2 border-gray-300 text-gray-500">
        &copy; Copyright 2024 Caahbarretoz. All rights reserved.
      </footer>
    </main>
  );
}
