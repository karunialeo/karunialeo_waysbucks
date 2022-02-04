import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import Products from "../tempDatabase/Products";
import thousandSeparator from "../utils/thousandSeparator";

function Menu() {
  return (
    <div className="mx-4 lg:mx-32 my-2 lg:my-10 relative">
      <h1 className="text-5xl mb-10 lg:mb-10 text-brand-red font-extrabold font-['Avenir-Black']">
        Let&#39;s Order
      </h1>
      <div className="product-list flex flex-wrap justify-center lg:justify-between mb-20">
        {Products.map((item) => (
          <Link to={`/product/${item.productIndex}`}>
            <ProductCard
              name={item.productName}
              image={`product-${item.productIndex}`}
              price={thousandSeparator(item.price)}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Menu;
