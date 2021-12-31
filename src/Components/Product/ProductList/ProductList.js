import React, { useContext, useState, useEffect } from "react";
import Product from "../Product/Product";
import {
  Wrapper,
  Title,
  ProductContainer,
  RightArrow,
  LeftArrow,
} from "./ProductList.styles";
import { ProductContext } from "../../DashBoard/HomePage";

function ProductList() {
  const ProductList = useContext(ProductContext);
  const [unique, setUnique] = useState(null);
  const findUniqueProuctName = (arr) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (!result.includes(arr[i].product_name)) {
        result.push(arr[i].product_name);
      }
    }
    return setUnique(result);
  };
  const handleRightArrow = (idx) => {
    console.log("1stage cleared");
    const conent = document.querySelector("#content" + idx);
    conent.scrollLeft += 300;
    console.log("2stage cleared");
  };

  const handleLeftArrow = () => {
    const conent = document.querySelector("#content");
    conent.scrollLeft -= 300;
  };

  useEffect(() => {
    findUniqueProuctName(ProductList || []);
    console.log(unique);
  }, [ProductList]);
  console.log(unique);
  return (
    <Wrapper>
      {unique?.map((pr, idx) => {
        return (
          <React.Fragment key={idx}>
            <Title>{pr}</Title>
            <ProductContainer id={"content" + idx}>
              <LeftArrow size={30} onClick={handleLeftArrow} />
              {ProductList?.filter((pro) => {
                if (pro.product_name === unique[idx]) {
                  return pro;
                }
              }).map((pro) => {
                return (
                  <Product
                    product_name={pro.product_name}
                    brand_name={pro.brand_name}
                    price={pro.price}
                    image={pro.image}
                    time={pro.time}
                    description={pro.discription}
                    location={pro.address.state}
                  />
                );
              })}
              <RightArrow size={30} onClick={() => handleRightArrow(idx)} />
            </ProductContainer>
          </React.Fragment>
        );
      })}
    </Wrapper>
  );
}

export default ProductList;
