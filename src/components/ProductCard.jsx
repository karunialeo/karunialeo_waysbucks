import React from "react";
import { LogoBlack, LogoWhite } from "../exports/exportImages";

function ProductCard(props) {
  return (
    <div className="product-card rounded-md relative mb-10 lg:mb-0 w-80 lg:w-max bg-brand-pink">
      <div>
        <img src={props.image} alt="product-1" className="w-full" />
        <img
          src={LogoWhite}
          alt="logo"
          className="absolute top-36 lg:top-28 left-24 w-32 lg:w-20 lg:left-20"
        />
      </div>
      <div className="text-brand-red py-3 pl-4 ">
        <h5 className="font-bold">{props.name}</h5>
        <span>Rp {props.price}</span>
      </div>
    </div>
  );
}

export default ProductCard;
