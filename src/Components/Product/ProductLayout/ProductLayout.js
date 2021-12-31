import React from "react";
import ProductList from "../ProductList/ProductList";
import { Wrapper, Title, Subtitle } from "./ProductLayout.styles";

function Product() {
  return (
    <Wrapper>
      <Title>Edvora</Title>
      <Subtitle>Products</Subtitle>
      <ProductList />
    </Wrapper>
  );
}

export default Product;
