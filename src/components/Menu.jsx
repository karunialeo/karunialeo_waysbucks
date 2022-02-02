import React from "react";
import ProductCard from "./ProductCard";

function Menu() {
  return (
    <div className="mx-4 lg:mx-32 my-2 lg:my-10 relative">
      <h1 className="text-5xl mb-10 lg:mb-10 text-brand-red font-extrabold font-['Avenir-Black']">
        Let&#39;s Order
      </h1>
      <div className="product-list flex flex-wrap justify-center lg:justify-between mb-20">
        <a href="/product">
          <ProductCard
            name="Ice Coffee Palm Sugar"
            image="product-1"
            price="27.000"
          />
        </a>
        <a href="/product">
          <ProductCard
            name="Ice Coffee Green Tea"
            image="product-2"
            price="31.000"
          />
        </a>
        <a href="/product">
          <ProductCard name="Hanami Latte" image="product-3" price="29.000" />
        </a>
        <a href="/product">
          <ProductCard name="Clepon Coffee" image="product-4" price="28.000" />
        </a>
      </div>
    </div>
  );
}

export default Menu;
