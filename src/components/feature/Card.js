import Image from "next/image";
import React from "react";
import mobile from "@/assets/mobile.svg";
const Card = ({ title, text, image }) => {
  return (
    <div className="main-card">
      <div className="HL__features-box-container__box">
        <Image src={image} width={300} height={300} />
        <div className="HL__features-box-container__box-text">
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
