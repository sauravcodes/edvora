import React from "react";
import {
  Wrapper,
  PartOne,
  PartTwo,
  ProductName,
  BrandName,
  Price,
  Location,
  DateDiv,
  Description,
  Container,
  Partonedesc,
  Parttwodesc,
} from "./Product.styles";

function Product({
  product_name,
  brand_name,
  price,
  image,
  location,
  time,
  description,
}) {
  return (
    <Wrapper>
      <Container>
        <PartOne>
          <img
            style={{ height: "70px", width: "70px", borderRadius: "10px" }}
            src={image}
            alt="logo"
          ></img>
          <Partonedesc>
            <ProductName>{product_name}</ProductName>
            <BrandName>{brand_name}</BrandName>
            <Price> $ {price}</Price>
          </Partonedesc>
        </PartOne>
        <PartTwo>
          <Parttwodesc>
            <Location>{location}</Location>
            <DateDiv>Date : {new Date(time).toLocaleDateString()}</DateDiv>
          </Parttwodesc>
          <Description>{description}</Description>
        </PartTwo>
      </Container>
    </Wrapper>
  );
}

export default Product;
