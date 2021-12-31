import React, { useContext, useState } from "react";
import { Wrapper, Select } from "./FilterBox.styles";
import { ProductContext } from "../../../Components/DashBoard/HomePage";

function FilterBox() {
  const Product = useContext(ProductContext);
  const [productFilter, setProductFilter] = useState("");
  const [stateFilter, setStateFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const handleProductFilter = (e) => {
    return setProductFilter(e.target.value);
  };
  const handleStateFilter = (e) => {
    return setStateFilter(e.target.value);
  };
  const handleCityFilter = (e) => {
    return setCityFilter(e.target.value);
  };
  return (
    <Wrapper>
      <Select onChange={handleProductFilter}>
        <option value="none" selected disabled hidden>
          Products
        </option>
        {Product?.map((pr) => {
          return (
            <option value={pr.product_name} key={pr.time}>
              {pr.product_name}
            </option>
          );
        })}
      </Select>
      <Select onChange={handleStateFilter}>
        <option value="none" selected disabled hidden>
          State
        </option>
        {Product?.filter((pro) => {
          if (productFilter === "") {
            return pro;
          } else if (
            pro.product_name.toLowerCase().includes(productFilter.toLowerCase())
          ) {
            return pro;
          }
        }).map((pr) => {
          return (
            <option value={pr.address.state} key={pr.time}>
              {pr.address.state}
            </option>
          );
        })}
      </Select>
      <Select onChange={handleCityFilter}>
        <option value="none" selected disabled hidden>
          City
        </option>
        {Product &&
          Product?.filter((prod) => {
            if (stateFilter === "") {
              return prod;
            } else if (
              prod.address.state
                .toLowerCase()
                .includes(stateFilter.toLowerCase())
            ) {
              return prod;
            }
          }).map((pr) => {
            return (
              <option value={pr.address.city} key={pr.time}>
                {pr.address.city}
              </option>
            );
          })}
      </Select>
    </Wrapper>
  );
}

export default FilterBox;
