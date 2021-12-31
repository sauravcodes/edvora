import React, { useEffect, useState } from "react";
import FilterLayout from "../Filter/Filter/FilterLayout/FilterLayout";
import ProductLayout from "../Product/ProductLayout/ProductLayout";
import { ProductInfo } from "../Services/productService";
import { Wrapper } from "./HomePage.styles";

export const ProductContext = React.createContext();

function HomePage() {
  const [Product, setProducts] = useState(null);
  useEffect(() => {
    const getProductInfo = async () => {
      const data = await ProductInfo();
      if (data) {
        return setProducts(data);
      }
      return console.log(data);
    };
    getProductInfo();
  }, []);

  return (
    <Wrapper>
      <ProductContext.Provider value={Product}>
        <FilterLayout />
        <ProductLayout />
      </ProductContext.Provider>
    </Wrapper>
  );
}

export default HomePage;
