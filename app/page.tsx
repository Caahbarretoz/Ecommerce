import { TbShoppingCart } from "react-icons/tb";
import { PiMedal } from "react-icons/pi";
import { BsTag } from "react-icons/bs";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialLinkedin } from "react-icons/ti";

import ServiceCard from "./components/ServiceCard";
import SellingSection from "./components/SellingSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-screen mt-16">
      <section
        id="home"
        className="relative flex pt-16 bg-stone-950 w-full h-[700px]"
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
        <SellingSection sectionTitle="Apple" productType="appleProducts" />
        <SellingSection
          sectionTitle="Eletronic acessories"
          productType="eletronics"
        />
        <SellingSection sectionTitle="Jewelery" productType="jewelery" />
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
      <section className="grid grid-cols-4 justify-center gap-10 px-20">
        <div className="flex flex-col">
          <h1>Ecommerce©</h1>
          <p>
            Rem Lopsum dolor sit amet, consectetur adipi elit.Amet consectetur
            adipi elit loreme ipsum dolor sit.
          </p>
          <div className="flex">
            <a href="">
              <FaFacebookF />
            </a>
            <a href="">
              <FaInstagram />
            </a>
            <a href="">
              <FaXTwitter />
            </a>
            <a href="">
              <TiSocialLinkedin />
            </a>
            <a href="">
              <FaTiktok />
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h1>QUICK LINKS</h1>
          <h2>HOME</h2>
          <h2>ABOUT</h2>
          <h2>SHOP</h2>
          <h2>BLOGS</h2>
          <h2>CONTACT</h2>
        </div>
        <div className="flex flex-col">
          <h1>HELP & INFO HELP</h1>
          <h2>TRACK YOUR ORDER</h2>
          <h2>RETURNS POLICIES</h2>
          <h2>SHIPPING + DELIVERY</h2>
          <h2>CONTACT US</h2>
          <h2>FAQS</h2>
        </div>

        <div className="flex flex-col">
          <h2>contact us</h2>
          <div>
            <p>Do you have any queries or suggestions?</p>
            <span>yourinfo@gmail.com</span>
          </div>
          <div>
            <p>If you need support? Just give us a call.</p>
            <span>+55 111 222 333 44</span>
          </div>
        </div>
      </section>
      <footer></footer>
    </main>
  );
}
