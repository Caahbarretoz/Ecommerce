import { TbShoppingCart } from "react-icons/tb";
import { PiMedal } from "react-icons/pi";
import { BsTag } from "react-icons/bs";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import ServiceCard from "./components/ServiceCard";
import SellingSection from "./components/SellingSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-screen mt-16">
      <div className="relative flex pt-16 bg-stone-950 w-full h-[700px]">
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
      </div>
      <div
        id="second-section"
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
      </div>
      <div className="flex flex-col w-full">
        <SellingSection sectionTitle="Apple" productType="appleProducts" />
        <SellingSection
          sectionTitle="Eletronic acessories"
          productType="eletronics"
        />
      </div>
    </main>
  );
}
