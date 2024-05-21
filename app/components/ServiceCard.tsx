import { ReactElement } from "react";

type ServiceCardProps = {
  cardTitle: string;
  cardDescription: string;
  cardIcon: ReactElement;
};

const ServiceCard = ({
  cardTitle,
  cardDescription,
  cardIcon,
}: ServiceCardProps) => {
  return (
    <div className="flex items-start w-1/4">
      <div className=" text-3xl pr-3 text-principal">{cardIcon}</div>
      <div className="flex flex-col">
        <h2 className=" text-2xl opacity-90 whitespace-nowrap">{cardTitle}</h2>
        <p className=" mt-1 text-lg text-gray-500">{cardDescription}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
